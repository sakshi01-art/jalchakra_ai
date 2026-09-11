"use client";
import { useEffect, useMemo, useState } from "react";
import { FileText, Printer, CheckCircle2, Sparkles, ShieldCheck, BarChart3, Map, Leaf, Activity } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import SimulatedBadge from "@/components/SimulatedBadge";
import { formatLiters, getClassificationLabel, getHealthLabel } from "@/lib/utils";

interface Spring { spring_id:number; name:string; village_name:string; district:string; state:string; health_score:number|null; classification:string|null; current_discharge:number|null; historical_avg_discharge:number|null; }

export default function ReportsPage(){
 const [springs,setSprings]=useState<Spring[]>([]); const [selectedId,setSelectedId]=useState(""); const [ready,setReady]=useState(false); const [generating,setGenerating]=useState(false);
 useEffect(()=>{fetch("/api/springs").then(r=>r.json()).then(d=>{setSprings(d.springs??[]);if(d.springs?.length)setSelectedId(String(d.springs[0].spring_id));}).catch(()=>{});},[]);
 const spring=useMemo(()=>springs.find(s=>String(s.spring_id)===selectedId)??null,[springs,selectedId]);
 const generate=()=>{setGenerating(true);setReady(false);setTimeout(()=>{setGenerating(false);setReady(true)},900)};
 const sections=["Executive Summary","Spring DNA Profile","Water Debt Analysis","Recharge Priority","Intervention Plan","5-Year Simulation","Monitoring Plan"];
 const recommendations=["Prioritize high-suitability recharge structures in the upper catchment.","Pair recharge work with vegetation restoration and spring-source protection.","Use efficient irrigation for water-intensive crops to reduce seasonal pressure.","Record monthly discharge and rainfall observations for model recalibration."];
 return <div className="space-y-6 print:bg-white print:text-black" id="report-workspace">
  <PageHeader icon={FileText} title="Decision Reports" subtitle="Generate field-ready water planning reports from the JALCHAKRA intelligence layer" />
  <div className="grid grid-cols-1 xl:grid-cols-[300px_1fr] gap-5">
   <aside className="glass glass-strong rounded-2xl p-5 h-fit sticky top-5">
    <div className="flex items-center gap-2 mb-5"><Sparkles className="w-4 h-4 text-cyan-300"/><h3 className="text-white font-semibold">Report Builder</h3></div>
    <label className="text-xs text-slate-400">Spring / Village<select value={selectedId} onChange={e=>{setSelectedId(e.target.value);setReady(false)}} className="input-dark mt-2">{springs.map(s=><option key={s.spring_id} value={s.spring_id}>{s.name} — {s.village_name}</option>)}</select></label>
    <div className="mt-5 space-y-2">{sections.map((s,i)=><label key={s} className="flex items-center gap-2 rounded-lg px-2 py-2 text-xs text-slate-300 bg-white/[.02]"><input type="checkbox" defaultChecked className="accent-cyan-400"/><span>{String(i+1).padStart(2,"0")}</span>{s}</label>)}</div>
    <button onClick={generate} disabled={!spring||generating} className="btn-primary w-full mt-5 flex justify-center items-center gap-2"><Sparkles className="w-4 h-4"/>{generating?"Building intelligence...":"Generate report"}</button>
    {ready&&<button onClick={()=>window.print()} className="btn-secondary w-full mt-2 flex justify-center items-center gap-2"><Printer className="w-4 h-4"/>Print / Save PDF</button>}
    <div className="mt-4 flex gap-2 text-[10px] text-slate-500"><ShieldCheck className="w-3 h-3"/>Prototype data is clearly marked</div>
   </aside>
   <main className="glass glass-strong rounded-2xl p-6 md:p-8 min-h-[620px]">
    {!ready||!spring ? <div className="h-full min-h-[560px] flex flex-col items-center justify-center text-center"><div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4"><FileText className="w-8 h-8 text-cyan-300"/></div><h2 className="text-xl font-bold text-white">Your report preview will appear here</h2><p className="text-sm text-slate-500 max-w-md mt-2">Select a monitored spring and generate a decision-ready summary for field officers, planners and programme teams.</p></div> : <div className="space-y-7" id="print-report">
      <header className="border-b border-cyan-400/15 pb-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><div className="text-[10px] uppercase tracking-[.22em] text-cyan-300">JALCHAKRA AI • SIH 2026</div><h1 className="text-3xl font-black gradient-text mt-2">Village Water Planning Report</h1><p className="text-slate-400 mt-1">{spring.village_name}, {spring.district}, {spring.state}</p></div><SimulatedBadge label="Prototype / Simulated Data"/></div><div className="text-[10px] text-slate-500 mt-4">Generated {new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"long",year:"numeric"})}</div></header>
      <section><div className="flex items-center gap-2 mb-3"><Activity className="w-4 h-4 text-cyan-300"/><h2 className="text-sm font-bold text-white">01 • Executive Summary</h2></div><div className="grid sm:grid-cols-3 gap-3">{[["Spring Health",`${spring.health_score??0}/100`,getHealthLabel(spring.health_score??0)],["Classification",getClassificationLabel(spring.classification??"yellow"),"Current condition"],["Current Discharge",formatLiters(spring.current_discharge??0),"Reliable spring signal"]].map(x=><div key={x[0]} className="rounded-xl border border-cyan-400/10 bg-cyan-400/[.035] p-4"><div className="text-[10px] uppercase tracking-wider text-slate-500">{x[0]}</div><div className="text-lg font-black text-white mt-1">{x[1]}</div><div className="text-[10px] text-slate-500 mt-1">{x[2]}</div></div>)}</div></section>
      <section><div className="flex items-center gap-2 mb-3"><BarChart3 className="w-4 h-4 text-cyan-300"/><h2 className="text-sm font-bold text-white">02 • Spring DNA Signal</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">{[["Spring ID",`S-${String(spring.spring_id).padStart(3,"0")}`],["Historical Avg",formatLiters(spring.historical_avg_discharge??0)],["Discharge Ratio",`${Math.round(((spring.current_discharge??0)/(spring.historical_avg_discharge||1))*100)}%`],["Status",getClassificationLabel(spring.classification??"yellow")]].map(x=><div key={x[0]} className="p-3 rounded-lg bg-white/[.025] border border-white/5"><div className="text-[10px] text-slate-500">{x[0]}</div><div className="text-sm font-bold text-slate-100 mt-1">{x[1]}</div></div>)}</div></section>
      <section><div className="flex items-center gap-2 mb-3"><Map className="w-4 h-4 text-cyan-300"/><h2 className="text-sm font-bold text-white">03 • AI Planning Recommendations</h2></div><div className="space-y-2">{recommendations.map((r,i)=><div key={r} className="flex gap-3 p-3 rounded-lg bg-white/[.025] border border-white/5"><span className="text-cyan-300 font-bold text-xs">0{i+1}</span><span className="text-xs text-slate-300">{r}</span><CheckCircle2 className="w-4 h-4 text-emerald-400 ml-auto shrink-0"/></div>)}</div></section>
      <section className="rounded-xl border border-emerald-400/15 bg-emerald-400/[.035] p-4"><div className="flex items-center gap-2"><Leaf className="w-4 h-4 text-emerald-300"/><h2 className="text-sm font-bold text-white">Expected decision path</h2></div><p className="text-xs text-slate-400 mt-2">Spring health → water gap → recharge priority → intervention package → farm water protection → community resilience.</p></section>
    </div>}
   </main>
  </div>
 </div>
}