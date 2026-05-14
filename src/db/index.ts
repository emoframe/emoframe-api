import {drizzle} from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { getDatabaseUrl } from './connection'

const pool = new Pool({
  connectionString: getDatabaseUrl(),
});

export const db = drizzle(pool);
