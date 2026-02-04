'use client';

import Link from 'next/link';
import { Award, Linkedin, Mail, Globe, ArrowLeft, BookOpen, Trophy } from 'lucide-react';
import { Alumni } from '@/lib/alumniData';

interface AlumniProfileProps {
  alumni: Alumni;
}

export default function AlumniProfile({ alumni }: AlumniProfileProps) {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#1a1a2e] to-[#16213e]">
      {/* Header with Back Button */}
      <div className="bg-[#0f3460] py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/distinguished-alumni"
            className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#e8c547] transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Alumni
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Image */}
            <div className="md:col-span-1">
              <img
                src={alumni.image}
                alt={alumni.name}
                className="w-full h-96 md:h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-4 flex items-center gap-3">
                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-bold text-[#1a1a2e] bg-[#d4af37]">
                  {alumni.category}
                </span>
                <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-bold text-[#1a1a2e]">
                  Batch {alumni.batch}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-2">{alumni.name}</h1>
              <p className="text-xl text-[#d4af37] font-semibold mb-1">{alumni.title}</p>
              <p className="text-gray-600 mb-6">{alumni.organization}</p>

              <p className="text-gray-700 mb-6 leading-relaxed">{alumni.achievement}</p>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-4">
                {alumni.contact?.email && (
                  <a
                    href={`mailto:${alumni.contact.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37] text-[#1a1a2e] rounded-lg font-semibold hover:bg-[#e8c547] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                )}
                {alumni.contact?.website && (
                  <a
                    href={alumni.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-[#1a1a2e] rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    Website
                  </a>
                )}
                {alumni.linkedin && alumni.linkedin !== '#' && (
                  <a
                    href={alumni.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-lg font-semibold hover:bg-[#005a9c] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Bio and Specialization */}
          <div className="lg:col-span-2">
            {/* Bio Section */}
            {alumni.bio && (
              <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1a1a2e] mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed">{alumni.bio}</p>
              </div>
            )}

            {/* Specialization Section */}
            {alumni.specialization && (
              <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-[#d4af37]" />
                  <h2 className="text-2xl font-bold text-[#1a1a2e]">Specialization</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {alumni.specialization.split(', ').map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[#f0e6d2] text-[#1a1a2e] rounded-full text-sm font-semibold"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Publications Section */}
            {alumni.publications && alumni.publications.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-[#d4af37]" />
                  <h2 className="text-2xl font-bold text-[#1a1a2e]">Publications</h2>
                </div>
                <ul className="space-y-3">
                  {alumni.publications.map((pub, idx) => (
                    <li key={idx} className="flex items-start gap-3 pb-3 border-b border-gray-200 last:border-b-0">
                      <span className="text-[#d4af37] font-bold mt-1">•</span>
                      <span className="text-gray-700">{pub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column - Awards and Highlights */}
          <div className="lg:col-span-1">
            {/* Awards Section */}
            {alumni.awards && alumni.awards.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-6">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-6 h-6 text-[#d4af37]" />
                  <h2 className="text-xl font-bold text-[#1a1a2e]">Awards & Recognition</h2>
                </div>
                <ul className="space-y-3">
                  {alumni.awards.map((award, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#d4af37] font-bold text-lg">★</span>
                      <span className="text-sm text-gray-700">{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-linear-to-r from-[#d4af37] to-[#e8c547] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">Interested in connecting?</h3>
          <p className="text-[#1a1a2e]/80 mb-6">
            Have a question or want to collaborate? Feel free to reach out through the contact information provided.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#1a1a2e] text-white rounded-lg font-semibold hover:bg-[#0f3460] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
