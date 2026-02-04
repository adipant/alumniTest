import { Metadata } from 'next';
import { Scale, Target, Eye, Users, Award, Globe, BookOpen, Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Alumni Connect',
  description: 'Learn about our mission to connect law graduates and build a strong legal community.',
};

const values = [
  {
    icon: Scale,
    title: 'Justice & Integrity',
    description: 'Upholding the highest standards of legal ethics and professional conduct in all our endeavors.',
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Fostering meaningful connections among alumni to create a supportive network.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Promoting lifelong legal and socio - economic education and professional development opportunities.',
  },
  {
    icon: Handshake,
    title: 'Mentorship',
    description: 'Facilitating knowledge transfer between experienced professionals and new graduates.',
  },
];

const milestones = [
  // { year: '1970', title: 'Foundation', description: 'Law School established with first graduating class' },
  // { year: '1985', title: 'Alumni Association', description: 'Formal alumni network created' },
  // { year: '2000', title: '5,000 Alumni', description: 'Reached significant alumni milestone' },
  { year: '2025', title: 'Digital Platform', description: 'The First Delhi chapter alumni reunion' },
  { year: '2026', title: 'Alumni Association', description: 'Formal alumni network created' },
];

const leadership = [
  {
    name: 'Hon. Justice Margaret Chen',
    role: 'President, Alumni Association',
    batch: '1985',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    bio: 'Supreme Court Justice and advocate for legal education reform.',
  },
  {
    name: 'Adv. Rajesh Kumar',
    role: 'Vice President',
    batch: '1992',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    bio: 'Senior Advocate and founder of Kumar & Associates.',
  },
  {
    name: 'Prof. Sarah Williams',
    role: 'Secretary',
    batch: '1998',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    bio: 'Dean of Law School and constitutional law expert.',
  },
  {
    name: 'Adv. Michael D\'Souza',
    role: 'Treasurer',
    batch: '2005',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
    bio: 'Corporate lawyer and managing partner at DSA Legal.',
  },
];

export default function AboutPage() {
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
              <Scale className="w-4 h-4 text-[#d4af37]" />
              <span className="text-sm text-gray-300">Our Story</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About <span className="gradient-text">Alumni Connect</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              A platform to connect with your college peers/seniors to foster meaningful future collaboration. We are more than an alumni network — we are a community committed to justice, mentorship, and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#d4af37]/10 rounded-2xl -z-10" />
              <div className="bg-linear-to-br from-[#1a1a2e] to-[#2d2d4a] rounded-3xl p-8 text-white">
                <div className="w-16 h-16 bg-[#d4af37] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#1a1a2e]" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  To cultivate a vibrant, engaged community of professionals that supports 
                  career advancement, encourages knowledge sharing, and promotes excellence in 
                  the practice of law while upholding the highest ethical standards.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#d4af37]/10 rounded-2xl -z-10" />
              <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-xl">
                <div className="w-16 h-16 bg-[#d4af37]/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#1a1a2e]">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To be recognized as the premier legal alumni network globally, known for 
                  fostering innovation in legal practice policy making, advancing social justice, and 
                  producing leaders who shape the future of law and governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
              Our Core <span className="text-[#d4af37]">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do as a community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#d4af37]/10 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
              Our <span className="text-[#d4af37]">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Five decades of excellence in legal education and alumni engagement
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-[#d4af37] to-[#b8962f] hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                      <div className="text-3xl font-bold text-[#d4af37] mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative shrink-0 hidden md:block">
                    <div className="w-6 h-6 bg-[#d4af37] rounded-full border-4 border-white shadow-lg" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
              Leadership <span className="text-[#d4af37]">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Distinguished alumni guiding our association with wisdom and vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="px-2 py-1 bg-[#d4af37] rounded text-xs font-bold text-[#1a1a2e] inline-block mb-2">
                      Batch {leader.batch}
                    </div>
                    <h3 className="text-lg font-bold text-white">{leader.name}</h3>
                    <p className="text-sm text-[#d4af37]">{leader.role}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <section className="py-20 bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '10,000+', label: 'Alumni Worldwide' },
              { icon: Award, value: '500+', label: 'Senior Advocates' },
              { icon: Globe, value: '50+', label: 'Countries' },
              { icon: Scale, value: '200+', label: 'Judges & Justices' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#d4af37]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-[#d4af37]" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
            Join Our Community
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Be part of a legacy of excellence. Connect with fellow ILS Law College graduates and shape the future of the legal profession.
          </p>
          <a
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-[#d4af37] to-[#e8c547] text-[#1a1a2e] font-bold rounded-full hover:shadow-2xl hover:shadow-[#d4af37]/30 transform hover:scale-105 transition-all duration-300"
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}
