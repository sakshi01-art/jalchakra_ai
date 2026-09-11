"use client";
import { getHealthColor } from "@/lib/utils";

interface HealthGaugeProps { score: number; size?: number; label?: string; }

export default function HealthGauge({ score, size = 120, label = "Health Score" }: HealthGaugeProps) {
  const color = getHealthColor(score);
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size * 0.75 }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="absolute top-0 left-0" style={{ transform: "rotate(-135deg)" }}>
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(14,165,233,0.1)" strokeWidth="10" strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`} strokeLinecap="round" />
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth="10" strokeDasharray={`${(score / 100) * circumference * 0.75} ${circumference}`} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 6px ${color})`, transition: "stroke-dasharray 0.8s ease" }} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ marginTop: size * 0.05 }}>
          <span className="text-2xl font-bold" style={{ color }}>{score}</span><span className="text-[10px] text-slate-400">/ 100</span>
        </div>
      </div>
      <span className="text-xs text-slate-400 mt-1">{label}</span>
    </div>
  );
}
