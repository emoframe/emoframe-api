CREATE TABLE "iuxrv_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"application_id" varchar(255) NOT NULL,
	"evaluation_id" varchar(255) NOT NULL,
	"external_user_id" varchar(255) NOT NULL,
	"raw_answers" jsonb NOT NULL,
	"vr_sickness_score" real NOT NULL,
	"usability_score" real NOT NULL,
	"aesthetics_score" real NOT NULL,
	"presence_score" real NOT NULL,
	"emotions_score" real NOT NULL,
	"final_score" real NOT NULL,
	"submitted_at" timestamp DEFAULT now()
);
