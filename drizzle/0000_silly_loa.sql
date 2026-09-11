CREATE TABLE "alerts" ("alert_id" serial PRIMARY KEY NOT NULL,"spring_id" integer,"type" varchar(100),"message" text NOT NULL,"is_read" boolean DEFAULT false,"created_at" timestamp DEFAULT now());
--> statement-breakpoint
CREATE TABLE "catchment_features" ("catchment_id" serial PRIMARY KEY NOT NULL,"spring_id" integer,"slope" real,"elevation" real,"soil_type" varchar(100),"land_cover" varchar(100),"vegetation_index" real,"drainage_density" real,"catchment_area" real,"permeability" real,"recharge_potential_score" real,"distance_to_spring" real,"created_at" timestamp DEFAULT now());
--> statement-breakpoint
CREATE TABLE "crops" ("crop_id" serial PRIMARY KEY NOT NULL,"crop_name" varchar(200) NOT NULL,"season" varchar(50),"water_requirement" real,"duration_days" integer,"suitable_soil" varchar(200),"category" varchar(100),"drought_tolerance" varchar(50),"created_at" timestamp DEFAULT now());
--> statement-breakpoint
CREATE TABLE "farm_crops" ("id" serial PRIMARY KEY NOT NULL,"farm_id" integer,"crop_id" integer,"area" real,"season" varchar(50),"year" integer,"yield_estimate" real,"created_at" timestamp DEFAULT now());
--> statement-breakpoint
CREATE TABLE "farms" ("farm_id" serial PRIMARY KEY NOT NULL,"village_id" integer,"farmer_name" varchar(200),"area" real,"latitude" real,"longitude" real,"soil_type" varchar(100),"irrigation_type" varchar(100),"water_source" varchar(100),"spring_id" integer,"created_at" timestamp DEFAULT now());
--> statement-breakpoint
CREATE TABLE "intervention_observations" ("obs_id" serial PRIMARY KEY NOT NULL,"plan_id" integer,"intervention_id" integer,"date" date NOT NULL,"predicted_effect" real,"observed_effect" real,"cost_incurred" real,"effectiveness_score" real,"notes" text,"created_at" timestamp DEFAULT now());
--> statement-breakpoint
CREATE TABLE "intervention_plans" ("plan_id" serial PRIMARY KEY NOT NULL,"spring_id" integer,"name" varchar(200),"budget" real,"total_cost" real,"expected_additional_water" real,"water_debt_reduction" real,"agricultural_area_protected" real,"impact_score" real,"interventions_list" jsonb,"status" varchar(50),"created_at" timestamp DEFAULT now());
--> statement-breakpoint
CREATE TABLE "interventions" ("intervention_id" serial PRIMARY KEY NOT NULL,"name" varchar(200) NOT NULL,"category" varchar(100),"cost_per_unit" real,"unit" varchar(50),"expected_recharge_per_unit" real,"maintenance_cost_annual" real,"suitable_slope_min" real,"suitable_slope_max" real,"suitable_soil" varchar(200),"lifespan_years" integer,"description" text,"created_at" timestamp DEFAULT now());
--> statement-breakpoint
CREATE TABLE "recharge_zones" ("zone_id" serial PRIMARY KEY NOT NULL,"spring_id" integer,"name" varchar(200),"latitude" real NOT NULL,"longitude" real NOT NULL,"area" real,"recharge_suitability_score" real,"priority_rank" integer,"slope" real,"soil_type" varchar(100),"land_cover" varchar(100),"expected_recharge_potential" real,"estimated_cost" real,"suitable_interventions" jsonb,"ai_explanation" text,"created_at" timestamp DEFAULT now());
--> statement-breakpoint
CREATE TABLE "simulations" ("simulation_id" serial PRIMARY KEY NOT NULL,"spring_id" integer,"scenario" varchar(100),"duration_years" integer,"budget" real,"target_area" real,"rainfall_scenario" varchar(50),"results" jsonb,"created_at" timestamp DEFAULT now());
--> statement-breakpoint
CREATE TABLE "spring_observations" ("observation_id" serial PRIMARY KEY NOT NULL,"spring_id" integer,"date" date NOT NULL,"rainfall" real,"discharge" real,"water_level" real,"season" varchar(50),"temperature" real,"turbidity" real,"notes" text,"observer_name" varchar(200),"created_at" timestamp DEFAULT now());
--> statement-breakpoint
CREATE TABLE "springs" ("spring_id" serial PRIMARY KEY NOT NULL,"village_id" integer,"name" varchar(200) NOT NULL,"latitude" real NOT NULL,"longitude" real NOT NULL,"type" varchar(100),"current_discharge" real,"historical_avg_discharge" real,"health_score" real,"stability_score" real,"recharge_responsiveness" real,"seasonal_vulnerability" real,"agricultural_dependency" real,"classification" varchar(50),"elevation" real,"established_year" integer,"is_perennial" boolean,"created_at" timestamp DEFAULT now(),"updated_at" timestamp DEFAULT now());
--> statement-breakpoint
CREATE TABLE "users" ("user_id" serial PRIMARY KEY NOT NULL,"name" varchar(200) NOT NULL,"email" varchar(300) NOT NULL,"password_hash" text NOT NULL,"role" varchar(50) NOT NULL,"village_id" integer,"is_active" boolean DEFAULT true,"last_login" timestamp,"created_at" timestamp DEFAULT now(),CONSTRAINT "users_email_unique" UNIQUE("email"));
--> statement-breakpoint
CREATE TABLE "villages" ("village_id" serial PRIMARY KEY NOT NULL,"name" varchar(200) NOT NULL,"district" varchar(200) NOT NULL,"state" varchar(200) NOT NULL,"population" integer,"agricultural_area" real,"latitude" real,"longitude" real,"tribal_community" varchar(200),"created_at" timestamp DEFAULT now());
