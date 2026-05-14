import {defineConfig} from 'drizzle-kit';
import { getDatabaseUrl } from './src/db/connection';


export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema.ts",
  out: './drizzle',
  dbCredentials: {
    url: getDatabaseUrl()
  }

})
