"use client";
import { useEffect, useMemo, useState } from "react";
import { AlertTriangle, Droplets, Gauge, TrendingDown, Waves } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { formatLiters, formatNumber } from "@/lib/utils";

type DebtRow = { spring_id:number; spring_name:string; village_name?:string|null; totalDemand:number; available:number; waterDebt:number; projectedWaterDebt:number };
export default function WaterDebtPage(){
 const [data,setData]=useState<any>(null); const [loading,setLoading]=useState(true);
 useEffect(()=>{fetch("/api/water-debt").then(r=>r.json()).then(setData).finally(()=>setLoading(false))},[]);
 const totals=data?.totals??{}; const rows:DebtRow[]=data?.springDebts??[];
 const coverage=totals.totalDemand?Math.min(100,(totals.available/totals.totalDemand)*100):0;
 const ranked=useMemo(()=>[...rows].sort((a,b)=>b.waterDebt-a.waterDebt),[rows]);
 return <div className="space-y-7">
  <PageHeader icon={Droplets} title="Water Debt Intelligence" subtitle="Measure demand–supply gaps and surface the springs where action matters most." />
  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
   <Metric icon={AlertTriangle} label="Current water debt" value={loading?"…":formatLiters(totals.waterDebt??0)} note="Unmet daily demand" />
   <Metric icon={Gauge} label="Reliable supply" value={loading?"…":formatLiters(totals.available??0)} note={`${coverage.toFixed(0)}% demand coverage`} />
   <Metric icon={Waves} label="Total demand" value={loading?"…":formatLiters(totals.totalDemand??0)} note="Household + farm signal" />
   <Metric icon={TrendingDown} label="Projected debt" value={loading?"…":formatLiters(totals.projectedWaterDebt??0)} note="If no intervention" />
  </div>
  <div className="grid gap-5 xl:grid-cols-[1.35fr_.65fr]">
   <section className="glass glass-strong rounded-2xl p-5">
    <div className="mb-5 flex items-center justify-between"><div><h2 className="text-lg font-bold text-white">Spring-level debt ranking</h2><p className="text-xs text-slate-500 mt-1">Highest gaps rise to the top for intervention planning.</p></div><span className="badge-blue">LIVE MODEL</span></div>
    <div className="space-y-3">{ranked.map((r,i)=>{const pct=r.totalDemand?Math.min(100,(r.available/r.totalDemand)*100):0; return <div key={r.spring_id} className="card-hover rounded-xl border border-white/5 bg-white/[.025] p-4"><div className="flex items-center gap-3"><div className="h-8 w-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-xs font-bold text-sky-300">{String(i+1).padStart(2,"0")}</div><div className="min-w-0 flex-1"><div className="font-semibold text-white truncate">{r.spring_name}</div><div className="text-xs text-slate-500">{r.village_name??"Mapped village"}</div></div><div className="text-right"><div className="font-bold text-rose-300">{formatLiters(r.waterDebt)}</div><div className="text-[10px] uppercase tracking-wider text-slate-600">debt / day</div></div></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5"><div className="h-full rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-400" style={{width:`${pct}%`}} /></div><div className="mt-2 flex justify-between text-[10px] text-slate-600"><span>Supply coverage {pct.toFixed(0)}%</span><span>Projected: {formatLiters(r.projectedWaterDebt)}</span></div></div>})}</div>
    {!loading&&!rows.length&&<div className="py-14 text-center text-sm text-slate-500">No spring debt records available yet.</div>}
   </section>
   <section className="glass rounded-2xl p-5">
    <div className="flex items-center gap-2"><div className="rounded-lg bg-sky-500/10 p-2"><Droplets className="h-4 w-4 text-sky-300"/></div><div><h2 className="font-bold text-white">AI water balance</h2><p className="text-xs text-slate-500">Decision signal</p></div></div>
    <div className="mt-6 rounded-xl border border-sky-400/10 bg-sky-500/[.04] p-4"><div className="text-xs uppercase tracking-[.18em] text-sky-300/70">Coverage index</div><div className="mt-2 text-4xl font-black text-white">{coverage.toFixed(0)}<span className="text-xl text-slate-500">%</span></div><p className="mt-2 text-sm leading-6 text-slate-400">Higher coverage means the mapped spring network is meeting more of the modeled daily requirement.</p></div>
    <div className="mt-4 space-y-2 text-sm text-slate-400"><div className="flex justify-between"><span>Demand</span><b className="text-white">{formatNumber(totals.totalDemand??0)} L/day</b></div><div className="flex justify-between"><span>Available</span><b className="text-white">{formatNumber(totals.available??0)} L/day</b></div><div className="flex justify-between"><span>Current gap</span><b className="text-rose-300">{formatNumber(totals.waterDebt??0)} L/day</b></div></div>
    <div className="mt-5 rounded-xl border border-amber-400/10 bg-amber-400/[.04] p-4 text-xs leading-5 text-amber-100/70">Planning signal: prioritize high-debt springs, then validate recharge suitability in the AI Recharge Map before committing field resources.</div>
   </section>
  </div>
 </div>
}
function Metric({icon:Icon,label,value,note}:{icon:any;label:string;value:string;note:string}){return <div className="glass card-hover rounded-2xl p-5"><div className="flex items-center justify-between"><span className="text-xs font-medium text-slate-500">{label}</span><Icon className="h-4 w-4 text-sky-300"/></div><div className="mt-3 text-2xl font-black text-white">{value}</div><div className="mt-1 text-[11px] text-slate-600">{note}</div></div>}
