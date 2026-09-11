"use client";
import { GitBranch } from "lucide-react";
import PageHeader from "@/components/PageHeader";
const steps=['Recharge Intervention','Groundwater Recharge','Spring Discharge Recovery','Reliable Water Supply','Protected Agriculture','Community Resilience'];
export default function ImpactChainPage(){return <div className="space-y-6"><PageHeader icon={GitBranch} title="Impact Chain" subtitle="Visualize how recharge investments translate into water and livelihood outcomes"/><div className="glass rounded-xl p-6"><div className="grid md:grid-cols-6 gap-3">{steps.map((s,i)=><div key={s} className="bg-sky-500/5 border border-sky-500/15 rounded-xl p-4 text-center"><div className="text-sky-400 font-bold mb-2">0{i+1}</div><div className="text-xs text-slate-300">{s}</div></div>)}</div></div></div>}
