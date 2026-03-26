import { pgTable, serial, varchar, integer, numeric, timestamp, jsonb } from "drizzle-orm/pg-core";
import { int } from "zod";

export const susSubmission = pgTable('sus_submissions', {
  id: serial('id').primaryKey(),
  
  applicationId: varchar('application_id', { length: 255 }).notNull(), 
  evaluationId: varchar('evaluation_id', { length: 255 }).notNull(), 
  externalUserId: varchar('external_user_id', { length: 255 }).notNull(),
  


  useFrequency: integer('use_frequency').notNull(),
  useComplex: integer('use_complex').notNull(), 
  useEasy: integer('use_easy').notNull(),
  needHelp: integer('need_help').notNull(),
  functionIntegration: integer('function_integration').notNull(),
  inconsistency: integer('inconsistency').notNull(),
  learningCurve: integer('learning_curve').notNull(),
  jumbled: integer('jumbled').notNull(),
  confidence: integer('confidence').notNull(),
  learnSystem: integer('learn_system').notNull(),

  finalScore: numeric('final_score').notNull(),
  submittedAt: timestamp('submitted_at').defaultNow(),
})

export const panasSubmission = pgTable('panas_submissions', {
  id: serial('id').primaryKey(),

  applicationId: varchar('application_id', {length: 255}).notNull(),
  evaluationId: varchar('evaluation_id', { length: 255 }).notNull(), 
  externalUserId: varchar('external_user_id', { length: 255 }).notNull(),

  interested: integer('interesed').notNull(),
  distressed: integer('distressed').notNull(),
  excited: integer('excited').notNull(),
  upset: integer('upset').notNull(),
  strong: integer('strong').notNull(),
  guilty: integer('guilty').notNull(),
  scared: integer('scared').notNull(),
  hostile: integer('hostile').notNull(),
  enthusiastic: integer('enthusiastic').notNull(),
  proud: integer('proud').notNull(),
  irritable: integer('irritable').notNull(),
  alert: integer('alert').notNull(),
  ashamed: integer('ashamed').notNull(),
  inspired: integer('inspired').notNull(),
  nervous: integer('nervous').notNull(),
  determined: integer('determined').notNull(),
  attentive: integer('attentive').notNull(),
  jittery: integer('jittery').notNull(),
  active: integer('active').notNull(),
  afraid: integer('afraid').notNull(),

  positiveScore: integer('positive_score').notNull(),
  negativeScore: integer('negative_score').notNull(),

  submittedAt: timestamp('submitted_at').defaultNow(),
})

export const samSubmission = pgTable('sam_submissions', {
  id: serial('id').primaryKey(),

  applicationId: varchar('application_id', { length: 255 }).notNull(), 
  evaluationId: varchar('evaluation_id', { length: 255 }).notNull(), 
  externalUserId: varchar('external_user_id', { length: 255 }).notNull(),

  satisfaction: integer('satisfaction').notNull(),
  motivation: integer('motivation').notNull(),
  willpower: integer('willpower').notNull(),

  submittedAt: timestamp('submitted_at').defaultNow(),
})
export const leapSubmissions = pgTable('leap_submissions', {
  id: serial('id').primaryKey(),

  applicationId: varchar('application_id', { length: 255 }).notNull(), 
  evaluationId: varchar('evaluation_id', { length: 255 }).notNull(), 
  externalUserId: varchar('external_user_id', { length: 255 }).notNull(),

  admiration: integer('admiration').notNull(),
  relieved: integer('relieved').notNull(),
  tired: integer('tired').notNull(),
  happy: integer('happy').notNull(),
  accept: integer('accept').notNull(),
  heat: integer('heat').notNull(),
  satisfied: integer('satisfied').notNull(),
  jealous: integer('jealous').notNull(),
  attracted: integer('attracted').notNull(),
  calm: integer('calm').notNull(),
  funny: integer('funny').notNull(),
  desire: integer('desire').notNull(),
  careful: integer('careful').notNull(),
  strange: integer('strange').notNull(),
  hopeful: integer('hopeful').notNull(),
  fallInLove: integer('fall_in_love').notNull(),
  conformed: integer('conformed').notNull(),
  hungry: integer('hungry').notNull(),
  guilty: integer('guilty').notNull(),
  cold: integer('cold').notNull(),
  despise: integer('despise').notNull(),
  takePityOn: integer('take_pity_on').notNull(),
  disgusting: integer('disgusting').notNull(),
  need: integer('need').notNull(),
  duty: integer('duty').notNull(),
  envy: integer('envy').notNull(),
  humiliated: integer('humiliated').notNull(),
  interested: integer('interested').notNull(),
  fear: integer('fear').notNull(),
  proud: integer('proud').notNull(),
  shame: integer('shame').notNull(),
  angry: integer('angry').notNull(),
  sleepy: integer('sleepy').notNull(),
  longing: integer('longing').notNull(),
  sad: integer('sad').notNull(),
  surprised: integer('surprised').notNull(),
  thirst: integer('thirst').notNull(),
  thoughtful: integer('thoughtful').notNull(),
  serious: integer('serious').notNull(),
  scared: integer('scared').notNull(),

  factorValues: jsonb('factor_values').notNull(),
  submittedAt: timestamp('submitted_at').defaultNow(),
})