import { motion } from 'motion/react';
import { Check, Zap, Shield, Crown, Star, ArrowRight } from 'lucide-react';
import { Button } from '../components/Shared';

const plans = [
  {
    name: "Growth",
    price: "49",
    description: "Perfect for students starting their journey.",
    icon: Zap,
    color: "text-primary",
    features: [
      "Access to 50+ Intro Courses",
      "Community Discord Access",
      "Weekly Live Lab Sessions",
      "Digital Completion Certificates",
      "Standard Support"
    ]
  },
  {
    name: "Elite",
    price: "99",
    description: "The professional choice for career switchers.",
    popular: true,
    icon: Crown,
    color: "text-secondary",
    features: [
      "Access to ALL Courses",
      "1-on-1 Monthly Mentorship",
      "Priority Code Reviews",
      "Job Placement Assistance",
      "Exclusive Masterclasses",
      "Verified Skill Badges"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for high-performance teams.",
    icon: Shield,
    color: "text-accent",
    features: [
      "Custom Learning Paths",
      "Unlimited Team Members",
      "Dedicated account manager",
      "On-premise Training",
      "API Access for LMS Integration",
      "SLA-backed Support"
    ]
  }
];

export default function Pricing() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-accent/20 text-slate-900 w-fit text-[10px] font-black tracking-widest uppercase mb-6">
          Investment in Future
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
          Choose Your <span className="mesh-gradient">Trajectory</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
          Transparent pricing designed to scale with your ambition. No hidden fees, just pure intellectual growth.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`glass-card rounded-[48px] p-8 md:p-12 border ${plan.popular ? 'border-secondary/50 shadow-2xl relative' : 'border-white/50 shadow-xl'}`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-secondary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                Most Popular
              </div>
            )}

            <div className={`w-12 h-12 rounded-2xl bg-surface flex items-center justify-center mb-6 ${plan.color}`}>
              <plan.icon size={24} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
            <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
            
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-slate-900">{plan.price !== 'Custom' ? `$${plan.price}` : plan.price}</span>
              {plan.price !== 'Custom' && <span className="text-slate-400 font-bold text-sm">/month</span>}
            </div>

            <div className="flex flex-col gap-4 mb-10">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500`}>
                    <Check size={12} />
                  </div>
                  <span className="text-sm font-medium text-slate-600">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              className="w-full py-4 text-base" 
              variant={plan.popular ? 'primary' : 'secondary'}
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 p-12 md:p-20 glass-card rounded-[56px] border border-white/50 shadow-2xl overflow-hidden relative"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-md">
            <div className="flex items-center gap-2 text-primary font-bold mb-4">
              <Star className="fill-current" size={20} />
              <span className="text-sm tracking-widest uppercase">Student Discount</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Are you a student?</h2>
            <p className="text-slate-500">
              Get 50% off any plan with a valid .edu email or student ID. We believe talent shouldn't be limited by capital.
            </p>
          </div>
          <Button variant="secondary" className="px-10 py-5 border-slate-200">
            Verify Student Status
          </Button>
        </div>
      </motion.section>
    </div>
  );
}
