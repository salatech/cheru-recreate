
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10 py-4",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          className="text-cheruNeutral-800 font-display font-bold text-2xl hover:opacity-80 transition-opacity"
        >
          cherupil
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Products', 'Company', 'Blog', 'Support'].map((item) => (
            <a 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="text-cheruNeutral-600 hover:text-cheruNeutral-900 text-sm font-medium transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <Button 
            className="bg-cheruNeutral-800 hover:bg-cheruNeutral-900 text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-cheruNeutral-800" />
          ) : (
            <Menu className="w-6 h-6 text-cheruNeutral-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-24 px-6 transition-all duration-300 ease-in-out transform md:hidden",
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-8">
          {['Products', 'Company', 'Blog', 'Support'].map((item) => (
            <a 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="text-cheruNeutral-800 text-2xl font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button 
            className="bg-cheruNeutral-800 hover:bg-cheruNeutral-900 text-white rounded-full w-full mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
