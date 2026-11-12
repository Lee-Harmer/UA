import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { readdir, readFile } from "fs/promises";
import { join } from "path";
import { config } from "dotenv";

config({ path: ".env.local" });

const ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const BUCKET = process.env.R2_BUCKET;
const LOCAL_DIR = "public/wp-content/uploads/2026/11";
const R2_PREFIX = "wp-content/uploads/2026/11";

if (!ACCOUNT_ID || !BUCKET || !process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY) {
  console.error("Missing R2 credentials. Fill in .env.local first.");
  process.exit(1);
}

const client = new S3Client({
  region: "auto",
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

const files = (await readdir(LOCAL_DIR)).filter(f => f.endsWith(".jpg")).sort((a, b) => parseInt(a) - parseInt(b));
console.log(`Uploading ${files.length} files...`);

let done = 0, failed = 0;
for (const file of files) {
  const key = `${R2_PREFIX}/${file}`;
  try {
    const body = await readFile(join(LOCAL_DIR, file));
    await client.send(new PutObjectCommand({ Bucket: BUCKET, Key: key, Body: body, ContentType: "image/jpeg" }));
    done++;
    console.log(`✓ ${key}`);
  } catch (err) {
    failed++;
    console.error(`✗ ${key} — ${err.message}`);
  }
}
console.log(`\nDone. Uploaded ${done}, failed ${failed}.`);
