import Sidebar from "@/components/Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-screen bg-[#020c1b]"><Sidebar /><main className="flex-1 ml-64 min-h-screen p-6">{children}</main></div>;
}
