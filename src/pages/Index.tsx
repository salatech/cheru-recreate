
import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import CustomButton from '@/components/Button';
import { ArrowRight, Sparkles, Zap, Shield, Smartphone, LineChart, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureElements = featuresRef.current?.querySelectorAll('.feature-card');
    featureElements?.forEach((el) => observer.observe(el));

    const testimonialElements = testimonialsRef.current?.querySelectorAll('.testimonial');
    testimonialElements?.forEach((el) => observer.observe(el));

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: 'Modern Design',
      description: 'Beautiful, minimalist interfaces that follow Apple's design principles for a premium user experience.',
      icon: <Sparkles className="w-6 h-6 text-cheruPurple-400" />,
      gradient: 'bg-gradient-to-br from-cheruPurple-50 to-cheruPurple-100',
      link: '/features'
    },
    {
      title: 'Lightning Fast',
      description: 'Optimized performance ensures your applications run smoothly across all devices and platforms.',
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      gradient: 'bg-gradient-to-br from-amber-50 to-amber-100',
      link: '/performance'
    },
    {
      title: 'Secure by Default',
      description: 'Enterprise-grade security integrated at every level to protect your data and users.',
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      gradient: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      link: '/security'
    },
    {
      title: 'Mobile Optimized',
      description: 'Responsive designs that work perfectly on mobile, tablet, and desktop devices.',
      icon: <Smartphone className="w-6 h-6 text-blue-500" />,
      gradient: 'bg-gradient-to-br from-blue-50 to-blue-100',
      link: '/mobile'
    },
    {
      title: 'Advanced Analytics',
      description: 'Gain insights with powerful analytics tools to understand user behavior and engagement.',
      icon: <LineChart className="w-6 h-6 text-violet-500" />,
      gradient: 'bg-gradient-to-br from-violet-50 to-violet-100',
      link: '/analytics'
    },
    {
      title: 'Global Infrastructure',
      description: 'Deployed across multiple regions for low-latency access from anywhere in the world.',
      icon: <Globe className="w-6 h-6 text-teal-500" />,
      gradient: 'bg-gradient-to-br from-teal-50 to-teal-100',
      link: '/infrastructure'
    }
  ];

  const testimonials = [
    {
      quote: "Cherupil has transformed how we build and ship products. The attention to detail is remarkable.",
      author: "Alex Johnson",
      title: "Product Designer, Envision",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    },
    {
      quote: "The simplicity and power of this platform is unmatched. It's like Apple designed our development workflow.",
      author: "Michael Chen",
      title: "CTO, Nimbus Tech",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    },
    {
      quote: "We've cut our development time in half while creating more beautiful and functional products.",
      author: "Sarah Williams",
      title: "Head of Design, Elevate",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-24 px-6 md:px-10 bg-white" ref={featuresRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 rounded-full bg-cheruNeutral-50 border border-cheruNeutral-100 text-sm font-medium text-cheruNeutral-600 inline-block mb-4">
              Key Features
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cheruNeutral-800 tracking-tight">
              Designed with purpose
            </h2>
            <p className="mt-4 text-lg text-cheruNeutral-500 max-w-xl mx-auto">
              Every feature has been thoughtfully crafted to improve your workflow and create exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="feature-card opacity-0">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  link={feature.link}
                  gradient={feature.gradient}
                  delay={`delay-${index % 5 + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-10 bg-cheruNeutral-50" ref={testimonialsRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 rounded-full bg-white border border-cheruNeutral-100 text-sm font-medium text-cheruNeutral-600 inline-block mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cheruNeutral-800 tracking-tight">
              Loved by designers and developers
            </h2>
            <p className="mt-4 text-lg text-cheruNeutral-500 max-w-xl mx-auto">
              See what our customers are saying about how Cherupil has transformed their workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={cn(
                "testimonial bg-white p-8 rounded-2xl border border-gray-100 shadow-sm opacity-0",
                `delay-${index + 1}`
              )}>
                <blockquote className="text-lg text-cheruNeutral-700 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-medium text-cheruNeutral-800">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-cheruNeutral-500">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-10 bg-white" ref={ctaRef}>
        <div className="max-w-3xl mx-auto text-center opacity-0">
          <span className="px-4 py-1.5 rounded-full bg-cheruPurple-50 border border-cheruPurple-100 text-sm font-medium text-cheruPurple-500 inline-block mb-6">
            Get Started Today
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cheruNeutral-800 tracking-tight mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-lg text-cheruNeutral-500 mb-10 max-w-2xl mx-auto">
            Join thousands of designers and developers who are creating the next generation of digital experiences with Cherupil.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CustomButton 
              size="lg"
              className="w-full sm:w-auto"
            >
              Start for Free
            </CustomButton>
            
            <CustomButton 
              variant="outline"
              size="lg"
              className="w-full sm:w-auto group"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 w-4 h-4 inline-block transition-transform group-hover:translate-x-1" />
            </CustomButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
