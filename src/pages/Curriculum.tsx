import { motion } from 'motion/react';
import { BookOpen, CheckCircle2, Clock, Star, Users, Brain, Rocket, Code, Database, Layout } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Full-Stack Software Engineering",
    duration: "24 Weeks",
    students: "1,200+",
    rating: "4.9",
    icon: Code,
    color: "text-primary",
    modules: [
      "Architecture & Clean Code",
      "Modern Backend with Node & Go",
      "Frontend Mastery: React & Next.js",
      "Scalable Databases (SQL & NoSQL)",
      "Cloud Infrastructure & CI/CD"
    ]
  },
  {
    id: 2,
    title: "AI & Data Engineering",
    duration: "20 Weeks",
    students: "850+",
    rating: "4.8",
    icon: Database,
    color: "text-secondary",
    modules: [
      "Statistics & Probability",
      "Python for Data Science",
      "Machine Learning Fundamentals",
      "Deep Learning & Neural Networks",
      "Big Data Architecture"
    ]
  },
  {
    id: 3,
    title: "Advanced UI/UX Systems",
    duration: "16 Weeks",
    students: "900+",
    rating: "5.0",
    icon: Layout,
    color: "text-accent",
    modules: [
      "Design Strategy & Psychology",
      "Visual Hierarchy & Typography",
      "Design Systems at Scale",
      "Interactive Prototyping",
      "Accessibility & Inclusive Design"
    ]
  }
];

export default function Curriculum() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          Master the <span className="mesh-gradient">Digital Industry</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Our curriculum is built by industry leads from top tech firms, ensuring you learn exactly what the market demands today and tomorrow.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[40px] p-8 md:p-12 border border-white/50 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={`w-16 h-16 rounded-2xl bg-white/50 flex items-center justify-center mb-8 ${course.color} shadow-sm`}>
                  <course.icon size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{course.title}</h2>
                
                <div className="flex flex-wrap gap-6 mb-10">
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <Clock size={18} className="text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <Users size={18} className="text-secondary" />
                    <span>{course.students} Students</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <Star size={18} className="text-accent" />
                    <span>{course.rating} Rating</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">What you'll master</h3>
                  <div className="flex flex-col gap-3">
                    {course.modules.map((module, i) => (
                      <div key={i} className="flex items-center gap-4 group cursor-default">
                        <div className="w-6 h-6 rounded-full bg-surface border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <CheckCircle2 size={14} />
                        </div>
                        <span className="text-slate-600 font-medium">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="mt-12 cta-gradient px-8 py-4 rounded-full text-white font-bold shadow-lg hover:shadow-primary/20 hover:scale-[1.02] transition-all">
                  Apply for Cohort
                </button>
              </div>

              <div className="hidden lg:block relative">
                <div className="aspect-square rounded-3xl bg-surface/50 border border-white/40 flex items-center justify-center p-12 overflow-hidden">
                  {/* Decorative elements based on course */}
                  <Brain className={`w-64 h-64 opacity-5 absolute ${course.color}`} />
                  <Rocket className={`w-32 h-32 absolute top-10 right-10 ${course.color} opacity-20`} />
                  <div className="relative z-10 text-center">
                    <div className="text-6xl font-black italic text-slate-900/10 mb-4 uppercase">GRID</div>
                    <div className="text-sm font-bold text-slate-400 tracking-widest mb-8">CURRICULUM SYSTEM v2.0</div>
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-2 rounded-full bg-slate-100" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
