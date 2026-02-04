'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
  'Connect with 15,000+ legal professionals globally',
  'Access to exclusive judiciaries and advocacy forums',
  'Mentorship from Supreme Court judges and senior advocates',
  'Legal practice opportunities and partnerships',
  'Quarterly conferences and seminars on emerging legal issues',
  'Dedicated career guidance and professional placements',
];

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a2e]">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl" />
        
        {/* Pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4af37' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Join India's Premier
              <br />
              <span className="gradient-text">Legal Alumni Network</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Become part of an elite community of judges, advocates, and legal scholars. 
              Register today and access exclusive opportunities, mentorship, and professional advancement.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Link
              href="/register"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-[#d4af37] to-[#e8c547] text-[#1a1a2e] font-bold rounded-full hover:shadow-2xl hover:shadow-[#d4af37]/30 transform hover:scale-105 transition-all duration-300"
            >
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-[#d4af37]/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-[#d4af37] mb-2">50+</div>
                <p className="text-gray-400">Years of Legal Excellence</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-2xl">
                  <div className="text-3xl font-bold text-white mb-1">15K+</div>
                  <p className="text-sm text-gray-400">Alumni Members</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl">
                  <div className="text-3xl font-bold text-white mb-1">800+</div>
                  <p className="text-sm text-gray-400">Judges & Advocates</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl">
                  <div className="text-3xl font-bold text-white mb-1">200+</div>
                  <p className="text-sm text-gray-400">Law Firms</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-2xl">
                  <div className="text-3xl font-bold text-white mb-1">45+</div>
                  <p className="text-sm text-gray-400">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
