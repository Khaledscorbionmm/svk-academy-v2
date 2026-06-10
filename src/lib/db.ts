import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL || 
  'postgresql://neondb_owner:npg_V5fPWLc1lxRD@ep-gentle-block-a2b6i99b-pooler.eu-central-1.aws.neon.tech/svk-academy?sslmode=require';

// Create a global pool to avoid too many connections in serverless
const globalForPg = global as unknown as { pgPool: Pool };

export const pool = globalForPg.pgPool ?? new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

if (process.env.NODE_ENV !== 'production') {
  globalForPg.pgPool = pool;
}

export async function query<T = Record<string, unknown>>(
  text: string,
  params?: unknown[]
): Promise<T[]> {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows as T[];
  } finally {
    client.release();
  }
}

export async function queryOne<T = Record<string, unknown>>(
  text: string,
  params?: unknown[]
): Promise<T | null> {
  const rows = await query<T>(text, params);
  return rows[0] ?? null;
}

export async function initializeDatabase(): Promise<void> {
  await query(`
    CREATE TABLE IF NOT EXISTS admins (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL DEFAULT 'Admin',
      role VARCHAR(50) NOT NULL DEFAULT 'admin',
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW(),
      last_login TIMESTAMPTZ
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS courses (
      id SERIAL PRIMARY KEY,
      title VARCHAR(500) NOT NULL,
      title_ar VARCHAR(500),
      description TEXT,
      description_ar TEXT,
      thumbnail_url VARCHAR(1000),
      price DECIMAL(10,2) DEFAULT 369.00,
      currency VARCHAR(10) DEFAULT 'EGP',
      instructor_name VARCHAR(255),
      category VARCHAR(100),
      level VARCHAR(50) DEFAULT 'beginner',
      duration_hours INTEGER DEFAULT 0,
      is_published BOOLEAN DEFAULT false,
      is_featured BOOLEAN DEFAULT false,
      enrollment_count INTEGER DEFAULT 0,
      rating DECIMAL(3,2) DEFAULT 0,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS students (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      password_hash VARCHAR(255),
      age INTEGER DEFAULT NULL,
      country VARCHAR(100) DEFAULT 'Egypt',
      avatar_url VARCHAR(1000),
      xp INTEGER DEFAULT 0,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS enrollments (
      id SERIAL PRIMARY KEY,
      student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
      course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
      enrolled_at TIMESTAMPTZ DEFAULT NOW(),
      progress_percent INTEGER DEFAULT 0,
      completed_at TIMESTAMPTZ,
      UNIQUE(student_id, course_id)
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS lesson_access (
      id SERIAL PRIMARY KEY,
      student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
      course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
      lesson_slug VARCHAR(255) NOT NULL,
      status VARCHAR(50) DEFAULT 'requested',
      requested_at TIMESTAMPTZ DEFAULT NOW(),
      approved_at TIMESTAMPTZ,
      completed_at TIMESTAMPTZ,
      score INTEGER DEFAULT NULL,
      total_questions INTEGER DEFAULT NULL,
      UNIQUE(student_id, lesson_slug)
    )
  `);

  // Migrate existing lesson_access table - add columns if missing
  await query(`ALTER TABLE lesson_access ADD COLUMN IF NOT EXISTS completed_at TIMESTAMPTZ`).catch(() => {});
  await query(`ALTER TABLE lesson_access ADD COLUMN IF NOT EXISTS score INTEGER DEFAULT NULL`).catch(() => {});
  await query(`ALTER TABLE lesson_access ADD COLUMN IF NOT EXISTS total_questions INTEGER DEFAULT NULL`).catch(() => {});

  await query(`
    CREATE TABLE IF NOT EXISTS course_requests (
      id SERIAL PRIMARY KEY,
      student_id INTEGER REFERENCES students(id) ON DELETE CASCADE,
      course_id INTEGER REFERENCES courses(id) ON DELETE CASCADE,
      status VARCHAR(50) DEFAULT 'pending',
      requested_at TIMESTAMPTZ DEFAULT NOW(),
      UNIQUE(student_id, course_id)
    )
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS email_verifications (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      code VARCHAR(6) NOT NULL,
      expires_at TIMESTAMPTZ NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);
}

export default pool;

// Alias for convenience in new routes
export const initDb = initializeDatabase;
