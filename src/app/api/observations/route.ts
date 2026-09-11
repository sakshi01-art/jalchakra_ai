import { NextResponse } from "next/server";
import { db } from "@/db";
import { spring_observations, springs } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url); const springId = searchParams.get("springId");
  try {
    if (springId) {
      const obs = await db.select().from(spring_observations).where(eq(spring_observations.spring_id, parseInt(springId))).orderBy(desc(spring_observations.date)).limit(36);
      return NextResponse.json({ observations: obs.reverse() });
    }
    const obs = await db.select({ observation_id: spring_observations.observation_id, spring_id: spring_observations.spring_id, spring_name: springs.name, date: spring_observations.date, rainfall: spring_observations.rainfall, discharge: spring_observations.discharge, season: spring_observations.season }).from(spring_observations).leftJoin(springs, eq(spring_observations.spring_id, springs.spring_id)).orderBy(desc(spring_observations.date)).limit(50);
    return NextResponse.json({ observations: obs });
  } catch (error) { return NextResponse.json({ error: String(error) }, { status: 500 }); }
}

export async function POST(req: Request) {
  try {
    const body = await req.json(); const { spring_id, date, rainfall, discharge, water_level, season, notes, observer_name } = body;
    if (!spring_id || !date || !discharge) return NextResponse.json({ error: "spring_id, date, and discharge are required" }, { status: 400 });
    const [obs] = await db.insert(spring_observations).values({ spring_id, date, rainfall, discharge, water_level, season, notes, observer_name }).returning();
    return NextResponse.json({ success: true, observation: obs });
  } catch (error) { return NextResponse.json({ error: String(error) }, { status: 500 }); }
}
