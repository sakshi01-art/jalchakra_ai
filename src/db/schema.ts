import { pgTable, serial, text, real, integer, boolean, timestamp, jsonb, varchar, date } from "drizzle-orm/pg-core";

export const villages = pgTable("villages", {
  village_id: serial("village_id").primaryKey(), name: varchar("name", { length: 200 }).notNull(), district: varchar("district", { length: 200 }).notNull(), state: varchar("state", { length: 200 }).notNull(), population: integer("population"), agricultural_area: real("agricultural_area"), latitude: real("latitude"), longitude: real("longitude"), tribal_community: varchar("tribal_community", { length: 200 }), created_at: timestamp("created_at").defaultNow(),
});
export const springs = pgTable("springs", {
  spring_id: serial("spring_id").primaryKey(), village_id: integer("village_id").references(() => villages.village_id), name: varchar("name", { length: 200 }).notNull(), latitude: real("latitude").notNull(), longitude: real("longitude").notNull(), type: varchar("type", { length: 100 }), current_discharge: real("current_discharge"), historical_avg_discharge: real("historical_avg_discharge"), health_score: real("health_score"), stability_score: real("stability_score"), recharge_responsiveness: real("recharge_responsiveness"), seasonal_vulnerability: real("seasonal_vulnerability"), agricultural_dependency: real("agricultural_dependency"), classification: varchar("classification", { length: 50 }), elevation: real("elevation"), established_year: integer("established_year"), is_perennial: boolean("is_perennial"), created_at: timestamp("created_at").defaultNow(), updated_at: timestamp("updated_at").defaultNow(),
});
export const spring_observations = pgTable("spring_observations", {
  observation_id: serial("observation_id").primaryKey(), spring_id: integer("spring_id").references(() => springs.spring_id), date: date("date").notNull(), rainfall: real("rainfall"), discharge: real("discharge"), water_level: real("water_level"), season: varchar("season", { length: 50 }), temperature: real("temperature"), turbidity: real("turbidity"), notes: text("notes"), observer_name: varchar("observer_name", { length: 200 }), created_at: timestamp("created_at").defaultNow(),
});
export const catchment_features = pgTable("catchment_features", {
  catchment_id: serial("catchment_id").primaryKey(), spring_id: integer("spring_id").references(() => springs.spring_id), slope: real("slope"), elevation: real("elevation"), soil_type: varchar("soil_type", { length: 100 }), land_cover: varchar("land_cover", { length: 100 }), vegetation_index: real("vegetation_index"), drainage_density: real("drainage_density"), catchment_area: real("catchment_area"), permeability: real("permeability"), recharge_potential_score: real("recharge_potential_score"), distance_to_spring: real("distance_to_spring"), created_at: timestamp("created_at").defaultNow(),
});
export const recharge_zones = pgTable("recharge_zones", {
  zone_id: serial("zone_id").primaryKey(), spring_id: integer("spring_id").references(() => springs.spring_id), name: varchar("name", { length: 200 }), latitude: real("latitude").notNull(), longitude: real("longitude").notNull(), area: real("area"), recharge_suitability_score: real("recharge_suitability_score"), priority_rank: integer("priority_rank"), slope: real("slope"), soil_type: varchar("soil_type", { length: 100 }), land_cover: varchar("land_cover", { length: 100 }), expected_recharge_potential: real("expected_recharge_potential"), estimated_cost: real("estimated_cost"), suitable_interventions: jsonb("suitable_interventions"), ai_explanation: text("ai_explanation"), created_at: timestamp("created_at").defaultNow(),
});
export const farms = pgTable("farms", {
  farm_id: serial("farm_id").primaryKey(), village_id: integer("village_id").references(() => villages.village_id), farmer_name: varchar("farmer_name", { length: 200 }), area: real("area"), latitude: real("latitude"), longitude: real("longitude"), soil_type: varchar("soil_type", { length: 100 }), irrigation_type: varchar("irrigation_type", { length: 100 }), water_source: varchar("water_source", { length: 100 }), spring_id: integer("spring_id").references(() => springs.spring_id), created_at: timestamp("created_at").defaultNow(),
});
export const crops = pgTable("crops", {
  crop_id: serial("crop_id").primaryKey(), crop_name: varchar("crop_name", { length: 200 }).notNull(), season: varchar("season", { length: 50 }), water_requirement: real("water_requirement"), duration_days: integer("duration_days"), suitable_soil: varchar("suitable_soil", { length: 200 }), category: varchar("category", { length: 100 }), drought_tolerance: varchar("drought_tolerance", { length: 50 }), created_at: timestamp("created_at").defaultNow(),
});
export const farm_crops = pgTable("farm_crops", {
  id: serial("id").primaryKey(), farm_id: integer("farm_id").references(() => farms.farm_id), crop_id: integer("crop_id").references(() => crops.crop_id), area: real("area"), season: varchar("season", { length: 50 }), year: integer("year"), yield_estimate: real("yield_estimate"), created_at: timestamp("created_at").defaultNow(),
});
export const interventions = pgTable("interventions", {
  intervention_id: serial("intervention_id").primaryKey(), name: varchar("name", { length: 200 }).notNull(), category: varchar("category", { length: 100 }), cost_per_unit: real("cost_per_unit"), unit: varchar("unit", { length: 50 }), expected_recharge_per_unit: real("expected_recharge_per_unit"), maintenance_cost_annual: real("maintenance_cost_annual"), suitable_slope_min: real("suitable_slope_min"), suitable_slope_max: real("suitable_slope_max"), suitable_soil: varchar("suitable_soil", { length: 200 }), lifespan_years: integer("lifespan_years"), description: text("description"), created_at: timestamp("created_at").defaultNow(),
});
export const intervention_plans = pgTable("intervention_plans", {
  plan_id: serial("plan_id").primaryKey(), spring_id: integer("spring_id").references(() => springs.spring_id), name: varchar("name", { length: 200 }), budget: real("budget"), total_cost: real("total_cost"), expected_additional_water: real("expected_additional_water"), water_debt_reduction: real("water_debt_reduction"), agricultural_area_protected: real("agricultural_area_protected"), impact_score: real("impact_score"), interventions_list: jsonb("interventions_list"), status: varchar("status", { length: 50 }), created_at: timestamp("created_at").defaultNow(),
});
export const intervention_observations = pgTable("intervention_observations", {
  obs_id: serial("obs_id").primaryKey(), plan_id: integer("plan_id").references(() => intervention_plans.plan_id), intervention_id: integer("intervention_id").references(() => interventions.intervention_id), date: date("date").notNull(), predicted_effect: real("predicted_effect"), observed_effect: real("observed_effect"), cost_incurred: real("cost_incurred"), effectiveness_score: real("effectiveness_score"), notes: text("notes"), created_at: timestamp("created_at").defaultNow(),
});
export const simulations = pgTable("simulations", {
  simulation_id: serial("simulation_id").primaryKey(), spring_id: integer("spring_id").references(() => springs.spring_id), scenario: varchar("scenario", { length: 100 }), duration_years: integer("duration_years"), budget: real("budget"), target_area: real("target_area"), rainfall_scenario: varchar("rainfall_scenario", { length: 50 }), results: jsonb("results"), created_at: timestamp("created_at").defaultNow(),
});
export const users = pgTable("users", {
  user_id: serial("user_id").primaryKey(), name: varchar("name", { length: 200 }).notNull(), email: varchar("email", { length: 300 }).unique().notNull(), password_hash: text("password_hash").notNull(), role: varchar("role", { length: 50 }).notNull(), village_id: integer("village_id").references(() => villages.village_id), is_active: boolean("is_active").default(true), last_login: timestamp("last_login"), created_at: timestamp("created_at").defaultNow(),
});
export const alerts = pgTable("alerts", {
  alert_id: serial("alert_id").primaryKey(), spring_id: integer("spring_id").references(() => springs.spring_id), type: varchar("type", { length: 100 }), message: text("message").notNull(), is_read: boolean("is_read").default(false), created_at: timestamp("created_at").defaultNow(),
});
