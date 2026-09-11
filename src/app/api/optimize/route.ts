import { NextResponse } from "next/server";
import { db } from "@/db";
import { interventions, springs, catchment_features } from "@/db/schema";
import { eq } from "drizzle-orm";
import { optimizeInterventions } from "@/lib/demo-data";

export async function POST(req: Request) {
  try {
    const body = await req.json(); const { springId, budget, targetWaterGap } = body;
    const [spring] = await db.select().from(springs).where(eq(springs.spring_id, parseInt(springId)));
    if (!spring) return NextResponse.json({ error: "Spring not found" }, { status: 404 });
    const [catchment] = await db.select().from(catchment_features).where(eq(catchment_features.spring_id, parseInt(springId)));
    const allInterventions = await db.select().from(interventions);
    const result = optimizeInterventions(budget, spring.type ?? "contact", catchment?.slope ?? 10, catchment?.soil_type ?? "loam", targetWaterGap ?? 10000, allInterventions.map((i) => ({ name: i.name ?? "", cost_per_unit: i.cost_per_unit ?? 0, expected_recharge_per_unit: i.expected_recharge_per_unit ?? 0, suitable_slope_max: i.suitable_slope_max ?? 30, suitable_soil: i.suitable_soil ?? "loam", category: i.category ?? "structural" })));
    return NextResponse.json({ spring: { name: spring.name, health_score: spring.health_score }, optimization: result, catchment: { slope: catchment?.slope ?? 10, soil_type: catchment?.soil_type ?? "loam" }, simulated: true });
  } catch (error) { console.error("Optimize error:", error); return NextResponse.json({ error: String(error) }, { status: 500 }); }
}
