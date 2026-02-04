'use client';

import { Newspaper, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';

const latestNews = [
  {
    id: 1,
    title: 'Hon. Justice Rajesh Kumar Appointed to Constitutional Bench',
    excerpt: 'A historic milestone as our alumnus is appointed to the Constitutional Bench, setting precedent in judicial excellence and legal scholarship.',
    date: 'January 28, 2026',
    category: 'Judicial',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'Class of 1995 Legal Practice Achieves National Recognition',
    excerpt: 'A prestigious law firm founded by multiple alumni from the Class of 1995 receives Best Legal Practice award for corporate law.',
    date: 'January 25, 2026',
    category: 'Achievement',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
    featured: false,
  },
  {
    id: 3,
    title: 'Alumna Priya Sharma Wins International Legal Excellence Award',
    excerpt: 'Senior Advocate and alumna Priya Sharma recognized for groundbreaking work in women\'s rights and constitutional law.',
    date: 'January 20, 2026',
    category: 'Excellence',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop',
    featured: false,
  },
];

const LatestNews = () => {
  const featuredNews = latestNews.find(news => news.featured);
  const regularNews = latestNews.filter(news => !news.featured);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a2e]/5 rounded-full mb-4">
              <Newspaper className="w-5 h-5 text-[#d4af37]" />
              <span className="text-sm font-medium text-[#1a1a2e]">Alumni Achievements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
              Latest <span className="text-[#d4af37]">News</span>
            </h2>
          </div>
          <Link
            href="/news"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#1a1a2e] font-semibold hover:text-[#d4af37] transition-colors group"
          >
            View All News
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured News */}
          {featuredNews && (
            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#d4af37] rounded-full">
                  <span className="text-xs font-bold text-[#1a1a2e]">{featuredNews.category}</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{featuredNews.title}</h3>
                  <div className="flex items-center gap-2 text-gray-300 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{featuredNews.date}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{featuredNews.excerpt}</p>
                <Link
                  href={`/news/${featuredNews.id}`}
                  className="inline-flex items-center gap-2 text-[#1a1a2e] font-semibold hover:text-[#d4af37] transition-colors group/link"
                >
                  Read Full Story
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          )}

          {/* Regular News */}
          <div className="space-y-6">
            {regularNews.map((news) => (
              <div
                key={news.id}
                className="group flex gap-6 bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-32 h-32 shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-[#d4af37]/10 text-[#d4af37] text-xs font-semibold rounded">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-400">{news.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-2 group-hover:text-[#d4af37] transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{news.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
