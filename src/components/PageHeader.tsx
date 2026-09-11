import { type LucideIcon } from "lucide-react";
import SimulatedBadge from "./SimulatedBadge";

interface PageHeaderProps { icon: LucideIcon; title: string; subtitle: string; showSimulated?: boolean; children?: React.ReactNode; }

export default function PageHeader({ icon: Icon, title, subtitle, showSimulated = true, children }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/20 border border-sky-500/30 flex items-center justify-center"><Icon className="w-6 h-6 text-sky-400" /></div>
        <div><h1 className="text-xl font-bold text-white">{title}</h1><p className="text-sm text-slate-400">{subtitle}</p>{showSimulated && <SimulatedBadge />}</div>
      </div>
      {children && <div className="flex items-center gap-3">{children}</div>}
    </div>
  );
}
