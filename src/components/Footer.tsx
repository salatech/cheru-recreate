
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' },
        { name: 'Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Integrations', href: '/integrations' },
        { name: 'Enterprise', href: '/enterprise' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Support', href: '/support' },
        { name: 'Community', href: '/community' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '/privacy' },
        { name: 'Terms', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
      ]
    },
  ];

  return (
    <footer className="bg-cheruNeutral-50 border-t border-gray-100 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Logo & info */}
          <div className="lg:col-span-2">
            <a 
              href="/" 
              className="text-cheruNeutral-800 font-display font-bold text-2xl"
            >
              cherupil
            </a>
            <p className="mt-4 text-cheruNeutral-500 max-w-sm">
              Building the future of digital experiences with minimalist design and powerful functionality.
            </p>
            <div className="flex space-x-4 mt-6">
              {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((platform) => (
                <a 
                  key={platform} 
                  href={`https://${platform.toLowerCase()}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <span className="text-cheruNeutral-600 text-sm font-medium group-hover:text-cheruNeutral-800 transition-colors flex items-center">
                    {platform}
                    <ArrowUpRight className="ml-0.5 w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-cheruNeutral-800 font-medium mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-cheruNeutral-500 hover:text-cheruNeutral-800 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-cheruNeutral-500">
            © {currentYear} Cherupil. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a href="/terms" className="text-sm text-cheruNeutral-500 hover:text-cheruNeutral-800 transition-colors">
              Terms
            </a>
            <span className="text-cheruNeutral-300">•</span>
            <a href="/privacy" className="text-sm text-cheruNeutral-500 hover:text-cheruNeutral-800 transition-colors">
              Privacy
            </a>
            <span className="text-cheruNeutral-300">•</span>
            <a href="/cookies" className="text-sm text-cheruNeutral-500 hover:text-cheruNeutral-800 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
