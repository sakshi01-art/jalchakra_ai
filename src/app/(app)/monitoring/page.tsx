"use client";
import { useEffect,useState } from "react";
import { Activity } from "lucide-react";
import PageHeader from "@/components/PageHeader";
export default function MonitoringPage(){const[d,setD]=useState<any>(null);useEffect(()=>{fetch('/api/observations').then(r=>r.json()).then(setD)},[]);return <div className="space-y-6"><PageHeader icon={Activity} title="Field Monitoring" subtitle="Observe spring measurements and intervention progress"/><div className="glass rounded-xl p-5"><h3 className="text-white font-semibold mb-3">Latest Observations</h3><pre className="text-xs text-slate-400 overflow-auto">{JSON.stringify(d,null,2)}</pre></div></div>}
