'use client';

import Link from 'next/link';
import { Award, ChevronRight, Star, ExternalLink } from 'lucide-react';
import { distinguishedAlumni } from '@/lib/alumniData';

// const featuredAlumni = [
//   {
//     id: 1,
//     name: 'Hon. Justice Rajesh Kumar',
//     batch: '1985',
//     title: 'Supreme Court Judge',
//     organization: 'Supreme Court of India',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
//     achievement: 'Landmark constitutional judgments on civil rights',
//   },
//   {
//     id: 2,
//     name: 'Priya Sharma',
//     batch: '1998',
//     title: 'Senior Advocate',
//     organization: 'Delhi High Court',
//     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
//     achievement: 'Leading authority on corporate law and mergers',
//   },
//   {
//     id: 3,
//     name: 'Dr. Arun Mehta',
//     batch: '1995',
//     title: 'Managing Partner',
//     organization: 'Mehta & Associates Legal Firm',
//     image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
//     achievement: 'Recognized as top 10 lawyers in India',
//   },
//   {
//     id: 4,
//     name: 'Vikram Singh',
//     batch: '2003',
//     title: 'Attorney General Designate',
//     organization: 'Ministry of Law & Justice',
//     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
//     achievement: 'Youngest appointed to government legal position',
//   },
// ];

const DistinguishedAlumniSection = () => {
  return (
    <section className="py-24 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1a1a2e]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 rounded-full mb-6">
            <Award className="w-5 h-5 text-[#d4af37]" />
            <span className="text-sm font-medium text-[#1a1a2e]">Hall of Legal Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
            Leading Legal <span className="text-[#d4af37]">Professionals</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the distinguished judges, advocates, and legal scholars from ILS Delhi who are shaping 
            the Indian judiciary and legal practice with their remarkable contributions and visionary leadership.
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {distinguishedAlumni.slice(2, 6).map((alumni, index) => (
            <div
              key={alumni.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#1a1a2e] via-transparent to-transparent opacity-80" />
                
                {/* Batch Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#d4af37] rounded-full">
                  <span className="text-xs font-bold text-[#1a1a2e]">Batch of {alumni.batch}</span>
                </div>

                {/* Name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{alumni.name}</h3>
                  <p className="text-sm text-[#d4af37]">{alumni.title}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">{alumni.organization}</p>
                <div className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{alumni.achievement}</p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#1a1a2e]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link
                  href={`/distinguished-alumni/${alumni.id}`}
                  className="px-6 py-3 bg-[#d4af37] text-[#1a1a2e] font-semibold rounded-full flex items-center gap-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                >
                  View Profile
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/distinguished-alumni"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a2e] text-white font-semibold rounded-full hover:bg-[#2d2d4a] transform hover:scale-105 transition-all duration-300 group"
          >
            View All Distinguished Alumni
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DistinguishedAlumniSection;
