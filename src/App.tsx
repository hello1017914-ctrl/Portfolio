import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, CheckCircle2, Zap, Clock, ShieldCheck, Instagram, MessageSquare, ExternalLink, Sparkles, Quote, ChevronRight } from "lucide-react";
import React, { useState, useRef } from "react";

// --- Types ---
interface CaseStudy {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  before: string;
  after: string;
  whatChanged: string;
}

// --- Data ---
const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "E-Commerce Product Brand",
    category: "E-Commerce",
    subtitle: "Skincare brand — Instagram caption rewrite",
    before: "New arrival! Our Vitamin C Serum is now in stock. 30ml bottle. Suitable for all skin types. Order now from our website. Link in bio. #skincare #serum #vitamins",
    after: "your skin has been doing the most. give it something back. our Vitamin C Serum absorbs in 60 seconds flat — no sticky residue, just that quiet confidence that comes from skin that's finally getting what it deserves. link in bio before it sells out (again). #glowup #skincareforreal #selfcarethatworks",
    whatChanged: "Replaced feature listing with emotional storytelling. Added urgency. Made the reader feel something, not just know something."
  },
  {
    id: 2,
    title: "Fitness & Wellness Coach",
    category: "Fitness",
    subtitle: "Online coach — Instagram bio rewrite",
    before: "Certified Personal Trainer | Online Coaching | DM for enquiries | Helping people get fit | 10+ years experience | Follow for tips",
    after: "you've started over enough times. let's make this the last one. I coach real people with real lives — no 4am workouts, no cutting out entire food groups. just a plan that fits you and actually sticks. DM 'READY' and let's talk.",
    whatChanged: "Removed generic credentials. Opened with the client's pain point. Clear CTA with a specific action word ('READY'). Sounds human, not a bot."
  },
  {
    id: 3,
    title: "SaaS / Tech Product",
    category: "SaaS",
    subtitle: "Project management tool — homepage hero rewrite",
    before: "TaskFlow is a powerful project management solution designed to streamline workflows, enhance team collaboration, and improve productivity across organizations of all sizes. Get started today.",
    after: "your team isn't bad at their jobs. they're buried under tools that don't talk to each other. TaskFlow connects everything — tasks, messages, deadlines — in one place, so your team can stop managing their work and start doing it. free for 14 days, no card needed.",
    whatChanged: "Started with customer's frustration, not product features. Reframed the problem. Ended with a low-friction CTA that removes purchase anxiety."
  },
  {
    id: 4,
    title: "Local Business — Salon",
    category: "Local Business",
    subtitle: "Hair salon — Google Business Profile description rewrite",
    before: "Welcome to Luxe Hair Salon. We offer haircuts, coloring, styling, and treatments. Our experienced staff will take care of all your hair needs. Visit us today. Walk-ins welcome.",
    after: "good hair days shouldn't be rare. at Luxe, we've spent 8 years making sure yours isn't. whether you're after a fresh cut, a bold color change, or just want someone who actually listens before touching your hair — we've got you. walk-ins welcome. your next great hair day is probably this week.",
    whatChanged: "Dropped the generic welcome. Added personality and a subtle jab at bad salon experiences. Created a sense of familiarity and trust."
  }
];

const PRICING = [
  { service: "Instagram Caption (x1)", price: 15, details: "Single scroll-stopping caption with hook, body, and CTA." },
  { service: "Instagram Caption Pack (x5)", price: 60, details: "5 captions for a week of content, varied for engagement and sales." },
  { service: "Product Description", price: 20, details: "One product listing — features reframed as benefits." },
  { service: "Instagram Bio Rewrite", price: 25, details: "Profile bio that converts visitors to followers." },
  { service: "Google Business Profile", price: 30, details: "Full GMB description optimized for local discovery." },
  { service: "Homepage Hero Copy", price: 75, details: "Headline + subhead + CTA for your website's main section." },
  { service: "Ad Copy (FB/IG)", price: 35, details: "Primary text + headline + description for one ad." },
  { service: "Email (single)", price: 40, details: "One marketing or sales email — subject line included." },
  { service: "Full Brand Copy Package", price: 199, details: "Bio + 5 captions + product description + hero copy." },
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center glass">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-emerald-950 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-950/20">
        <Zap className="text-emerald-400 w-6 h-6" />
      </div>
      <span className="font-display font-bold text-2xl tracking-tighter text-emerald-950">CopyQuill</span>
    </div>
    <div className="hidden md:flex gap-10 text-sm font-semibold text-slate-500 uppercase tracking-widest">
      <a href="#work" className="hover:text-emerald-950 transition-all hover:tracking-[0.15em]">Work</a>
      <a href="#pricing" className="hover:text-emerald-950 transition-all hover:tracking-[0.15em]">Pricing</a>
      <a href="#process" className="hover:text-emerald-950 transition-all hover:tracking-[0.15em]">Process</a>
    </div>
    <a href="#contact" className="bg-emerald-950 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-emerald-900 transition-all shadow-2xl shadow-emerald-950/30 hover:scale-105 active:scale-95">
      Start Project
    </a>
  </nav>
);

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={targetRef} className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden bg-white">
      <motion.div style={{ opacity, scale }} className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-[0.2em] mb-10"
        >
          <Sparkles className="w-3.5 h-3.5" /> The Gold Standard in AI Copy
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl md:text-9xl font-bold text-emerald-950 leading-[0.9] mb-10 tracking-tighter"
        >
          Words that <br />
          <span className="gradient-text italic font-serif font-normal">make people buy.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-14 leading-relaxed font-light"
        >
          We transform generic business text into high-performance sales assets. E-commerce, SaaS, and Local Brands — we convert your visitors into loyal clients.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a href="#work" className="bg-emerald-950 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-900 transition-all shadow-2xl shadow-emerald-950/20 flex items-center gap-3 group">
            View Our Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#pricing" className="bg-white text-emerald-950 border border-emerald-100 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all flex items-center gap-3">
            See Pricing <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-emerald-100/40 rounded-full blur-[150px] animate-pulse delay-1000" />
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className="p-10 rounded-[2.5rem] bg-white border border-slate-100 text-center premium-shadow transition-all duration-500"
  >
    <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner">
      <Icon className="text-emerald-900 w-8 h-8" />
    </div>
    <h3 className="font-display font-bold text-2xl text-emerald-950 mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-500 text-base leading-relaxed font-light">{desc}</p>
  </motion.div>
);

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
  const [showAfter, setShowAfter] = useState(true);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group bg-white rounded-[3rem] border border-slate-100 overflow-hidden premium-shadow hover:shadow-2xl transition-all duration-700"
    >
      <div className="p-10 md:p-16">
        <div className="flex flex-wrap items-start justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold text-lg shadow-lg">
                {study.id}
              </span>
              <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-black uppercase tracking-[0.2em] border border-emerald-100">
                {study.category}
              </span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-emerald-950 mb-4 tracking-tighter leading-none">{study.title}</h3>
            <p className="text-slate-400 text-lg font-medium italic font-serif">{study.subtitle}</p>
          </div>
          
          <div className="flex p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
            <button 
              onClick={() => setShowAfter(false)}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${!showAfter ? 'bg-white text-emerald-950 shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
            >
              BEFORE
            </button>
            <button 
              onClick={() => setShowAfter(true)}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${showAfter ? 'bg-emerald-950 text-white shadow-lg' : 'text-slate-400 hover:text-slate-600'}`}
            >
              AFTER
            </button>
          </div>
        </div>

        <div className="relative min-h-[200px] p-10 rounded-[2rem] bg-slate-50 border border-slate-100 mb-12 group-hover:bg-white transition-colors duration-500">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-emerald-900/5" />
          <motion.div
            key={showAfter ? 'after' : 'before'}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className={`text-xl md:text-2xl leading-relaxed italic ${showAfter ? 'text-emerald-950 font-medium' : 'text-slate-400 font-light'}`}
          >
            "{showAfter ? study.after : study.before}"
          </motion.div>
        </div>

        <div className="flex gap-6 items-start p-8 rounded-2xl bg-emerald-50/30 border border-emerald-100/50">
          <div className="mt-1 p-2 bg-emerald-900 rounded-lg">
            <Sparkles className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <p className="text-xs font-black text-emerald-900 uppercase tracking-[0.3em] mb-2">The Strategy</p>
            <p className="text-lg text-slate-600 leading-relaxed font-light">{study.whatChanged}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-[#fcfcfc]">
      <Navbar />
      
      <main>
        <Hero />

        {/* Features Grid */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={Zap} 
              title="AI-Augmented" 
              desc="We combine elite human intuition with advanced AI to produce copy that resonates at a psychological level." 
            />
            <FeatureCard 
              icon={Clock} 
              title="Rapid Delivery" 
              desc="Premium results shouldn't take months. We deliver boardroom-ready copy within 48 hours, guaranteed." 
            />
            <FeatureCard 
              icon={ShieldCheck} 
              title="The Guarantee" 
              desc="If the copy doesn't outperform your current metrics, we rewrite it until it does. No questions asked." 
            />
          </div>
        </section>

        {/* Case Studies */}
        <section id="work" className="px-6 py-32 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-4 block"
              >
                Case Studies
              </motion.span>
              <h2 className="font-display text-5xl md:text-7xl font-bold text-emerald-950 mb-6 tracking-tighter">The Proof of Concept</h2>
              <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light">A curated selection of transformations that turned browsers into buyers.</p>
            </div>
            
            <div className="grid gap-20">
              {CASE_STUDIES.map((study) => (
                <CaseStudyCard key={study.id} study={study} />
              ))}
            </div>
          </div>
          
          {/* Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-slate-50 -z-10 select-none opacity-50">
            RESULTS
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="px-6 py-32 bg-emerald-950 text-white rounded-[4rem] mx-4 my-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-400 blur-[200px]" />
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <span className="text-emerald-400 font-black uppercase tracking-[0.4em] text-xs mb-4 block">Investment</span>
              <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Transparent Pricing</h2>
              <p className="text-emerald-100/60 text-xl max-w-2xl mx-auto font-light">Premium copywriting shouldn't be a guessing game. Choose your package and scale today.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="px-10 py-8 font-display font-bold text-xl uppercase tracking-wider">Service</th>
                      <th className="px-10 py-8 font-display font-bold text-xl uppercase tracking-wider">Investment</th>
                      <th className="px-10 py-8 font-display font-bold text-xl uppercase tracking-wider hidden lg:table-cell">Deliverable</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {PRICING.map((item, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-all duration-300 group">
                        <td className="px-10 py-8">
                          <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="font-bold text-xl group-hover:translate-x-2 transition-transform duration-300">{item.service}</span>
                          </div>
                        </td>
                        <td className="px-10 py-8">
                          <span className="text-emerald-400 font-black text-2xl tracking-tighter">${item.price}</span>
                        </td>
                        <td className="px-10 py-8 text-emerald-100/40 text-base hidden lg:table-cell font-light">{item.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-20 p-12 md:p-20 rounded-[3.5rem] bg-gradient-to-br from-emerald-900 to-emerald-950 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-3xl">
              <div className="text-center lg:text-left">
                <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tighter leading-none">Ready to dominate <br />your market?</h3>
                <p className="text-emerald-100/60 text-lg font-light">DM 'READY' on Instagram or Fiverr to secure your slot. <br />We only take 5 clients per week to maintain quality.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
                <button className="bg-emerald-400 text-emerald-950 px-12 py-5 rounded-2xl font-black text-lg hover:bg-emerald-300 transition-all shadow-2xl shadow-emerald-400/20 flex items-center justify-center gap-3 group">
                  <Instagram className="w-6 h-6" /> Instagram <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center gap-3">
                  <MessageSquare className="w-6 h-6" /> Fiverr
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="px-6 py-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-4 block">The Workflow</span>
              <h2 className="font-display text-5xl md:text-7xl font-bold text-emerald-950 mb-6 tracking-tighter">Frictionless Execution</h2>
              <p className="text-slate-500 text-xl max-w-2xl mx-auto font-light">From initial contact to high-converting copy in 48 hours.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-12">
              {[
                { step: "01", title: "The Brief", desc: "Connect via Instagram or Fiverr. We discuss your goals and current roadblocks." },
                { step: "02", title: "The Deep Dive", desc: "A precision 5-minute audit of your brand voice, target audience, and product." },
                { step: "03", title: "The Delivery", desc: "Receive your optimized copy within 48 hours, formatted and ready for launch." },
                { step: "04", title: "The Optimization", desc: "One round of elite revisions included to ensure the copy hits the mark perfectly." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="text-8xl font-display font-black text-emerald-950/5 absolute -top-10 -left-4 select-none group-hover:text-emerald-950/10 transition-colors duration-500">
                    {item.step}
                  </div>
                  <div className="relative z-10 pt-8">
                    <h4 className="font-display font-bold text-2xl text-emerald-950 mb-4 tracking-tight">{item.title}</h4>
                    <p className="text-slate-500 text-base leading-relaxed font-light">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="px-6 py-40 overflow-hidden relative bg-white">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="mb-12 inline-block"
            >
              <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner rotate-12">
                <Sparkles className="text-emerald-900 w-12 h-12" />
              </div>
            </motion.div>
            <h2 className="font-display text-6xl md:text-8xl font-bold text-emerald-950 mb-10 leading-[0.9] tracking-tighter">
              The only thing <br />
              standing between you <br />
              and <span className="gradient-text italic font-serif font-normal">more sales.</span>
            </h2>
            <p className="text-2xl text-slate-400 mb-16 max-w-2xl mx-auto font-light">
              Don't leave your revenue to chance. Secure your high-conversion copy today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-emerald-950 text-white px-14 py-6 rounded-[2rem] font-black text-xl hover:bg-emerald-900 transition-all shadow-3xl shadow-emerald-950/30 flex items-center justify-center gap-3 group">
                Start Your Project <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-emerald-950 border border-emerald-100 px-14 py-6 rounded-[2rem] font-black text-xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-3">
                View Samples <ExternalLink className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
          </div>
        </section>
      </main>

      <footer className="px-8 py-20 border-t border-slate-100 bg-slate-50/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-950 rounded-lg flex items-center justify-center shadow-lg">
              <Zap className="text-emerald-400 w-5 h-5" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-emerald-950">CopyQuill</span>
          </div>
          <p className="text-slate-400 text-sm font-medium tracking-widest uppercase">
            © 2026 CopyQuill | AI Copywriting Studio | Confidential Document
          </p>
          <div className="flex gap-8">
            <Instagram className="w-6 h-6 text-slate-300 hover:text-emerald-950 cursor-pointer transition-all hover:scale-110" />
            <MessageSquare className="w-6 h-6 text-slate-300 hover:text-emerald-950 cursor-pointer transition-all hover:scale-110" />
          </div>
        </div>
      </footer>
    </div>
  );
}
