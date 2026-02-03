'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Award, Search, Star, ExternalLink, Linkedin, ChevronRight } from 'lucide-react';

const distinguishedAlumni = [
  {
    id: 1,
    name: 'Hon. Justice Sarah Mitchell',
    batch: '1995',
    title: 'Supreme Court Justice',
    organization: 'Supreme Court of India',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    achievement: 'First woman Chief Justice, authored landmark judgments on constitutional rights',
    category: 'Judiciary',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Adv. James Richardson',
    batch: '1998',
    title: 'Senior Advocate',
    organization: 'Supreme Court Bar Association',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    achievement: 'Argued 100+ cases before Supreme Court, Forbes Legal Powerlist 2025',
    category: 'Litigation',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Prof. Emily Chen',
    batch: '2001',
    title: 'Dean of Law School',
    organization: 'Harvard Law School',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    achievement: 'Leading expert in Constitutional Law, authored 5 books on legal theory',
    category: 'Academia',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Adv. Michael Torres',
    batch: '2003',
    title: 'Managing Partner',
    organization: 'Torres & Associates',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    achievement: 'Youngest senior advocate, specializes in corporate and M&A law',
    category: 'Corporate Law',
    linkedin: '#',
  },
  {
    id: 5,
    name: 'Adv. Amanda Foster',
    batch: '1992',
    title: 'Human Rights Advocate',
    organization: 'International Court of Justice',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face',
    achievement: 'Represented landmark human rights cases, UN Human Rights Council member',
    category: 'Human Rights',
    linkedin: '#',
  },
  {
    id: 6,
    name: 'Adv. Robert Chang',
    batch: '1997',
    title: 'Intellectual Property Expert',
    organization: 'World Intellectual Property Organization',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    achievement: 'Pioneer in cyber law and IP rights, advised Fortune 500 companies',
    category: 'IP & Cyber Law',
    linkedin: '#',
  },
  {
    id: 7,
    name: 'Hon. Justice Lisa Thompson',
    batch: '2005',
    title: 'High Court Judge',
    organization: 'Delhi High Court',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
    achievement: 'Youngest appointed High Court judge, expert in family and criminal law',
    category: 'Judiciary',
    linkedin: '#',
  },
  {
    id: 8,
    name: 'Adv. Marcus Johnson',
    batch: '1990',
    title: 'Attorney General',
    organization: 'State Government',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    achievement: 'Former Solicitor General, led major constitutional reforms',
    category: 'Government',
    linkedin: '#',
  },
];

const categories = ['All', 'Judiciary', 'Litigation', 'Corporate Law', 'Academia', 'Human Rights', 'IP & Cyber Law', 'Government'];

export default function DistinguishedAlumniClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAlumni = useMemo(() => {
    return distinguishedAlumni.filter((alumni) => {
      const matchesSearch =
        searchQuery === '' ||
        alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alumni.achievement.toLowerCase().includes(searchQuery.toLowerCase()) ||
        alumni.batch.includes(searchQuery) ||
        alumni.organization.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || alumni.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div>
      {/* Search & Filter */}
      <div className="mt-12 max-w-3xl mx-auto">
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search alumni by name, batch, or achievement..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-[#d4af37] text-[#1a1a2e]'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mt-12 text-center text-gray-300">
        Showing {filteredAlumni.length} of {distinguishedAlumni.length} distinguished alumni
      </div>

      {/* Alumni Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredAlumni.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-6 py-3 bg-[#d4af37] text-[#1a1a2e] font-semibold rounded-xl hover:bg-[#b8962f] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredAlumni.map((alumni) => (
                <div
                  key={alumni.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={alumni.image}
                      alt={alumni.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/40 to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-bold text-[#1a1a2e]">{alumni.category}</span>
                    </div>

                    {/* Batch Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-[#d4af37] rounded-full">
                      <span className="text-xs font-bold text-[#1a1a2e]">Batch {alumni.batch}</span>
                    </div>

                    {/* Name overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{alumni.name}</h3>
                      <p className="text-sm text-[#d4af37]">{alumni.title}</p>
                      <p className="text-xs text-gray-300">{alumni.organization}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start gap-2 mb-4">
                      <Star className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 line-clamp-2">{alumni.achievement}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={alumni.linkedin}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0077b5] transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                      <Link
                        href={`/distinguished-alumni/${alumni.id}`}
                        className="flex items-center gap-1 text-sm font-medium text-[#1a1a2e] hover:text-[#d4af37] transition-colors group/link"
                      >
                        View Profile
                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Know a Distinguished Alumnus?</h2>
          <p className="text-gray-400 mb-8">
            Help us recognize outstanding alumni who have made significant contributions to the legal profession.
          </p>
          <Link
            href="/nominate"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#e8c547] text-[#1a1a2e] font-bold rounded-full hover:shadow-2xl hover:shadow-[#d4af37]/30 transform hover:scale-105 transition-all duration-300"
          >
            Nominate an Alumni
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
