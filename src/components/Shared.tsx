import { motion } from 'motion/react';
import { ArrowRight, Verified, Globe, Diamond, Terminal } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Button = ({ children, className = '', variant = 'primary', ...props }: any) => {
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

export const Logo = () => (
  <Link to="/" className="flex items-center gap-2">
    <div className="relative w-14 h-14 flex-shrink-0">
      <svg viewBox="0 0 120 100" className="w-full h-full overflow-visible">
        <defs>
          <radialGradient id="sphereGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#1AC9FF" />
            <stop offset="100%" stopColor="#004EB5" />
          </radialGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
            <feOffset dx="1" dy="1" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path d="M5 45 Q 50 -10 115 45" fill="none" stroke="#FFD100" strokeWidth="3" strokeLinecap="round" />
        <path d="M40 75 Q 85 95 110 65" fill="none" stroke="#FFD100" strokeWidth="2" strokeLinecap="round" />
        <circle cx="50" cy="50" r="35" fill="url(#sphereGrad)" filter="url(#shadow)" />
        <circle cx="40" cy="40" r="15" fill="white" fillOpacity="0.2" />
      </svg>
      <img 
        src="/logo.png" 
        alt="GRID logo" 
        className="absolute inset-0 w-full h-full object-contain opacity-0 pointer-events-none"
        onError={(e: any) => e.target.style.display = 'none'}
      />
    </div>
    <div className="flex flex-col -ml-4 z-10">
      <span className="text-[10px] font-black italic text-slate-800 leading-none">IT IN IT'S BEST</span>
      <div className="relative">
        <span className="text-4xl font-black italic tracking-tighter text-[#E3007E] leading-none drop-shadow-[1px_1px_0_rgba(0,45,98,1)]">
          GRID
        </span>
      </div>
      <span className="text-[10px] font-black text-[#004EB5] leading-none tracking-tight uppercase">
        Systems Solutions.
      </span>
    </div>
  </Link>
);

export const FloatingOrbs = () => (
  <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-30">
    <motion.div
      animate={{
        x: [0, 100, -50, 0],
        y: [0, -100, 50, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"
    />
    <motion.div
      animate={{
        x: [0, -80, 120, 0],
        y: [0, 120, -60, 0],
      }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-secondary/20 blur-[130px] rounded-full"
    />
    <motion.div
      animate={{
        opacity: [0.1, 0.3, 0.1],
        scale: [1, 1.2, 1],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full"
    />
  </div>
);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex justify-between items-center h-20">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          <Link to="/curriculum" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Courses</Link>
          <Link to="/curriculum" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Curriculum</Link>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Mentors</a>
          <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:flex">Login</Button>
          <div 
            className="relative"
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <Button 
              className="flex items-center gap-2"
              onMouseEnter={() => setIsMenuOpen(true)}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="hidden sm:inline">Get Started</span>
              <span className="sm:hidden">Menu</span>
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-4 h-4 rotate-90" />
              </motion.div>
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={isMenuOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.95 }}
              className={`absolute right-0 mt-2 w-64 glass-card rounded-2xl p-4 shadow-2xl border border-white/50 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}
            >
              <div className="flex flex-col gap-2">
                {[
                  { title: 'For Students', desc: 'Jumpstart your career', icon: Verified, color: 'text-secondary' },
                  { title: 'For Teams', desc: 'Collaborative learning', icon: Globe, color: 'text-primary' },
                  { title: 'For Enterprise', desc: 'Custom workforce tracks', icon: Diamond, color: 'text-accent' }
                ].map((item, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-colors group/item"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-surface flex items-center justify-center ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900 group-hover/item:text-secondary">{item.title}</span>
                      <span className="text-[10px] text-slate-400 font-medium">{item.desc}</span>
                    </div>
                  </a>
                ))}
                <Link 
                  to="/curriculum" 
                  className="mt-2 flex items-center justify-center p-3 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  View All Courses
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 grid grid-cols-2 md:grid-cols-4 gap-12 text-balance">
        <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
          <Logo />
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Precision education for the modern era. Empowering designers and engineers to create the extraordinary.
          </p>
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">Contact</span>
            <a href="tel:+2348056171127" className="text-sm text-primary font-semibold hover:underline decoration-accent underline-offset-4">
              +234 805 617 1127
            </a>
          </div>
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
