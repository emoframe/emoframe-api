CREATE TABLE "px_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"application_id" varchar(255) NOT NULL,
	"evaluation_id" varchar(255) NOT NULL,
	"external_user_id" varchar(255) NOT NULL,
	"immersion_score" integer NOT NULL,
	"fun_score" integer NOT NULL,
	"gameplay_score" integer NOT NULL,
	"submitted_at" timestamp DEFAULT now()
);
