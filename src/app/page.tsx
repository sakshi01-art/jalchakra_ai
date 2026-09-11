import Link from "next/link";
import { Waves, Map, Droplets, Leaf, Activity } from "lucide-react";

const modules = [
  ["Dashboard", "/dashboard", Activity],
  ["Spring DNA", "/spring-dna", Waves],
  ["Recharge Map", "/recharge-map", Map],
  ["Water Debt", "/water-debt", Droplets],
  ["Farm Planner", "/farm-planner", Leaf],
] as const;

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full text-center">
        <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 flex items-center justify-center glow-blue">
          <Waves className="w-8 h-8 text-white" />
        </div>
        <p className="text-sky-400 text-sm font-semibold tracking-[.25em] uppercase">JALCHAKRA AI</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-black text-white">
          Spring-to-Farm <span className="gradient-text">Water Intelligence</span>
        </h1>
        <p className="mt-5 text-slate-400 max-w-2xl mx-auto leading-relaxed">
          AI-based spring revival, recharge planning and agricultural water intelligence for tribal and rural areas.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          {modules.map(([name, href, Icon]) => (
            <Link key={href} href={href} className="glass card-hover rounded-xl px-5 py-4 flex items-center gap-2 text-slate-200 hover:text-sky-300">
              <Icon className="w-5 h-5 text-sky-400" /> {name}
            </Link>
          ))}
        </div>
        <p className="mt-12 text-xs text-slate-600">SIH 2026 • Agriculture, FoodTech & Rural Development</p>
      </div>
    </main>
  );
}
