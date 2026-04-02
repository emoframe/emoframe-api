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

export const eazSubmission = pgTable('eaz_submissions', {
  id: serial('id').primaryKey(),

  applicationId: varchar('application_id', { length: 255 }).notNull(), 
  evaluationId: varchar('evaluation_id', { length: 255 }).notNull(), 
  externalUserId: varchar('external_user_id', { length: 255 }).notNull(),

  happy: integer('happy').notNull(),
  tired: integer('tired').notNull(),
  worried: integer('worried').notNull(),
  confident: integer('confident').notNull(),
  courageous: integer('courageous').notNull(),
  nervous: integer('nervous').notNull(),
  determined: integer('determined').notNull(),
  guilty: integer('guilty').notNull(),
  passionate: integer('passionate').notNull(),
  angry: integer('angry').notNull(),
  brave: integer('brave').notNull(),
  openNewThings: integer('open_new_things').notNull(),
  happyPerson: integer('happy_person').notNull(),
  easyToAnger: integer('easy_to_anger').notNull(),
  proudAboutMyself: integer('proud_about_myself').notNull(),
  humiliated: integer('humiliated').notNull(),
  sad: integer('sad').notNull(),
  grumpy: integer('grumpy').notNull(),
  rage: integer('rage').notNull(),
  resilient: integer('resilient').notNull(),

  rawScore: integer('raw_score').notNull(),
  zungIndex: numeric('zung_index').notNull(),
  classification: varchar('classification', { length: 50 }).notNull(),

  submittedAt: timestamp('submitted_at').defaultNow(),
})

export const gdsSubmission = pgTable('gds_submissions', {
  id: serial('id').primaryKey(),

  applicationId: varchar('application_id', { length: 255 }).notNull(), 
  evaluationId: varchar('evaluation_id', { length: 255 }).notNull(), 
  externalUserId: varchar('external_user_id', { length: 255 }).notNull(),

  satisfied: integer('satisfied').notNull(),
  noActivities: integer('no_activities').notNull(),
  empty: integer('empty').notNull(),
  upset: integer('upset').notNull(),
  good: integer('good').notNull(),
  bad: integer('bad').notNull(),
  happy: integer('happy').notNull(),
  helpless: integer('helpless').notNull(),
  stayAtHome: integer('stay_at_home').notNull(),
  problemsOfMemory: integer('problems_of_memory').notNull(),
  wonderfulToStayAlive: integer('wonderful_to_stay_alive').notNull(),
  useless: integer('useless').notNull(),
  fullOfEnergy: integer('full_of_energy').notNull(),
  hopeless: integer('hopeless').notNull(),
  unlucky: integer('unlucky').notNull(),

  totalScore: integer('total_score').notNull(),
  classification: varchar('classification', { length: 50 }).notNull(),

  submittedAt: timestamp('submitted_at').defaultNow(),
})

export const brumsSubmission = pgTable('brums_submissions', {
  id: serial('id').primaryKey(),

  applicationId: varchar('application_id', { length: 255 }).notNull(), 
  evaluationId: varchar('evaluation_id', { length: 255 }).notNull(), 
  externalUserId: varchar('external_user_id', { length: 255 }).notNull(),

  cheered_up: integer('cheered_up').notNull(),
  irritated: integer('irritated').notNull(),
  depressed: integer('depressed').notNull(),
  terrified: integer('terrified').notNull(),
  crestfallen: integer('crestfallen').notNull(),
  broken_down: integer('broken_down').notNull(),
  confused: integer('confused').notNull(),
  exhausted: integer('exhausted').notNull(),
  anxious: integer('anxious').notNull(),
  unhappy: integer('unhappy').notNull(),
  huffy: integer('huffy').notNull(),
  worried: integer('worried').notNull(),
  sad: integer('sad').notNull(),
  sleepy: integer('sleepy').notNull(),
  insecure: integer('insecure').notNull(),
  willing: integer('willing').notNull(),
  tense: integer('tense').notNull(),
  disoriented: integer('disoriented').notNull(),
  grumpy: integer('grumpy').notNull(),
  undecided: integer('undecided').notNull(),
  tired: integer('tired').notNull(),
  energy: integer('energy').notNull(),
  angry: integer('angry').notNull(),
  alert: integer('alert').notNull(),

  factorScores: jsonb('factor_scores').notNull(),
  tmd: integer('tmd').notNull(),

  submittedAt: timestamp('submitted_at').defaultNow(),
})