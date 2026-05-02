import { motion } from 'motion/react';
import { ArrowRight, Code, Brush, BarChart3, Diamond, Verified, Server, Cloud, Monitor, ShieldCheck } from 'lucide-react';
import { Button } from '../components/Shared';
import { Link } from 'react-router-dom';

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
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-accent text-slate-900 w-fit text-xs font-bold tracking-widest uppercase shadow-sm">
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
            <Link to="/curriculum">
              <Button variant="secondary" className="px-8 py-4 text-base">
                View Curriculum
              </Button>
            </Link>
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

const TrackCard = ({ icon: Icon, title, description, colorClass, linkColor }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ 
      y: -8,
      boxShadow: "0 20px 40px rgba(0,0,0,0.05), 0 0 20px rgba(0,78,181,0.1)"
    }}
    className="glass-card p-10 rounded-3xl group border border-white/50 shadow-lg relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
    
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3 ${colorClass}`}>
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-500 mb-8 leading-relaxed">
      {description}
    </p>
    <a href="#" className={`font-bold text-sm flex items-center gap-2 ${linkColor}`}>
      Explore Track <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
    },
    {
      icon: Server,
      title: 'DevOps',
      description: 'Streamline software delivery with automated CI/CD pipelines, containerization, and orchestration.',
      colorClass: 'bg-orange-400/10 text-orange-600',
      linkColor: 'text-orange-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Build scalable global infrastructure across AWS, Azure, and GCP ecosystems.',
      colorClass: 'bg-cyan-400/10 text-cyan-600',
      linkColor: 'text-cyan-600'
    },
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Craft high-performance frontend and backend services with modern reactive stacks.',
      colorClass: 'bg-emerald-400/10 text-emerald-600',
      linkColor: 'text-emerald-600'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Curated Learning Tracks</h2>
        <p className="text-on-surface-variant text-lg">Expert-led courses designed for high-impact careers.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracks.map((track, i) => (
          <TrackCard key={i} {...track} />
        ))}
      </div>
    </section>
  );
};

const Bento = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 text-balance">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-12 gap-6 auto-rows-[300px]"
      >
        <div className="col-span-12 md:col-span-7 row-span-2 glass-card rounded-4xl p-12 flex flex-col justify-center relative overflow-hidden shadow-xl border border-white/50 group">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 max-w-sm">
              The Standard of Excellence.
            </h2>
            <p className="text-lg text-slate-500 max-w-xs mb-8">
              We provide more than just lessons; we provide a career-defining trajectory with direct access to Silicon Valley mentors.
            </p>
            <Button className="w-fit px-8 py-4">Join the Elite</Button>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none select-none group-hover:opacity-10 transition-opacity">
            <Diamond className="w-[400px] h-[400px] absolute -right-20 -top-10 text-slate-900 group-hover:rotate-12 transition-transform duration-700" />
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 row-span-1 bg-slate-900 rounded-4xl p-10 flex flex-col justify-end text-white overflow-hidden relative shadow-2xl group">
          <div className="absolute top-10 right-10 flex -space-x-4">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.1, zIndex: 10 }}
                className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-700/50 backdrop-blur-sm shadow-lg cursor-pointer" 
              />
            ))}
          </div>
          <h4 className="text-xl font-bold mb-2">1-on-1 Mentorship</h4>
          <p className="text-slate-400 text-sm">Connect with leads from Apple, Stripe, and Google.</p>
        </div>

        <div className="col-span-12 md:col-span-5 row-span-1 glass-card rounded-4xl p-10 flex flex-col justify-end overflow-hidden border border-primary/20 shadow-xl group">
          <div className="flex items-center gap-4 mb-4">
            <div className="px-3 py-1 bg-secondary text-white rounded-full text-[10px] font-black uppercase tracking-tighter shadow-[0_0_15px_rgba(227,0,126,0.5)]">NEW</div>
            <div className="text-xs font-bold text-secondary">Live Lab Sessions</div>
          </div>
          <h4 className="text-xl font-bold mb-2 text-slate-900 text-balance group-hover:text-primary transition-colors">Hands-on Sandbox</h4>
          <p className="text-slate-500 text-sm">Practice in real-world environments with zero setup.</p>
        </div>
      </motion.div>
    </section>
  );
};

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
            <Button variant="outline" className="bg-white text-secondary hover:bg-white/90 px-10 py-5 text-base border-none">
              Get Started Now
            </Button>
            <Button variant="outline" className="px-10 py-5 text-base border-white/40">
              Speak with Admissions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Tracks />
      <Bento />
      <CTA />
    </>
  );
}
