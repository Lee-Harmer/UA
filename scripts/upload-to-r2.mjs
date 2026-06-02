import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { readdir, readFile } from "fs/promises";
import { join, relative } from "path";
import { config } from "dotenv";

config({ path: ".env.local" });

const ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const BUCKET = process.env.R2_BUCKET;
const LOCAL_DIR = "public/wp-content";

if (!ACCOUNT_ID || !BUCKET || !process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY) {
  console.error("Missing R2 credentials. Fill in .env.local first.");
  process.exit(1);
}
const CONCURRENCY = 20;

const client = new S3Client({
  region: "auto",
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

async function uploadFile(file, total, counter) {
  const key = "wp-content/" + relative("public/wp-content", file);
  try {
    const body = await readFile(file);
    await client.send(new PutObjectCommand({
      Bucket: BUCKET,
      Key: key,
      Body: body,
      ContentType: "image/jpeg",
    }));
    counter.done++;
  } catch (err) {
    counter.failed++;
    console.error(`\nFAILED: ${key} — ${err.message}`);
  }
  process.stdout.write(`\r[${counter.done + counter.failed}/${total}] uploaded ${counter.done}, failed ${counter.failed}  `);
}

const files = [];
for await (const f of walk(LOCAL_DIR)) files.push(f);
console.log(`Uploading ${files.length} files to R2 (${CONCURRENCY} concurrent)...`);

const counter = { done: 0, failed: 0 };

// Process in batches
for (let i = 0; i < files.length; i += CONCURRENCY) {
  const batch = files.slice(i, i + CONCURRENCY);
  await Promise.all(batch.map(f => uploadFile(f, files.length, counter)));
}

console.log(`\nDone. Uploaded ${counter.done}, failed ${counter.failed}.`);
