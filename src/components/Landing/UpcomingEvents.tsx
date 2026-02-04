'use client';

import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const upcomingEvents = [
  {
    id: 1,
    title: 'ILSians Reunion Delhi 2026',
    date: 'Feb 08, 2026',
    time: '12:30 PM - 3:30 PM',
    location: 'Neeti Bagh Club',
    type: 'Networking',
    image: '/uploads/reunionEvent.png',
  },
  // {
  //   id: 2,
  //   title: 'Constitutional Law Seminar 2026',
  //   date: 'April 8, 2026',
  //   time: '10:00 AM',
  //   location: 'ILS Delhi Campus',
  //   type: 'Seminar',
  //   image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  // },
  // {
  //   id: 3,
  //   title: 'Legal Practice & Leadership Workshop',
  //   date: 'April 22, 2026',
  //   time: '2:00 PM',
  //   location: 'Virtual + In-Person',
  //   type: 'Workshop',
  //   image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  // },
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
        <div className="gap-8 flex items-center justify-center">
          {upcomingEvents.map((event) => (
          <div
  key={event.id}
  className="group relative bg-white w-70 rounded-3xl overflow-hidden border border-gray-200 
             hover:shadow-2xl hover:shadow-[#d4af37]/20 transition-all duration-500 
             flex flex-col h-full cursor-pointer"
>
  {/* Image Section - Centered Focus */}
  <div className="relative h-48 overflow-hidden shrink-0">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
    />
    {/* Type Badge - Center-Top Floating */}
    <div className="absolute top-3 inset-x-0 flex justify-center">
      <span className="px-3 py-1 bg-white/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#1a1a2e] rounded-full shadow-sm">
        {event.type}
      </span>
    </div>
  </div>

  {/* Content Section - Centered Text Alignment */}
  <div className="p-5 flex flex-col items-center text-center flex-1">
    <h3 className="text-[17px] font-extrabold text-[#1a1a2e] mb-2 leading-tight group-hover:text-[#d4af37] transition-colors line-clamp-2">
      {event.title}
    </h3>
    
    <div className="flex flex-col items-center gap-1.5 mb-4">
      {/* Combined Date/Time for a clean look */}
      <div className="flex items-center gap-2 text-[#d4af37]">
        <Calendar className="w-3.5 h-3.5" />
        <span className="text-xs font-semibold uppercase tracking-tighter">
          {event.date} • {event.time}
        </span>
      </div>

      {/* Location with a subtle gray */}
      <div className="flex items-center gap-1 text-gray-400">
        <MapPin className="w-3 h-3" />
        <span className="text-[11px] font-medium max-w-[200px] truncate">
          {event.location}
        </span>
      </div>
    </div>

    {/* Elegant Action Button */}
    {/* <button className="mt-auto w-full py-2.5 bg-[#1a1a2e] text-white text-[12px] font-bold rounded-xl 
                       group-hover:bg-[#d4af37] group-hover:text-[#1a1a2e] transition-all duration-300
                       flex items-center justify-center gap-2">
      Book Now
      <ArrowRight className="w-3.5 h-3.5" />
    </button> */}
  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
