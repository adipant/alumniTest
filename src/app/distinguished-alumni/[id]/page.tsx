import { notFound } from 'next/navigation';
import AlumniProfile from '@/components/DistinguishedAlumni/AlumniProfile';
import { getAlumniById } from '@/lib/alumniData';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function AlumniProfilePage({ params }: Props) {
  const { id } = await params;
  const alumni = getAlumniById(parseInt(id));

  if (!alumni) {
    notFound();
  }

  return <AlumniProfile alumni={alumni} />;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const alumni = getAlumniById(parseInt(id));

  if (!alumni) {
    return {
      title: 'Alumni Not Found',
    };
  }

  return {
    title: `${alumni.name} - ILS Delhi Alumni Connect`,
    description: `${alumni.title} at ${alumni.organization}. ${alumni.achievement}`,
    openGraph: {
      title: `${alumni.name} - Distinguished Alumni`,
      description: alumni.achievement,
      images: [alumni.image],
    },
  };
}
