"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Dna, Map, Droplets, Leaf, TrendingUp, Zap, GitBranch, Activity, FileText, Settings, ChevronLeft, ChevronRight, Waves, AlertTriangle, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  ["/dashboard", "Dashboard", LayoutDashboard], ["/spring-dna", "Spring DNA", Dna], ["/recharge-map", "Recharge Map", Map], ["/water-debt", "Water Debt", Droplets], ["/farm-planner", "Farm Planner", Leaf], ["/simulator", "Future Simulator", TrendingUp], ["/optimizer", "Intervention Optimizer", Zap], ["/impact-chain", "Impact Chain", GitBranch], ["/monitoring", "Monitoring", Activity], ["/reports", "Reports", FileText], ["/settings", "Settings", Settings],
] as const;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  return <aside className={cn("fixed left-0 top-0 z-40 hidden h-screen flex-col border-r border-sky-500/20 bg-[#061426]/90 backdrop-blur-2xl transition-all duration-300 md:flex", collapsed ? "w-20" : "w-64")}>
    <div className="border-b border-sky-500/15 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 shadow-[0_0_28px_rgba(14,165,233,.35)]"><Waves className="h-5 w-5 text-white" /></div>
        {!collapsed && <div><div className="gradient-text text-sm font-black tracking-wide">JALCHAKRA AI</div><div className="text-[10px] text-slate-500">Water Intelligence</div></div>}
      </div>
    </div>
    <nav className="flex-1 space-y-1 overflow-y-auto p-3">
      {navItems.map(([href, label, Icon]) => { const active = pathname === href || pathname.startsWith(href + "/"); return <Link key={href} href={href} title={collapsed ? label : undefined} className={cn("group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200", active ? "border border-sky-400/20 bg-sky-400/10 text-sky-300 shadow-[inset_3px_0_0_#38bdf8,0_0_20px_rgba(14,165,233,.08)]" : "text-slate-400 hover:bg-white/[.03] hover:text-sky-300")}><Icon className={cn("h-4 w-4 shrink-0", active && "drop-shadow-[0_0_8px_rgba(56,189,248,.7)]")} />{!collapsed && <span>{label}</span>}</Link>; })}
    </nav>
    <div className="space-y-2 border-t border-sky-500/15 p-3">
      {!collapsed && <div className="rounded-xl border border-orange-400/20 bg-orange-400/[.06] p-3"><div className="flex items-center gap-2 text-[11px] font-semibold text-orange-300"><AlertTriangle className="h-3.5 w-3.5" />2 Critical Alerts</div><div className="mt-1 text-[10px] text-slate-500">AI monitoring needs attention</div></div>}
      <Link href="/" className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-500 transition hover:bg-red-400/5 hover:text-red-300"><LogOut className="h-4 w-4" />{!collapsed && "Exit to Home"}</Link>
      <button onClick={() => setCollapsed(v => !v)} className="flex w-full items-center justify-center rounded-xl border border-white/5 p-2 text-slate-500 transition hover:bg-sky-400/10 hover:text-sky-300">{collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}</button>
    </div>
  </aside>;
}
