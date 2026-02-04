import { Metadata } from 'next';
import LoginForm from '@/components/Auth/LoginForm';
import { Scale, Shield, Users, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login | Law Alumni Connect',
  description: 'Access your alumni account and connect with the legal community.',
};

const features = [
  { icon: Users, text: 'Connect with 10,000+ legal professionals' },
  { icon: Award, text: 'Access exclusive career opportunities' },
  { icon: Scale, text: 'Participate in legal forums and events' },
  { icon: Shield, text: 'Secure and private networking' },
];

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding & Info */}
          <div className="hidden lg:block">
            <div className="bg-linear-to-br from-[#1a1a2e] to-[#2d2d4a] rounded-3xl p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 bg-linear-to-br from-[#d4af37] to-[#b8962f] rounded-xl flex items-center justify-center">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Law Alumni</h2>
                    <p className="text-[#d4af37] text-sm">Connect</p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  Welcome Back to Our <span className="text-[#d4af37]">Legal Community</span>
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Access your alumni network and stay connected with fellow legal professionals from around the world.
                </p>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                        <feature.icon className="w-5 h-5 text-[#d4af37]" />
                      </div>
                      <span className="text-gray-300">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">New to our network?</strong>
                    <br />
                    Join thousands of legal professionals who are already connected.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 rounded-full mb-4">
                  <Scale className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-sm font-medium text-[#1a1a2e]">Alumni Portal</span>
                </div>
                <h1 className="text-3xl font-bold text-[#1a1a2e] mb-2">
                  Sign In
                </h1>
                <p className="text-gray-600">
                  Enter your credentials to access your account
                </p>
              </div>

              <LoginForm />

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  Don&apos;t have an account?{' '}
                  <Link
                    href="/register"
                    className="font-semibold text-[#d4af37] hover:text-[#b8962f] transition-colors"
                  >
                    Register here
                  </Link>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-500">
                  By signing in, you agree to our{' '}
                  <Link href="/terms" className="text-[#d4af37] hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-[#d4af37] hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
