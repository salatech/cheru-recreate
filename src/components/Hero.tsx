
import React from 'react';
import CustomButton from './Button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-6 md:px-10">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-30 z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cheruPurple-100 rounded-full blur-[120px] opacity-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <div className={cn(
          "mb-6 inline-block px-4 py-1.5 rounded-full bg-cheruPurple-50 border border-cheruPurple-100",
          "opacity-0 animate-fade-in"
        )}>
          <span className="text-sm font-medium text-cheruPurple-500">Introducing Cherupil Platform</span>
        </div>
        
        <h1 className={cn(
          "text-4xl md:text-6xl lg:text-7xl font-display font-bold text-cheruNeutral-800 tracking-tight leading-tight mb-6",
          "opacity-0 animate-fade-in delay-1"
        )}>
          Building the future <br className="hidden md:block" /> 
          of digital experiences
        </h1>
        
        <p className={cn(
          "text-lg md:text-xl text-cheruNeutral-500 max-w-2xl mx-auto mb-10",
          "opacity-0 animate-fade-in delay-2"
        )}>
          A minimalist platform for creators, designers, and developers to build beautiful and functional digital products with ease.
        </p>
        
        <div className={cn(
          "flex flex-col sm:flex-row items-center justify-center gap-4",
          "opacity-0 animate-fade-in delay-3"
        )}>
          <CustomButton 
            size="lg"
            className="w-full sm:w-auto"
          >
            Get Started
          </CustomButton>
          
          <CustomButton 
            variant="outline"
            size="lg"
            className="w-full sm:w-auto group"
          >
            Learn More 
            <ArrowRight className="ml-2 w-4 h-4 inline-block transition-transform group-hover:translate-x-1" />
          </CustomButton>
        </div>
      </div>
      
      {/* Floating element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-4">
        <div className="w-8 h-14 rounded-full border-2 border-cheruNeutral-300 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cheruNeutral-400 rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
