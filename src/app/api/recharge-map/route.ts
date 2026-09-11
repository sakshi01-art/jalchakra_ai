import { NextResponse } from "next/server";
import { db } from "@/db";
import { recharge_zones, springs, villages } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const zones = await db.select({ zone_id: recharge_zones.zone_id, name: recharge_zones.name, latitude: recharge_zones.latitude, longitude: recharge_zones.longitude, area: recharge_zones.area, recharge_suitability_score: recharge_zones.recharge_suitability_score, priority_rank: recharge_zones.priority_rank, slope: recharge_zones.slope, soil_type: recharge_zones.soil_type, land_cover: recharge_zones.land_cover, expected_recharge_potential: recharge_zones.expected_recharge_potential, estimated_cost: recharge_zones.estimated_cost, suitable_interventions: recharge_zones.suitable_interventions, ai_explanation: recharge_zones.ai_explanation, spring_id: recharge_zones.spring_id, spring_name: springs.name, spring_classification: springs.classification, spring_health: springs.health_score, village_name: villages.name }).from(recharge_zones).leftJoin(springs, eq(recharge_zones.spring_id, springs.spring_id)).leftJoin(villages, eq(springs.village_id, villages.village_id)).orderBy(recharge_zones.priority_rank);
    return NextResponse.json({ zones });
  } catch (error) { console.error("Recharge map error:", error); return NextResponse.json({ error: String(error) }, { status: 500 }); }
}
