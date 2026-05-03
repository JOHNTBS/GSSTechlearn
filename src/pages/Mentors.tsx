import { motion } from 'motion/react';
import { Linkedin, Twitter, Globe, Github, Star, Award, MessageSquare, Briefcase } from 'lucide-react';
import { Button } from '../components/Shared';

const mentors = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Principal Engineer at Google",
    specialty: "Distributed Systems & AI",
    bio: "Lead architect for planetary-scale databases. 15+ years experience in the industry.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    stats: "200+ Mentored",
    rating: "5.0"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Senior Design Lead at Apple",
    specialty: "Systems Design & Interaction",
    bio: "Specializing in minimal luxury interfaces and emotional design psychology.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    stats: "150+ Mentored",
    rating: "4.9"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "CTO at Stealth Fintech",
    specialty: "Security & Blockchain",
    bio: "Ex-Stripe security lead. Passionate about decentralization and financial transparency.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    stats: "120+ Mentored",
    rating: "5.0"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Data Science Director at Meta",
    specialty: "Predictive Analytics",
    bio: "Turning complex data into growth strategies. Specialized in Big Data paradigms.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
    stats: "300+ Mentored",
    rating: "4.8"
  },
  {
    id: 5,
    name: "Aisha Patel",
    role: "Product Lead at Netflix",
    specialty: "Product Strategy & Growth",
    bio: "Expert in user retention and engagement scaling. 10+ years of high-growth product experience.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400&h=400",
    stats: "180+ Mentored",
    rating: "4.9"
  },
  {
    id: 6,
    name: "David Kim",
    role: "Open Source Advocate",
    specialty: "Cloud Native & DevOps",
    bio: "Kubernetes core contributor. Helping developers build resilient, scalable infrastructure.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    stats: "250+ Mentored",
    rating: "5.0"
  }
];

export default function Mentors() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-secondary/10 text-secondary w-fit text-xs font-bold tracking-widest uppercase mb-6">
          Elite Network
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          Learn from the <span className="mesh-gradient">Architects</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Skip years of trial and error. Get direct guidance from the engineers and designers who built the tools you use every day.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor, index) => (
          <motion.div
            key={mentor.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-4xl overflow-hidden border border-white/50 shadow-xl group hover:shadow-2xl transition-all"
          >
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
                    <Twitter size={18} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors cursor-pointer">
                    <Linkedin size={18} />
                  </div>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                  View Profile
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{mentor.name}</h3>
                  <div className="text-sm font-bold text-primary">{mentor.role}</div>
                </div>
                <div className="flex items-center gap-1 text-accent font-black">
                  <Star size={14} fill="currentColor" />
                  <span>{mentor.rating}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-surface text-[10px] font-bold text-slate-400 uppercase tracking-tighter border border-slate-100">
                  {mentor.specialty}
                </span>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {mentor.bio}
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-slate-50 pt-8">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase text-slate-300 tracking-widest">Impact</span>
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <Award size={14} className="text-secondary" /> {mentor.stats}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase text-slate-300 tracking-widest">Typical Response</span>
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <MessageSquare size={14} className="text-primary" /> Under 24h
                  </span>
                </div>
              </div>

              <Button className="w-full mt-8" variant="secondary">
                Request Session
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 p-12 md:p-24 bg-slate-900 rounded-[56px] text-white overflow-hidden relative"
      >
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Apply to become <br /> a Mentor.
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Share your expertise with the next generation of engineers. Our mentors are vetted for both technical excellence and pedagogical style.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button className="bg-white text-slate-900 hover:bg-slate-100 border-none px-10">Apply Now</Button>
              <div className="flex items-center gap-4 text-sm font-bold opacity-60">
                <Briefcase size={20} /> Recruitment is open
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Network', val: '5k+ Leads' },
              { label: 'Exits', val: '12 Startups' },
              { label: 'Trust', val: 'Global Brands' },
              { label: 'Vision', val: 'Open Source' }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">{item.val}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative Bg Grid */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none select-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
      </motion.section>
    </div>
  );
}
