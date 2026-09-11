"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, ArrowRight, Droplets, Leaf, Map, Sparkles, Waves, Zap } from "lucide-react";

const modules = [
  { name: "Spring DNA", href: "/spring-dna", icon: Waves, text: "Understand spring health" },
  { name: "Recharge Map", href: "/recharge-map", icon: Map, text: "Plan recharge zones" },
  { name: "Water Debt", href: "/water-debt", icon: Droplets, text: "See demand vs supply" },
  { name: "Farm Planner", href: "/farm-planner", icon: Leaf, text: "Connect water to farms" },
  { name: "Future Simulator", href: "/simulator", icon: Sparkles, text: "Explore what-if futures" },
  { name: "Optimizer", href: "/optimizer", icon: Zap, text: "Rank interventions" },
];

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-black gradient-text">{value}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl aurora" />
      <div className="pointer-events-none absolute top-40 -right-32 w-[30rem] h-[30rem] rounded-full bg-emerald-500/10 blur-3xl aurora" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(rgba(125,211,252,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,.8) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-16">
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-300 flex items-center justify-center glow-blue pulse-glow">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-black tracking-widest text-white">JALCHAKRA</div>
              <div className="text-[10px] text-sky-400 tracking-[.3em]">WATER INTELLIGENCE</div>
            </div>
          </div>
          <Link href="/dashboard" className="btn-primary rounded-xl px-4 py-2.5 text-sm font-bold flex items-center gap-2">
            Open Dashboard <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>

        <section className="grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="inline-flex items-center gap-2 badge badge-blue mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" /> SIH 2026 • SIH26240
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }} className="text-5xl md:text-7xl font-black tracking-tight leading-[.98] text-white">
              From <span className="gradient-text">Spring</span><br />to <span className="gradient-text">Farm.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .2 }} className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
              An AI-ready planning platform that connects spring health, recharge intelligence, water demand, interventions and farm decisions into one closed-loop system.
            </motion.p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/dashboard" className="btn-primary rounded-xl px-6 py-3 font-bold flex items-center gap-2">Explore Platform <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/recharge-map" className="glass rounded-xl px-6 py-3 font-bold text-slate-200 hover:text-cyan-300">View Recharge Map</Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 glass rounded-2xl p-5 max-w-xl">
              <AnimatedCounter value="15+" label="springs monitored" />
              <AnimatedCounter value="5" label="villages" />
              <AnimatedCounter value="4" label="AI scenarios" />
              <AnimatedCounter value="9" label="intervention types" />
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }} className="relative">
            <div className="glass gradient-border rounded-[2rem] p-6 md:p-8 glow-blue">
              <div className="flex items-center justify-between mb-7">
                <div><div className="text-xs uppercase tracking-widest text-slate-500">Live intelligence</div><div className="text-xl font-bold text-white mt-1">Spring → Farm Flow</div></div>
                <div className="badge badge-green"><Activity className="w-3 h-3" /> Connected</div>
              </div>
              <div className="space-y-3">
                {["Spring DNA", "Recharge Potential", "Water Balance", "Intervention", "Farm Outcome"].map((item, i) => (
                  <motion.div key={item} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .35 + i * .12 }} className="relative">
                    <div className="glass rounded-xl p-4 flex items-center gap-4 card-hover">
                      <div className="w-9 h-9 rounded-xl bg-sky-400/10 border border-sky-400/15 flex items-center justify-center"><Waves className="w-4 h-4 text-sky-300" /></div>
                      <div className="flex-1"><div className="text-sm font-bold text-slate-100">{item}</div><div className="text-xs text-slate-500">{i === 0 ? "Health indicators & observations" : i === 1 ? "Recharge opportunity mapping" : i === 2 ? "Demand versus availability" : i === 3 ? "Scenario-ranked action" : "Water-aware farm planning"}</div></div>
                      <div className="text-cyan-300">{i < 4 ? "→" : "✓"}</div>
                    </div>
                    {i < 4 && <div className="mx-auto h-3 w-px bg-gradient-to-b from-cyan-400/50 to-transparent" />}
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 h-1 rounded-full overflow-hidden bg-slate-800"><div className="h-full w-3/4 bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 water-flow" /></div>
            </div>
            <div className="absolute -z-10 inset-8 rounded-[3rem] bg-cyan-400/10 blur-3xl ripple" />
          </motion.div>
        </section>

        <section className="mt-24">
          <div className="flex items-end justify-between mb-7"><div><div className="text-xs uppercase tracking-[.25em] text-cyan-400 font-bold">Platform modules</div><h2 className="text-3xl font-black text-white mt-2">One water story. Every decision.</h2></div><div className="hidden md:block text-sm text-slate-500">Built for tribal & rural water planning</div></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map(({ name, href, icon: Icon, text }, i) => (
              <motion.div key={href} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }}>
                <Link href={href} className="glass card-hover rounded-2xl p-5 block h-full">
                  <div className="flex items-center justify-between"><div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center"><Icon className="w-5 h-5 text-cyan-300" /></div><ArrowRight className="w-4 h-4 text-slate-600" /></div>
                  <h3 className="mt-5 text-lg font-bold text-white">{name}</h3><p className="mt-1 text-sm text-slate-500">{text}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="mt-20 pt-7 border-t border-white/5 flex flex-col md:flex-row justify-between gap-3 text-xs text-slate-600">
          <span>🌊 JALCHAKRA AI • Spring-to-Farm Water Intelligence</span><span>Ministry of Tribal Affairs • Agriculture, FoodTech & Rural Development</span>
        </footer>
      </div>
    </main>
  );
}
