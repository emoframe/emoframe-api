import 'dotenv/config'

const requiredEnvVars = [
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DB',
] as const

function getRequiredEnvVar(name: typeof requiredEnvVars[number]) {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

export function getDatabaseUrl() {
  const user = encodeURIComponent(getRequiredEnvVar('POSTGRES_USER'))
  const password = encodeURIComponent(getRequiredEnvVar('POSTGRES_PASSWORD'))
  const database = encodeURIComponent(getRequiredEnvVar('POSTGRES_DB'))
  const host = process.env.POSTGRES_HOST || 'localhost'
  const port = process.env.POSTGRES_PORT || '5432'

  return `postgresql://${user}:${password}@${host}:${port}/${database}`
}
