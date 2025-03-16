
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  className?: string;
  gradient?: string;
  delay?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  link, 
  className = '',
  gradient = 'bg-cheruPurple-50',
  delay = '' 
}: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "relative p-8 rounded-2xl border border-gray-100 transition-all duration-300 overflow-hidden group",
        "opacity-0 animate-blur-in",
        delay,
        isHovered ? "shadow-lg transform -translate-y-1" : "shadow-sm",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(
        "absolute -inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
        gradient
      )}></div>
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
          {icon}
        </div>
        
        <h3 className="text-xl font-display font-semibold text-cheruNeutral-800 mb-3">
          {title}
        </h3>
        
        <p className="text-cheruNeutral-500 mb-5">
          {description}
        </p>
        
        {link && (
          <a 
            href={link}
            className="inline-flex items-center text-cheruNeutral-800 font-medium group"
          >
            Learn more 
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
