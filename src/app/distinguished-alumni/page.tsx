import { Metadata } from 'next';
import DistinguishedAlumniClient from '@/components/DistinguishedAlumni/DistinguishedAlumniClient';
import { Award, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Distinguished Alumni | Law Alumni Connect',
  description: 'Explore our hall of excellence - distinguished legal professionals who have made extraordinary contributions to the field of law.',
};

export default function DistinguishedAlumniPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1a1a2e] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <Award className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm text-gray-300">Hall of Legal Excellence</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Distinguished <span className="gradient-text">Alumni</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Celebrating the remarkable achievements of our legal alumni who have made 
              extraordinary contributions to the judiciary, legal practice, and the pursuit of justice.
            </p>
          </div>

          <DistinguishedAlumniClient />
        </div>
      </section>
    </div>
  );
}
