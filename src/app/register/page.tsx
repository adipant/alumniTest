import { Metadata } from 'next';
import { RegistrationForm } from '@/components/Registration';
import { UserPlus, Shield, Clock, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Register | AlumniConnect',
  description: 'Join our distinguished alumni community. Register today and connect with fellow graduates.',
};

const features = [
  {
    icon: Shield,
    title: 'Secure Registration',
    description: 'Your data is protected with industry-standard encryption',
  },
  {
    icon: Clock,
    title: 'Quick Process',
    description: 'Complete your registration in just 3 simple steps',
  },
  {
    icon: Award,
    title: 'Lifetime Membership',
    description: 'One-time fee for permanent access to all benefits',
  },
];

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1a1a2e] overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <UserPlus className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm text-gray-300">Join the Community</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Become an <span className="gradient-text">Alumni Member</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Register today and unlock exclusive access to events, networking opportunities, 
              and lifelong connections with fellow alumni.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
              >
                <div className="w-12 h-12 bg-[#d4af37]/20 rounded-xl flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RegistrationForm />
        </div>
      </section>
    </div>
  );
}
