CREATE TABLE "gamex_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"application_id" varchar(255) NOT NULL,
	"evaluation_id" varchar(255) NOT NULL,
	"external_user_id" varchar(255) NOT NULL,
	"raw_answers" jsonb NOT NULL,
	"enjoyment_score" real NOT NULL,
	"immersion_score" real NOT NULL,
	"creative_thinking_score" real NOT NULL,
	"activation_score" real NOT NULL,
	"negative_affect_score" real NOT NULL,
	"dominance_score" real NOT NULL,
	"is_valid" boolean DEFAULT true NOT NULL,
	"submitted_at" timestamp DEFAULT now()
);
