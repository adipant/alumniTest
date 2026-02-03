'use client';

import { useState, useEffect, useCallback } from 'react';
import { Search, Filter, Briefcase, GraduationCap, Linkedin, Mail, Phone, ChevronDown, Loader2 } from 'lucide-react';
import { AlumniMember } from '@/types/alumni';

const practiceAreas = [
  'All Areas',
  'Corporate Law',
  'Criminal Law',
  'Family Law',
  'Civil Litigation',
  'Intellectual Property Law',
  'Tax Law',
  'Labor & Employment Law',
  'Real Estate & Property Law',
  'Environmental Law',
  'Immigration Law',
  'Constitutional Law',
  'Banking & Finance Law',
  'Healthcare & Medical Law',
  'International Law',
  'Cyber Law & Technology',
  'Human Rights Law',
  'Arbitration & Mediation',
  'Judiciary',
  'Legal Academia',
  'Government & Public Sector',
  'In-House Counsel',
  'Other',
];

const batchYears = ['All Years', '2020s', '2010s', '2000s', '1990s', '1980s', '1970s'];

interface DirectoryClientProps {
  initialMembers?: AlumniMember[];
}

export default function DirectoryClient({ initialMembers = [] }: DirectoryClientProps) {
  const [members, setMembers] = useState<AlumniMember[]>(initialMembers);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [selectedPracticeArea, setSelectedPracticeArea] = useState('All Areas');
  const [selectedBatchYear, setSelectedBatchYear] = useState('All Years');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchMembers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const params = new URLSearchParams({
        status: 'approved',
        page: page.toString(),
        limit: '12',
      });

      if (search) params.set('search', search);
      if (selectedPracticeArea !== 'All Areas') params.set('practiceArea', selectedPracticeArea);
      if (selectedBatchYear !== 'All Years') params.set('batchYear', selectedBatchYear);

      const response = await fetch(`/api/alumni?${params.toString()}`);
      const data = await response.json();

      if (data.success) {
        setMembers(data.data.members);
        setTotalPages(data.data.totalPages);
        setTotal(data.data.total);
      } else {
        setError(data.error || 'Failed to fetch alumni');
      }
    } catch (err) {
      setError('Failed to fetch alumni. Please try again later.');
      console.error('Error fetching alumni:', err);
    } finally {
      setLoading(false);
    }
  }, [page, search, selectedPracticeArea, selectedBatchYear]);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handlePracticeAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPracticeArea(e.target.value);
    setPage(1);
  };

  const handleBatchYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBatchYear(e.target.value);
    setPage(1);
  };

  return (
    <>
      {/* Search & Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search by name, practice area, or profile..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <div className="relative">
                <select
                  value={selectedPracticeArea}
                  onChange={handlePracticeAreaChange}
                  className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none bg-white min-w-[180px]"
                >
                  {practiceAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              <div className="relative">
                <select
                  value={selectedBatchYear}
                  onChange={handleBatchYearChange}
                  className="appearance-none px-4 py-3 pr-10 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none bg-white min-w-[140px]"
                >
                  {batchYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              <button className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="hidden sm:inline text-gray-600">More Filters</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Loading alumni...
                </span>
              ) : (
                <>
                  Showing <span className="font-semibold text-[#1a1a2e]">{members.length}</span> of{' '}
                  <span className="font-semibold text-[#1a1a2e]">{total}</span> alumni
                </>
              )}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <select className="text-sm border-none focus:ring-0 font-medium text-[#1a1a2e] cursor-pointer">
                <option>Most Recent</option>
                <option>Batch Year</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>

          {/* Error State */}
          {error && (
            <div className="text-center py-12">
              <p className="text-red-500 mb-4">{error}</p>
              <button
                onClick={fetchMembers}
                className="px-6 py-2 bg-[#1a1a2e] text-white rounded-lg hover:bg-[#2d2d4a] transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gray-200" />
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                      <div className="h-3 bg-gray-200 rounded w-1/2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full" />
                    <div className="h-3 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && members.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2">No alumni found</h3>
              <p className="text-gray-500 mb-6">
                {search || selectedPracticeArea !== 'All Areas' || selectedBatchYear !== 'All Years'
                  ? 'Try adjusting your search or filters'
                  : 'Be the first to register and join the alumni network!'}
              </p>
              <a
                href="/register"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#e8c547] text-[#1a1a2e] font-semibold rounded-full hover:shadow-lg transition-all"
              >
                Register Now
              </a>
            </div>
          )}

          {/* Alumni Grid */}
          {!loading && !error && members.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#d4af37]/30 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={member.imageUrl || '/placeholder-avatar.png'}
                        alt={member.fullName}
                        className="w-16 h-16 rounded-xl object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64?text=?';
                        }}
                      />
                      <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 bg-[#d4af37] text-[#1a1a2e] text-[10px] font-bold rounded">
                        {member.batchYear}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#1a1a2e] truncate group-hover:text-[#d4af37] transition-colors">
                        {member.fullName}
                      </h3>
                      <p className="text-sm text-gray-600 truncate">{member.practiceArea}</p>
                    </div>
                  </div>

                  {/* Brief Profile */}
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3">{member.briefProfile}</p>

                  {/* Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Briefcase className="w-4 h-4 text-[#d4af37]" />
                      <span className="truncate">{member.practiceArea}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <GraduationCap className="w-4 h-4 text-[#d4af37]" />
                      <span>Batch of {member.batchYear}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#0077b5]/10 text-[#0077b5] rounded-lg hover:bg-[#0077b5] hover:text-white transition-colors text-sm font-medium"
                      >
                        <Linkedin className="w-4 h-4" />
                        Connect
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-[#d4af37] hover:text-[#1a1a2e] transition-colors"
                        title={member.email}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center justify-center p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
                        title={member.phone}
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    )}
                    {!member.linkedinUrl && !member.email && !member.phone && (
                      <span className="flex-1 text-center text-sm text-gray-400 py-2">
                        No contact info provided
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && !error && totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className={`px-4 py-2 transition-colors ${
                  page === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-[#1a1a2e] hover:text-[#d4af37]'
                }`}
              >
                Previous
              </button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (page <= 3) {
                  pageNum = i + 1;
                } else if (page >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = page - 2 + i;
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all ${
                      page === pageNum ? 'bg-[#1a1a2e] text-white' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className={`px-4 py-2 transition-colors ${
                  page === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-[#1a1a2e] hover:text-[#d4af37]'
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
