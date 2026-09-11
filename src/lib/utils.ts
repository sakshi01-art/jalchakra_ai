import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function formatNumber(n: number, decimals = 0): string { return n.toLocaleString("en-IN", { maximumFractionDigits: decimals }); }
export function formatLiters(liters: number): string {
  if (liters >= 1000000) return `${(liters / 1000000).toFixed(2)} ML/day`;
  if (liters >= 1000) return `${(liters / 1000).toFixed(1)} KL/day`;
  return `${liters} L/day`;
}
export function formatCurrency(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(2)} L`;
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(1)}K`;
  return `₹${amount}`;
}
export function getClassificationColor(classification: string): string {
  switch (classification) { case "green": return "#22c55e"; case "yellow": return "#eab308"; case "orange": return "#f97316"; case "red": return "#ef4444"; default: return "#94a3b8"; }
}
export function getClassificationLabel(classification: string): string {
  switch (classification) { case "green": return "Stable"; case "yellow": return "Vulnerable"; case "orange": return "Declining"; case "red": return "Critical"; default: return "Unknown"; }
}
export function getHealthBadgeClass(score: number): string { if (score >= 75) return "badge-green"; if (score >= 55) return "badge-yellow"; if (score >= 35) return "badge-orange"; return "badge-red"; }
export function getHealthColor(score: number): string { if (score >= 75) return "#22c55e"; if (score >= 55) return "#eab308"; if (score >= 35) return "#f97316"; return "#ef4444"; }
export function getHealthLabel(score: number): string { if (score >= 75) return "Good"; if (score >= 55) return "Moderate"; if (score >= 35) return "Poor"; return "Critical"; }
export function priorityLabel(rank: number): string { switch (rank) { case 1: return "Very High Priority"; case 2: return "High Priority"; case 3: return "Medium Priority"; case 4: return "Low Priority"; default: return "Unknown"; } }
export function priorityColor(rank: number): string { switch (rank) { case 1: return "#ef4444"; case 2: return "#f97316"; case 3: return "#eab308"; case 4: return "#22c55e"; default: return "#94a3b8"; } }
