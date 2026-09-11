import { NextResponse } from "next/server";
import { db } from "@/db";
import { springs, villages } from "@/db/schema";
import { eq, asc } from "drizzle-orm";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const villageId = searchParams.get("villageId");
  try {
    const rows = villageId
      ? await db.select({ spring_id: springs.spring_id, name: springs.name, latitude: springs.latitude, longitude: springs.longitude, current_discharge: springs.current_discharge, health_score: springs.health_score, classification: springs.classification, village_name: villages.name }).from(springs).leftJoin(villages, eq(springs.village_id, villages.village_id)).where(eq(springs.village_id, parseInt(villageId))).orderBy(asc(springs.name))
      : await db.select({ spring_id: springs.spring_id, name: springs.name, latitude: springs.latitude, longitude: springs.longitude, current_discharge: springs.current_discharge, health_score: springs.health_score, classification: springs.classification, village_name: villages.name }).from(springs).leftJoin(villages, eq(springs.village_id, villages.village_id)).orderBy(asc(springs.name));
    return NextResponse.json({ springs: rows });
  } catch (error) {
    return NextResponse.json({ error: String(error), springs: [] }, { status: 500 });
  }
}
