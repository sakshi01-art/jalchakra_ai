import { FlaskConical } from "lucide-react";

export default function SimulatedBadge({ label = "AI Simulated / Prototype Data" }: { label?: string }) {
  return <span className="inline-flex items-center gap-1.5 text-[10px] font-medium px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300"><FlaskConical className="w-3 h-3" />{label}</span>;
}
