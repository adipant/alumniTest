import { Metadata } from 'next';
import ContactForm from '@/components/Contact/ContactForm';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Law Alumni Connect',
  description: 'Get in touch with the Law Alumni Connect team. We&apos;re here to help.',
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    primary: 'alumni@lawschool.edu',
    secondary: 'support@alumniconnect.edu',
  },
  // {
  //   icon: Phone,
  //   title: 'Call Us',
  //   primary: '+1 (234) 567-8900',
  //   secondary: 'Mon-Fri, 9:00 AM - 6:00 PM EST',
  // },
  // {
  //   icon: MapPin,
  //   title: 'Visit Us',
  //   primary: '123 University Avenue',
  //   secondary: 'Academic City, ST 12345',
  // },
  {
    icon: Clock,
    title: 'Office Hours',
    primary: 'Monday - Friday',
    secondary: '9:00 AM - 6:00 PM EST',
  },
];

const faqCategories = [
  {
    title: 'Membership',
    questions: [
      'How do I register?',
      'What are the membership benefits?',
      'Is there a membership fee?',
    ],
  },
  {
    title: 'Events',
    questions: [
      'How do I register for events?',
      'Can I bring guests?',
      'Are events virtual or in-person?',
    ],
  },
  {
    title: 'Technical',
    questions: [
      'I forgot my password',
      'How do I update my profile?',
      'Website not loading properly',
    ],
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#1a1a2e] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm text-gray-300">Get in Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Have questions or need assistance? Our team is here to help you. 
              Reach out and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-16 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#d4af37]/10 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium mb-1">{info.primary}</p>
                <p className="text-sm text-gray-500">{info.secondary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
                  Send Us a <span className="text-[#d4af37]">Message</span>
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will respond within 24-48 hours during business days.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* FAQ & Map */}
            <div className="space-y-8">
              {/* Quick FAQs */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#1a1a2e] mb-6">
                  Quick <span className="text-[#d4af37]">FAQs</span>
                </h3>
                <div className="space-y-6">
                  {faqCategories.map((category, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-[#1a1a2e] mb-3 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                        {category.title}
                      </h4>
                      <ul className="space-y-2 ml-4">
                        {category.questions.map((question, qIndex) => (
                          <li key={qIndex}>
                            <a
                              href="#"
                              className="text-sm text-gray-600 hover:text-[#d4af37] transition-colors"
                            >
                              {question}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a
                    href="/faq"
                    className="text-sm font-medium text-[#d4af37] hover:text-[#b8962f] transition-colors"
                  >
                    View All FAQs →
                  </a>
                </div>
              </div>

              {/* Map */}
              {/* <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98731668459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-[#1a1a2e] mb-2">Alumni Office Location</h3>
                  <p className="text-sm text-gray-600">
                    123 University Avenue, Suite 456<br />
                    Academic City, ST 12345<br />
                    United States
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[#d4af37] hover:text-[#b8962f] transition-colors"
                  >
                    Get Directions
                    <MapPin className="w-4 h-4" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      {/* <section className="py-16 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Emergency Contact</h2>
            <p className="text-gray-400 mb-4">
              For urgent matters requiring immediate attention
            </p>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +1 (234) 567-8900
            </a>
            <p className="text-xs text-gray-500 mt-4">Available 24/7 for emergencies only</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}
