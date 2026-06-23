import { redirect, notFound } from 'next/navigation';
import { complexes } from '@/lib/properties';

interface Props {
  params: Promise<{ slug: string }>;
}

function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default async function OldAccommodationRedirect({ params }: Props) {
  const { slug } = await params;

  for (const complex of complexes) {
    for (const unit of complex.units) {
      if (nameToSlug(unit.name) === slug || unit.id === slug) {
        redirect(`/properties/${complex.slug}/${unit.id}`);
      }
    }
  }

  notFound();
}
