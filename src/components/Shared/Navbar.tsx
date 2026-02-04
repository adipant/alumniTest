'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, GraduationCap, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Distinguished Alumni', href: '/distinguished-alumni' },
    { name: 'Directory', href: '/directory' },
    { name: 'Contact', href: '/contact' },
  ];

  const actionButtons = [
    // { name: 'Login', href: '/login', isOutline: true },
    { name: 'Register', href: '/register', isButton: true, isOutline: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1a1a2e]/98 backdrop-blur-md ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#b8962f] rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#e8c547] rounded-full opacity-60 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-tight">
                ILSians Delhi
              </span>
              <span className="text-xs text-gray-400 -mt-1">An Initiative of ILS law College Alumni, Delhi Chapter</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 font-medium transition-colors duration-300 ${
                    isActive ? 'text-[#d4af37]' : 'text-white hover:text-[#d4af37]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#d4af37] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0'
                  }`} />
                </Link>
              );
            })}

            {/* Action Buttons */}
            <div className="flex items-center gap-2 ml-4">
              {actionButtons.map((button) =>
                button.isOutline ? (
                  <Link
                    key={button.name}
                    href={button.href}
                    className="px-5 py-2 border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-full hover:bg-[#d4af37] hover:text-[#1a1a2e] transform hover:scale-105 transition-all duration-300"
                  >
                    {button.name}
                  </Link>
                ) : (
                  <Link
                    key={button.name}
                    href={button.href}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#d4af37] to-[#e8c547] text-[#1a1a2e] font-semibold rounded-full hover:shadow-lg hover:shadow-[#d4af37]/30 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                    {button.name}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:text-[#d4af37] hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 bg-[#1a1a2e]/95 backdrop-blur-md rounded-2xl mb-4 px-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#d4af37]/20 text-[#d4af37] font-semibold' 
                      : 'text-white hover:text-[#d4af37] hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Action Buttons */}
            <div className="pt-2 space-y-2">
              {actionButtons.map((button) => (
                <Link
                  key={button.name}
                  href={button.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-xl text-center font-semibold transition-all duration-300 ${
                    button.isOutline
                      ? 'border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a2e]'
                      : 'bg-gradient-to-r from-[#d4af37] to-[#e8c547] text-[#1a1a2e]'
                  }`}
                >
                  {button.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
