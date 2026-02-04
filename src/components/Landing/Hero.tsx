'use client';

import Link from 'next/link';
import { ArrowRight, Users, Briefcase, Globe, Scale } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/groupImg.jpeg)',
      }}
    >
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-8 hover:bg-white/15 transition-all duration-300">
            <Scale className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm font-medium text-white">India's Premier Alumni Network</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Welcome to ILSians Delhi 
            <br />
            <span className="text-[#d4af37]">Alumni Association Network</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto mb-10 drop-shadow-md font-medium">
            A space to reunite with your college circle, cherish the memories that shaped you, and create the ones that will carry you forward.
          </p>

          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/register"
              className="group px-8 py-4 bg-linear-to-r from-[#d4af37] to-[#e8c547] text-[#1a1a2e] font-bold rounded-full hover:shadow-2xl hover:shadow-[#d4af37]/30 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Join the Network
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/distinguished-alumni"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Explore Leaders
            </Link>
          </div> */}

          {/* Stats - Legal Focused */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: Users, value: '15,000+', label: 'Alumni Members' },
              { icon: Scale, value: '800+', label: 'Judges & Advocates' },
              { icon: Briefcase, value: '200+', label: 'Legal Firms' },
              { icon: Globe, value: '45+', label: 'Countries' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#d4af37]/30 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-[#d4af37] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
