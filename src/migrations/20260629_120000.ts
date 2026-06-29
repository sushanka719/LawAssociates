import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Add nav_labels_* localized columns to site_settings_locales
  await db.execute(sql`
    ALTER TABLE "site_settings_locales"
      ADD COLUMN IF NOT EXISTS "nav_labels_firm_name" varchar DEFAULT 'Law Associates',
      ADD COLUMN IF NOT EXISTS "nav_labels_book_consultation" varchar DEFAULT 'Book Consultation',
      ADD COLUMN IF NOT EXISTS "nav_labels_practice_areas" varchar DEFAULT 'Practice Areas',
      ADD COLUMN IF NOT EXISTS "nav_labels_attorneys" varchar DEFAULT 'Attorneys',
      ADD COLUMN IF NOT EXISTS "nav_labels_about" varchar DEFAULT 'About',
      ADD COLUMN IF NOT EXISTS "nav_labels_case_results" varchar DEFAULT 'Case Results',
      ADD COLUMN IF NOT EXISTS "nav_labels_insights" varchar DEFAULT 'Insights',
      ADD COLUMN IF NOT EXISTS "nav_labels_contact" varchar DEFAULT 'Contact';
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
    ALTER TABLE "site_settings_locales"
      DROP COLUMN IF EXISTS "nav_labels_firm_name",
      DROP COLUMN IF EXISTS "nav_labels_book_consultation",
      DROP COLUMN IF EXISTS "nav_labels_practice_areas",
      DROP COLUMN IF EXISTS "nav_labels_attorneys",
      DROP COLUMN IF EXISTS "nav_labels_about",
      DROP COLUMN IF EXISTS "nav_labels_case_results",
      DROP COLUMN IF EXISTS "nav_labels_insights",
      DROP COLUMN IF EXISTS "nav_labels_contact";
  `)
}
