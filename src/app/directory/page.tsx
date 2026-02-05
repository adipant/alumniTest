import { Metadata } from 'next';
import { Users } from 'lucide-react';
import DirectoryClient from '@/components/Directory/DirectoryClient';

export const metadata: Metadata = {
  title: 'Alumni Directory | AlumniConnect',
  description: 'Browse and connect with thousands of alumni from around the world.',
};

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1a1a2e] overflow-x-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <Users className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm text-gray-300">Connect with ILS Delhi Alumni</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Alumni <span className="gradient-text">Directory</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Browse and connect with thousands of alumni from around the world. 
              Find mentors, collaborators, and lifelong connections.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-12 max-w-3xl mx-auto">
            {[
              { value: '220+', label: 'Registered Members' },
            //   { value: '50+', label: 'Countries' },
            //   { value: '100+', label: 'Industries' },
              { value: '55', label: 'Batch Years' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="text-2xl font-bold text-[#d4af37]">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directory Content - Client Component */}
      <DirectoryClient />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not in the Directory Yet?
          </h2>
          <p className="text-gray-400 mb-8">
            Join thousands of alumni who are already part of our network. 
            Register today and start connecting!
          </p>
          <a
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#e8c547] text-[#1a1a2e] font-bold rounded-full hover:shadow-2xl hover:shadow-[#d4af37]/30 transform hover:scale-105 transition-all duration-300"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}