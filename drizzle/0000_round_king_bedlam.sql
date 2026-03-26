CREATE TABLE "sus_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"application_id" varchar(255) NOT NULL,
	"q1" integer NOT NULL,
	"q2" integer NOT NULL,
	"q3" integer NOT NULL,
	"q4" integer NOT NULL,
	"q5" integer NOT NULL,
	"q6" integer NOT NULL,
	"q7" integer NOT NULL,
	"q8" integer NOT NULL,
	"q9" integer NOT NULL,
	"q10" integer NOT NULL,
	"final_score" numeric NOT NULL,
	"submitted_at" timestamp DEFAULT now()
);
