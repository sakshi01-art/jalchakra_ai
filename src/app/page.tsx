"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, ArrowRight, Droplets, Leaf, Map, Sparkles, Waves, Zap } from "lucide-react";

const modules = [
  { name: "Spring DNA", href: "/spring-dna", icon: Waves, text: "Profile spring health & behavior" },
  { name: "Recharge Map", href: "/recharge-map", icon: Map, text: "Explore recharge intelligence" },
  { name: "Water Debt", href: "/water-debt", icon: Droplets, text: "See demand vs availability" },
  { name: "Farm Planner", href: "/farm-planner", icon: Leaf, text: "Plan water-aware farming" },
  { name: "Future Simulator", href: "/simulator", icon: Sparkles, text: "Compare future scenarios" },
  { name: "Optimizer", href: "/optimizer", icon: Zap, text: "Rank interventions" },
];

const fade = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl aurora" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl aurora" />
      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-10">
        <nav className="glass flex items-center justify-between rounded-2xl px-5 py-3">
          <div className="flex items-center gap-3"><div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-300 shadow-lg shadow-cyan-500/20 pulse-glow"><Waves className="h-5 w-5 text-white" /></div><div><p className="text-sm font-black tracking-[.18em] text-white">JALCHAKRA</p><p className="text-[9px] tracking-[.28em] text-cyan-400">WATER INTELLIGENCE</p></div></div>
          <Link href="/dashboard" className="btn-primary rounded-xl px-4 py-2 text-sm font-semibold">Open Dashboard <ArrowRight className="ml-1 inline h-4 w-4" /></Link>
        </nav>

        <motion.div initial="hidden" animate="show" variants={fade} transition={{ duration: .7 }} className="mx-auto max-w-5xl pt-20 text-center">
          <div className="badge badge-blue mb-5"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" /> SIH 2026 • SIH26240</div>
          <h1 className="text-5xl font-black leading-[1.03] tracking-tight text-white md:text-7xl">From <span className="gradient-text">Spring</span> to <span className="gradient-text">Farm.</span><br />One intelligence layer for water.</h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">AI-based spring revival, recharge planning and agricultural water intelligence designed for tribal and rural areas.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3"><Link href="/dashboard" className="btn-primary rounded-xl px-6 py-3 font-bold">Explore Platform <ArrowRight className="ml-2 inline h-4 w-4" /></Link><Link href="/spring-dna" className="glass card-hover rounded-xl px-6 py-3 font-bold text-slate-200">View Spring DNA</Link></div>
        </motion.div>

        <motion.div initial="hidden" animate="show" variants={fade} transition={{ delay: .25, duration: .7 }} className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4">
          {[['15+','Springs monitored'],['5','Villages'],['4','AI scenarios'],['9','Intervention types']].map(([n,l]) => <div key={l} className="glass card-hover rounded-2xl p-5 text-center"><p className="gradient-text text-3xl font-black">{n}</p><p className="mt-1 text-xs text-slate-500">{l}</p></div>)}
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => { const Icon = m.icon; return <motion.div key={m.href} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={fade} transition={{ delay: i * .06, duration: .45 }}><Link href={m.href} className="glass card-hover gradient-border group block rounded-2xl p-6 h-full"><div className="mb-5 flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-cyan-300"><Icon className="h-5 w-5" /></div><ArrowRight className="h-4 w-4 text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-300" /></div><h2 className="text-lg font-bold text-white">{m.name}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{m.text}</p></Link></motion.div>; })}
        </div>

        <motion.div initial={{ opacity: 0, scale: .98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="glass glow-blue mt-16 overflow-hidden rounded-3xl p-7 md:p-10"><div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"><div><div className="badge badge-green mb-4"><Activity className="h-3 w-3" /> Closed-loop intelligence</div><h2 className="text-2xl font-black text-white md:text-3xl">Observe → Understand → Simulate → Act → Learn</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">Connect field observations with recharge decisions, interventions and farm outcomes—then feed new observations back into the next planning cycle.</p></div><Link href="/impact-chain" className="shrink-0 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm font-bold text-cyan-300 hover:bg-cyan-400/10">View Impact Chain</Link></div></motion.div>
        <footer className="pt-14 text-center text-xs text-slate-600">Agriculture, FoodTech & Rural Development • Built for spring-to-farm water intelligence</footer>
      </section>
    </main>
  );
}
