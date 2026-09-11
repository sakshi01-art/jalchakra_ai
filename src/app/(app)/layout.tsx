import Sidebar from "@/components/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#020c1b] text-slate-100">
      <Sidebar />
      <main className="relative min-h-screen overflow-hidden pl-0 md:ml-64">
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl aurora" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-400/5 blur-3xl aurora" style={{animationDelay:'-4s'}} />
        <div className="relative p-4 sm:p-6">{children}</div>
      </main>
    </div>
  );
}
