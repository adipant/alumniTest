import { Metadata } from 'next';
import { Clock, CheckCircle, Mail, Phone, Home } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pending Approval | Law Alumni Connect',
  description: 'Your profile is under review by our admin team.',
};

export default function PendingPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1a1a2e] to-[#2d2d4a] px-8 py-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-24 h-24 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <Clock className="w-12 h-12 text-yellow-400 animate-pulse" />
                <div className="absolute inset-0 border-4 border-yellow-400/30 rounded-full animate-ping" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-3">
                Profile Under Review
              </h1>
              <p className="text-gray-300 text-lg">
                Your registration is being reviewed by our admin team
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-10">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-[#1a1a2e] mb-4">
                What happens next?
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
                      <span className="text-[#d4af37] font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a2e] mb-1">Verification Process</h3>
                    <p className="text-gray-600 text-sm">
                      Our admin team is currently verifying your credentials and ensuring all information is accurate.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
                      <span className="text-[#d4af37] font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a2e] mb-1">Email Notification</h3>
                    <p className="text-gray-600 text-sm">
                      You&apos;ll receive an email notification once your profile has been approved. This typically takes 24-48 hours.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
                      <span className="text-[#d4af37] font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a1a2e] mb-1">Full Access</h3>
                    <p className="text-gray-600 text-sm">
                      Once approved, you&apos;ll gain complete access to the alumni directory, events, and networking features.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Card */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-yellow-900 mb-2">Application Submitted Successfully</h3>
                  <p className="text-yellow-800 text-sm mb-3">
                    Your payment has been processed and your application is now in the review queue.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-yellow-700">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                    <span>Status: Pending Admin Approval</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Estimated Time */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Estimated Approval Time</span>
                <span className="text-sm font-bold text-[#d4af37]">24-48 Hours</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-[#d4af37] to-[#e8c547] h-2 rounded-full w-1/3 animate-pulse" />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Your application is being processed...
              </p>
            </div>

            {/* Contact Section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-semibold text-[#1a1a2e] mb-4">Need Help?</h3>
              <p className="text-gray-600 text-sm mb-4">
                If you have any questions or need to update your information, please contact our admin team:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:admin@alumniconnect.edu"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">admin@alumniconnect.edu</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+1 (234) 567-890</span>
                </a>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#e8c547] text-[#1a1a2e] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#d4af37]/30 transform hover:scale-105 transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                Return to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl p-4">
          <p className="text-sm text-blue-800 text-center">
            <strong>Tip:</strong> Make sure to check your email regularly (including spam folder) for updates on your application status.
          </p>
        </div>
      </div>
    </div>
  );
}
