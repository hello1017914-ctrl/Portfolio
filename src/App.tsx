import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, CheckCircle2, Zap, Clock, ShieldCheck, Instagram, MessageSquare, ExternalLink, Sparkles, Quote, ChevronRight, Star } from "lucide-react";
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
    title: "E-Commerce (Skincare)",
    category: "E-Commerce",
    subtitle: "Vitamin C Serum — Instagram caption rewrite",
    before: "New arrival! Our Vitamin C Serum is now in stock. 30ml. Suitable for all skin types. Order now. Link in bio. #skincare #serum",
    after: "your skin has been doing the most. give it something back. our Vitamin C Serum absorbs in 60 seconds flat — no sticky residue, no breakouts, just the kind of quiet confidence that comes from skin that's finally getting what it deserves. link in bio before it sells out (again). ✨ #glowup #skincareforreal",
    whatChanged: "Replaced a product spec list with a sensory experience. The reader feels the serum before they buy it. Urgency added without discounting. Hashtags rewritten to match real discovery behavior."
  },
  {
    id: 2,
    title: "Fitness Coach",
    category: "Fitness",
    subtitle: "Online coach — Instagram bio rewrite",
    before: "Certified Personal Trainer | Online Coaching | DM for enquiries | Helping people get fit | 10 yrs exp | Follow for tips",
    after: "you've started over enough times. let's make this the last one. I coach real people with real lives — no 4am wake-ups, no cutting entire food groups. just a system built around you, that actually sticks. DM the word 'READY' — let's talk.",
    whatChanged: "Bio opened with the client's hidden shame (starting over), not the coach's credentials. The CTA has a specific trigger word — READY — which filters serious leads and makes replies feel intentional, not accidental."
  },
  {
    id: 3,
    title: "SaaS / Tech Product",
    category: "SaaS",
    subtitle: "TaskFlow — homepage hero rewrite",
    before: "TaskFlow is a powerful project management solution designed to streamline workflows, enhance team collaboration, and improve productivity across organizations of all sizes.",
    after: "your team isn't bad at their jobs. they're buried under 7 different tools that don't talk to each other. TaskFlow puts tasks, messages, and deadlines in one place — so your team stops managing their work and starts doing it. 14 days free, no card needed.",
    whatChanged: "Hero copy rewrote the problem before selling the solution. Removed corporate jargon. The free trial CTA removes purchase anxiety — 'no card needed' eliminates the #1 reason SaaS trials get abandoned."
  },
  {
    id: 4,
    title: "Local Salon",
    category: "Local Business",
    subtitle: "Luxe Hair Salon — Google Business Profile rewrite",
    before: "Welcome to Luxe Hair Salon. We offer haircuts, coloring, styling and treatments. Our experienced staff will take care of all your hair needs. Walk-ins welcome.",
    after: "good hair days shouldn't be rare. at Luxe, we've spent 8 years making sure yours isn't. whether you're after a fresh cut, a bold colour change, or just want someone who actually listens before touching your hair — we've got you. walk-ins welcome. your next great hair day is probably this week.",
    whatChanged: "Opened with a relatable truth instead of a welcome message. 'Someone who actually listens' is a jab at every salon experience the reader has had. Closed with a time-specific nudge — 'this week' — that makes booking feel immediate, not abstract."
  }
];

const PRICING = [
  { service: "Instagram Caption (x1)", price: 15, details: "Single scroll-stopping caption with hook, body, and CTA." },
  { service: "Instagram Caption Pack (x5)", price: 60, details: "5 captions for a week of content, varied for engagement and sales.", popular: true },
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
  <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center bg-white/70 backdrop-blur-2xl backdrop-saturate-200 border-b border-white/20 shadow-2xl shadow-black/5">
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
    <section ref={targetRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-white grain">
      <motion.div style={{ opacity, scale }} className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Marquee Ticker */}
        <div className="overflow-hidden whitespace-nowrap mb-12 opacity-40 select-none pointer-events-none">
          <div className="inline-flex animate-marquee">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-emerald-900 mr-16">
                Instagram Captions &nbsp;·&nbsp; Product Descriptions &nbsp;·&nbsp; Ad Copy &nbsp;·&nbsp; Website Copy &nbsp;·&nbsp; Email Sequences &nbsp;·&nbsp; Google Profiles &nbsp;·&nbsp;
              </span>
            ))}
          </div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl md:text-[8rem] font-bold text-emerald-950 leading-[0.85] mb-10 tracking-tighter"
        >
          Words that <br />
          <span className="font-serif italic font-light text-emerald-800">make people buy.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          We transform generic business text into high-performance sales assets. E-commerce, SaaS, and Local Brands — we convert your visitors into loyal clients.
        </motion.p>

        {/* Social Proof Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-6 mb-14 text-xs font-bold uppercase tracking-widest text-slate-400"
        >
          <span>48hr Delivery</span>
          <div className="w-px h-4 bg-slate-200 hidden sm:block" />
          <span>Free Revision Included</span>
          <div className="w-px h-4 bg-slate-200 hidden sm:block" />
          <span>5 clients/week max</span>
        </motion.div>
        
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

      {/* Floating Sample Bubble (Desktop) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden xl:block absolute right-[2%] top-[18%] z-20"
      >
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-80 p-6 glass rounded-3xl border border-emerald-100/50 shadow-2xl"
        >
          <div className="mb-4">
            <span className="text-[10px] font-black text-red-500 uppercase tracking-widest block mb-1">BEFORE</span>
            <p className="text-sm text-slate-400 line-through leading-tight">Our Vitamin C Serum is now in stock. Suitable for all skin types. Order now.</p>
          </div>
          <div className="pt-4 border-t border-slate-100">
            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block mb-1">AFTER</span>
            <p className="text-sm text-emerald-950 font-medium leading-tight">your skin has been doing the most. give it something back. absorbs in 60s flat.</p>
          </div>
          <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-emerald-950 rounded-full flex items-center justify-center shadow-lg">
            <Sparkles className="text-emerald-400 w-5 h-5" />
          </div>
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-10"
          >
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
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="px-6 py-32 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-4 block">Social Proof</span>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-emerald-950 mb-6 tracking-tighter">Real Results, Real People</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah K.",
                  title: "Etsy Shop Owner, HandmadeLux",
                  quote: "I was getting 200 visits a week and barely 3 sales. After the caption rewrite, my conversion literally doubled in the first week. I didn't change anything else.",
                  metric: "+112% conversion",
                  avatar: "https://picsum.photos/seed/sarah/200/200"
                },
                {
                  name: "James R.",
                  title: "Fitness Coach, @jameslifts",
                  quote: "My old bio said 'certified trainer, DM for enquiries.' CopyQuill rewrote it and I got 14 new DMs in 3 days without running a single ad. Wild.",
                  metric: "14 DMs in 3 days",
                  avatar: "https://picsum.photos/seed/james/200/200"
                },
                {
                  name: "Mia T.",
                  title: "Founder, GlowKit Skincare",
                  quote: "The product description they wrote for my serum made me cringe at my old one. Same product, completely different energy. My add-to-cart rate went from 4% to 11%.",
                  metric: "4% → 11% add-to-cart",
                  avatar: "https://picsum.photos/seed/mia/200/200"
                }
              ].map((t, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-[2.5rem] border border-slate-100 premium-shadow flex flex-col h-full"
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />)}
                  </div>
                  <Quote className="w-10 h-10 text-emerald-100 mb-6" />
                  <p className="text-lg text-slate-600 leading-relaxed mb-8 flex-grow font-light">"{t.quote}"</p>
                  <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-emerald-950 flex items-center justify-center">
                      <img 
                        src={t.avatar} 
                        alt={t.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-950">{t.name}</h4>
                      <p className="text-xs text-slate-400 font-medium">{t.title}</p>
                    </div>
                  </div>
                  <div className="mt-6 inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest border border-emerald-100 self-start">
                    {t.metric}
                  </div>
                </motion.div>
              ))}
            </div>
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

        {/* Why AI Copywriting */}
        <section className="px-6 py-32 bg-emerald-950 text-white rounded-[4rem] mx-4 my-10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 tracking-tighter leading-none">
                Great copy used to cost $2,000 and take 2 weeks.
              </h2>
              <p className="text-emerald-100/60 text-xl mb-8 font-light leading-relaxed">
                We changed that. AI lets us research faster, write sharper, and deliver in 48 hours — at a price that makes sense for small businesses and solo founders.
              </p>
              <p className="text-emerald-400 font-bold uppercase tracking-widest text-sm">
                Same psychology. Same strategy. A fraction of the cost.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 p-10 md:p-14"
            >
              <div className="space-y-8">
                <div className="grid grid-cols-2 pb-6 border-b border-white/10 text-xs font-black uppercase tracking-[0.3em]">
                  <div className="text-slate-400">Traditional Agency</div>
                  <div className="text-emerald-400 text-right">CopyQuill</div>
                </div>
                
                {[
                  { label: "Investment", traditional: "$1,500–5,000", copyquill: "$15–199", bad: true },
                  { label: "Delivery Time", traditional: "2–4 weeks", copyquill: "48 hours" },
                  { label: "Strategy", traditional: "Generic templates", copyquill: "Brand-specific" },
                  { label: "Revisions", traditional: "Revision fees", copyquill: "Free included" }
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-2 items-center">
                    <div className="text-slate-300 font-light">
                      <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">{row.label}</div>
                      <span className="line-through decoration-red-500/50">{row.traditional}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-emerald-500/50 uppercase tracking-widest mb-1">{row.label}</div>
                      <span className="text-xl font-bold text-emerald-400 flex items-center justify-end gap-2">
                        {row.copyquill} <CheckCircle2 className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="px-6 py-32 bg-emerald-950 text-white rounded-[4rem] mx-4 my-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-emerald-400 blur-[200px]" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-6xl mx-auto relative z-10"
          >
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
                    {PRICING.map((item: any, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-all duration-300 group">
                        <td className="px-10 py-8">
                          <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                              <span className="font-bold text-xl group-hover:translate-x-2 transition-transform duration-300">{item.service}</span>
                              {item.popular && (
                                <span className="inline-block px-3 py-1 rounded-full bg-emerald-400 text-emerald-950 text-[10px] font-black uppercase tracking-widest">
                                  Most Popular
                                </span>
                              )}
                            </div>
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

            <div className="mt-8 text-center">
              <p className="text-emerald-100/30 text-xs font-medium tracking-widest uppercase">
                All prices in USD · Payoneer accepted · Invoice provided on request
              </p>
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
          </motion.div>
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
              viewport={{ once: true, margin: "-80px" }}
              className="mb-12 inline-block"
            >
              <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner rotate-12">
                <Sparkles className="text-emerald-900 w-12 h-12" />
              </div>
            </motion.div>
            <h2 className="font-display text-6xl md:text-8xl font-bold text-emerald-950 mb-10 leading-[0.9] tracking-tighter">
              The only thing <br />
              standing between you <br />
              and <span className="font-serif italic font-light text-emerald-800">more sales.</span>
            </h2>
            
            <div className="mb-12">
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold border border-emerald-100">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                We take a maximum of 5 new clients per week. Currently 2 slots open.
              </span>
            </div>

            <p className="text-2xl text-slate-400 mb-16 max-w-2xl mx-auto font-light">
              Don't leave your revenue to chance. Secure your high-conversion copy today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
              <button className="bg-emerald-950 text-white px-14 py-6 rounded-[2rem] font-black text-xl hover:bg-emerald-900 transition-all shadow-3xl shadow-emerald-950/30 flex items-center justify-center gap-3 group">
                Start Your Project <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-emerald-950 border border-emerald-100 px-14 py-6 rounded-[2rem] font-black text-xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-3">
                View Samples <ExternalLink className="w-6 h-6" />
              </button>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No contracts
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 48hr delivery
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free revision
              </div>
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
            © 2026 CopyQuill · AI Copywriting Studio · Built to convert.
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
