import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Step 1: Create new tables for FirmServices collection and Jurisdiction global
  await db.execute(sql`
   CREATE TYPE "public"."enum_jurisdiction_blocks_icon" AS ENUM('Globe', 'Scale', 'Gavel', 'Building2', 'Shield', 'Network');
  CREATE TABLE "firm_services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" numeric DEFAULT 0 NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE "firm_services_locales" (
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );

  CREATE TABLE "jurisdiction_blocks_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );

  CREATE TABLE "jurisdiction_blocks_points_locales" (
  	"text" varchar NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );

  CREATE TABLE "jurisdiction_blocks" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_jurisdiction_blocks_icon" DEFAULT 'Globe'
  );

  CREATE TABLE "jurisdiction_blocks_locales" (
  	"heading" varchar NOT NULL,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );

  CREATE TABLE "jurisdiction" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );

  CREATE TABLE "jurisdiction_locales" (
  	"section_eyebrow" varchar DEFAULT 'Jurisdiction & Scope',
  	"section_headline" varchar DEFAULT 'Where we practise and how we reach.',
  	"section_lead" varchar DEFAULT 'Our practice spans Nepal''s courts and regulatory bodies, cross-border advisory work, and international arbitration proceedings — giving clients a single point of continuity across every forum their matter may reach.',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  `)

  // Step 2: Alter existing tables
  await db.execute(sql`
  ALTER TABLE "consultation_requests" ALTER COLUMN "practice_area" SET DATA TYPE text;
  `)

  // Remap old enum values that no longer exist in the new enum
  await db.execute(sql`
  UPDATE "consultation_requests" SET "practice_area" = 'dispute-resolution'   WHERE "practice_area" = 'litigation-disputes';
  UPDATE "consultation_requests" SET "practice_area" = 'corporate-commercial'  WHERE "practice_area" = 'corporate-ma';
  UPDATE "consultation_requests" SET "practice_area" = 'labour-employment'     WHERE "practice_area" = 'employment-labour';
  UPDATE "consultation_requests" SET "practice_area" = 'other'                 WHERE "practice_area" IN ('private-client-family', 'immigration', 'white-collar-defense');
  `)

  await db.execute(sql`
  DROP TYPE "public"."enum_consultation_requests_practice_area";
  CREATE TYPE "public"."enum_consultation_requests_practice_area" AS ENUM('corporate-commercial', 'banking-finance', 'mergers-acquisitions', 'foreign-investment', 'capital-markets', 'tax', 'labour-employment', 'intellectual-property', 'real-estate', 'competition-law', 'insolvency-restructuring', 'dispute-resolution', 'international-arbitration', 'regulatory-compliance', 'company-secretarial', 'environmental-law', 'energy-infrastructure', 'it-data-privacy', 'other');
  ALTER TABLE "consultation_requests" ALTER COLUMN "practice_area" SET DATA TYPE "public"."enum_consultation_requests_practice_area" USING "practice_area"::"public"."enum_consultation_requests_practice_area";
  ALTER TABLE "attorneys" ALTER COLUMN "photo_id" DROP NOT NULL;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "firm_services_id" integer;
  `)

  // Step 3: Add only the NEW nav_labels columns (firm_name..contact were added by migration 20260629_120000)
  await db.execute(sql`
  ALTER TABLE "site_settings_locales" ADD COLUMN IF NOT EXISTS "nav_labels_services" varchar DEFAULT 'Services';
  ALTER TABLE "site_settings_locales" ADD COLUMN IF NOT EXISTS "nav_labels_jurisdiction" varchar DEFAULT 'Jurisdiction';
  `)

  // Step 4: Add foreign keys, indexes, constraints
  await db.execute(sql`
  ALTER TABLE "firm_services_locales" ADD CONSTRAINT "firm_services_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."firm_services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jurisdiction_blocks_points" ADD CONSTRAINT "jurisdiction_blocks_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jurisdiction_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jurisdiction_blocks_points_locales" ADD CONSTRAINT "jurisdiction_blocks_points_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jurisdiction_blocks_points"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jurisdiction_blocks" ADD CONSTRAINT "jurisdiction_blocks_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jurisdiction"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jurisdiction_blocks_locales" ADD CONSTRAINT "jurisdiction_blocks_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jurisdiction_blocks"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "jurisdiction_locales" ADD CONSTRAINT "jurisdiction_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."jurisdiction"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "firm_services_updated_at_idx" ON "firm_services" USING btree ("updated_at");
  CREATE INDEX "firm_services_created_at_idx" ON "firm_services" USING btree ("created_at");
  CREATE UNIQUE INDEX "firm_services_locales_locale_parent_id_unique" ON "firm_services_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "jurisdiction_blocks_points_order_idx" ON "jurisdiction_blocks_points" USING btree ("_order");
  CREATE INDEX "jurisdiction_blocks_points_parent_id_idx" ON "jurisdiction_blocks_points" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "jurisdiction_blocks_points_locales_locale_parent_id_unique" ON "jurisdiction_blocks_points_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "jurisdiction_blocks_order_idx" ON "jurisdiction_blocks" USING btree ("_order");
  CREATE INDEX "jurisdiction_blocks_parent_id_idx" ON "jurisdiction_blocks" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "jurisdiction_blocks_locales_locale_parent_id_unique" ON "jurisdiction_blocks_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "jurisdiction_locales_locale_parent_id_unique" ON "jurisdiction_locales" USING btree ("_locale","_parent_id");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_firm_services_fk" FOREIGN KEY ("firm_services_id") REFERENCES "public"."firm_services"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_firm_services_id_idx" ON "payload_locked_documents_rels" USING btree ("firm_services_id");
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  DROP TABLE "firm_services" CASCADE;
  DROP TABLE "firm_services_locales" CASCADE;
  DROP TABLE "jurisdiction_blocks_points" CASCADE;
  DROP TABLE "jurisdiction_blocks_points_locales" CASCADE;
  DROP TABLE "jurisdiction_blocks" CASCADE;
  DROP TABLE "jurisdiction_blocks_locales" CASCADE;
  DROP TABLE "jurisdiction" CASCADE;
  DROP TABLE "jurisdiction_locales" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_firm_services_fk";
  ALTER TABLE "consultation_requests" ALTER COLUMN "practice_area" SET DATA TYPE text;
  DROP TYPE "public"."enum_consultation_requests_practice_area";
  CREATE TYPE "public"."enum_consultation_requests_practice_area" AS ENUM('corporate-ma', 'litigation-disputes', 'real-estate', 'employment-labour', 'private-client-family', 'intellectual-property', 'immigration', 'white-collar-defense', 'other');
  ALTER TABLE "consultation_requests" ALTER COLUMN "practice_area" SET DATA TYPE "public"."enum_consultation_requests_practice_area" USING "practice_area"::"public"."enum_consultation_requests_practice_area";
  DROP INDEX "payload_locked_documents_rels_firm_services_id_idx";
  ALTER TABLE "attorneys" ALTER COLUMN "photo_id" SET NOT NULL;
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "firm_services_id";
  ALTER TABLE "site_settings_locales" DROP COLUMN IF EXISTS "nav_labels_services";
  ALTER TABLE "site_settings_locales" DROP COLUMN IF EXISTS "nav_labels_jurisdiction";
  DROP TYPE "public"."enum_jurisdiction_blocks_icon";
  `)
}
