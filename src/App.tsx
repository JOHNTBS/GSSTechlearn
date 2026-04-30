/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Code, Brush, BarChart3, Diamond, Verified, Globe, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Shared Components ---

const Button = ({ children, className = '', variant = 'primary', ...props }: any) => {
  const variants: any = {
    primary: 'cta-gradient text-white hover:opacity-90 active:scale-95 transition-all',
    secondary: 'glass-card text-slate-700 hover:bg-white/90 active:scale-95 transition-all',
    ghost: 'text-slate-600 hover:text-slate-900 transition-colors',
    outline: 'border border-white/30 text-white hover:bg-white/10 transition-colors'
  };
  
  return (
    <button 
      className={`px-6 py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Navbar ---

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center h-20">
        <div className="text-xl font-black tracking-tighter text-slate-900">TECH_ED</div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-primary border-b-2 border-primary pb-1 text-sm font-medium">Courses</a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Curriculum</a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Mentors</a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex">Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};

// --- Hero ---

const Hero = () => {
  return (
    <header className="pt-40 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-primary w-fit text-xs font-bold tracking-widest uppercase">
            Future of Learning
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="mesh-gradient">Shape Your Future</span> <br />
            with Precision.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-lg">
            An elite educational ecosystem designed for the next generation of digital architects. Master the skills that define modern technology.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="px-8 py-4 text-base">
              Start Learning <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="secondary" className="px-8 py-4 text-base">
              View Curriculum
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZDuws46eh7QBuR6dy3K9wSVlA2Q3KLUgeg9k7SGH1SFQ1l5WDsVvAcApoDnx7QodWhqDia5ANJbaEJbtJeUgjpJlgudoYKfdeE1zrDl_pON9oq68JYPp4U-qsHMvc9SH9BLEszcFn_zBicM8AxFCxbTSVzzmXzA2_Cw467ZWMbyiZa4VXqBbChVOfhWk76ACIVj04Rh0COUMP3IXYzDFYQuLENRV5ztkf6U3qssVRRVNdwl2CkqoPKs78L2OPpDfhvup3Anl_tQ" 
            alt="3D Abstract Element" 
            className="w-full h-auto rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl flex items-center gap-4 border border-white/40 shadow-xl">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
              <Verified className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-sm">Accredited Content</div>
              <div className="text-xs text-slate-500">Industry Certified</div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

// --- Stats ---

const Stats = () => {
  const stats = [
    { label: 'Active Students', value: '45k+' },
    { label: 'Expert Mentors', value: '120' },
    { label: 'Hire Rate', value: '98%' },
    { label: 'User Rating', value: '4.9/5' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 pb-20">
      <div className="border-y border-slate-100 flex flex-wrap justify-between py-12 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center flex-1 min-w-[150px] border-r last:border-r-0 border-slate-100 px-4">
            <span className="text-4xl md:text-5xl font-bold text-slate-900">{stat.value}</span>
            <span className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2 text-center text-balance">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Tracks ---

const TrackCard = ({ icon: Icon, title, description, colorClass, linkColor }: any) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="glass-card p-10 rounded-3xl group border border-white/50 shadow-lg"
  >
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${colorClass}`}>
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 mb-8 leading-relaxed">
      {description}
    </p>
    <a href="#" className={`font-bold text-sm flex items-center gap-2 ${linkColor}`}>
      Explore Track <ArrowRight className="w-4 h-4" />
    </a>
  </motion.div>
);

const Tracks = () => {
  const tracks = [
    {
      icon: Code,
      title: 'Engineering',
      description: 'Master modern architectures with full-stack frameworks and scalable systems design.',
      colorClass: 'bg-primary/10 text-primary',
      linkColor: 'text-primary'
    },
    {
      icon: Brush,
      title: 'UI/UX Design',
      description: 'Design immersive interfaces focusing on high-end luxury aesthetics and user empathy.',
      colorClass: 'bg-secondary/10 text-secondary',
      linkColor: 'text-secondary'
    },
    {
      icon: BarChart3,
      title: 'Data Science',
      description: 'Leverage AI and machine learning to build predictive models and business intelligence.',
      colorClass: 'bg-slate-400/10 text-slate-600',
      linkColor: 'text-slate-600'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Curated Learning Tracks</h2>
        <p className="text-on-surface-variant text-lg">Expert-led courses designed for high-impact careers.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tracks.map((track, i) => (
          <TrackCard key={i} {...track} />
        ))}
      </div>
    </section>
  );
};

// --- Bento Grid ---

const Bento = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 text-balance">
      <div className="grid grid-cols-12 gap-6 auto-rows-[300px]">
        {/* Large Bento Card */}
        <div className="col-span-12 md:col-span-7 row-span-2 glass-card rounded-4xl p-12 flex flex-col justify-center relative overflow-hidden shadow-xl border border-white/50">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 max-w-sm">
              The Standard of Excellence.
            </h2>
            <p className="text-lg text-slate-500 max-w-xs mb-8">
              We provide more than just lessons; we provide a career-defining trajectory with direct access to Silicon Valley mentors.
            </p>
            <Button className="w-fit px-8 py-4">Join the Elite</Button>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none select-none">
            <Diamond className="w-[400px] h-[400px] absolute -right-20 -top-10 text-slate-900" />
          </div>
        </div>

        {/* Top Right Bento Card */}
        <div className="col-span-12 md:col-span-5 row-span-1 bg-slate-900 rounded-4xl p-10 flex flex-col justify-end text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-10 right-10 flex -space-x-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-700/50 backdrop-blur-sm" />
            ))}
          </div>
          <h4 className="text-xl font-bold mb-2">1-on-1 Mentorship</h4>
          <p className="text-slate-400 text-sm">Connect with leads from Apple, Stripe, and Google.</p>
        </div>

        {/* Bottom Right Bento Card */}
        <div className="col-span-12 md:col-span-5 row-span-1 glass-card rounded-4xl p-10 flex flex-col justify-end overflow-hidden border border-primary/20 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-1 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-tighter">NEW</div>
            <div className="text-xs font-bold text-primary">Live Lab Sessions</div>
          </div>
          <h4 className="text-xl font-bold mb-2 text-slate-900 text-balance">Hands-on Sandbox</h4>
          <p className="text-slate-500 text-sm">Practice in real-world environments with zero setup.</p>
        </div>
      </div>
    </section>
  );
};

// --- CTA Section ---

const CTA = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
      <div className="cta-gradient rounded-[48px] p-12 md:p-24 text-center text-white shadow-2xl overflow-hidden relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to define the next decade?</h2>
          <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Enrollment for the Winter cohort is now open. Join 45,000 students shaping the future of the web.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="outline" className="bg-white text-primary hover:bg-white/90 px-10 py-5 text-base border-none">
              Get Started Now
            </Button>
            <Button variant="outline" className="px-10 py-5 text-base">
              Speak with Admissions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Footer ---

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid grid-cols-2 md:grid-cols-4 gap-12 text-balance">
        <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
          <div className="text-lg font-black tracking-tighter text-slate-900">TECH_ED</div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Precision education for the modern era. Empowering designers and engineers to create the extraordinary.
          </p>
        </div>
        
        {[
          {
            title: 'Platform',
            links: ['Courses', 'Curriculum', 'Mentorship']
          },
          {
            title: 'Support',
            links: ['Help Center', 'Terms of Service', 'Privacy Policy']
          },
          {
            title: 'Company',
            links: ['About Us', 'Careers', 'Blog']
          }
        ].map((column, i) => (
          <div key={i}>
            <h5 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-8">{column.title}</h5>
            <ul className="flex flex-col gap-4">
              {column.links.map((link, j) => (
                <li key={j}>
                  <a href="#" className="text-xs font-semibold text-slate-400 hover:text-primary uppercase tracking-widest transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 pb-12 flex flex-col md:flex-row justify-between items-center border-t border-slate-50 pt-8 gap-6">
        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
          © 2024 Tech Ed Global. Designed for precision.
        </span>
        <div className="flex gap-6 text-slate-300">
          <Globe className="w-5 h-5 hover:text-primary transition-colors cursor-pointer" />
          <Terminal className="w-5 h-5 hover:text-primary transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Tracks />
      <Bento />
      <CTA />
      <Footer />
    </div>
  );
}
