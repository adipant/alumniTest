'use client';

import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Law Alumni Networking Gala',
    date: 'March 15, 2026',
    time: '6:00 PM',
    location: 'Delhi High Court Auditorium',
    type: 'Networking',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Constitutional Law Seminar 2026',
    date: 'April 8, 2026',
    time: '10:00 AM',
    location: 'ILS Delhi Campus',
    type: 'Seminar',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Legal Practice & Leadership Workshop',
    date: 'April 22, 2026',
    time: '2:00 PM',
    location: 'Virtual + In-Person',
    type: 'Workshop',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #1a1a2e 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a2e]/5 rounded-full mb-4">
              <Calendar className="w-5 h-5 text-[#d4af37]" />
              <span className="text-sm font-medium text-[#1a1a2e]">Legal Community Events</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
              Upcoming <span className="text-[#d4af37]">Events</span>
            </h2>
          </div>
          <Link
            href="/events"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#1a1a2e] font-semibold hover:text-[#d4af37] transition-colors group"
          >
            View All Events
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#d4af37]/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#d4af37] rounded-full">
                  <span className="text-xs font-bold text-[#1a1a2e]">{event.type}</span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-4 group-hover:text-[#d4af37] transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <span>{event.location}</span>
                  </div>
                </div>

                <Link
                  href={`/events/${event.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-[#1a1a2e] font-semibold hover:text-[#d4af37] transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
