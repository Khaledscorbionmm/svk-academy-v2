import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

export async function GET() {
  const start = Date.now();
  
  let dbStatus = 'unknown';
  let dbLatencyMs = 0;

  try {
    const client = await pool.connect();
    const dbStart = Date.now();
    await client.query('SELECT 1');
    dbLatencyMs = Date.now() - dbStart;
    client.release();
    dbStatus = 'healthy';
  } catch {
    dbStatus = 'unhealthy';
  }

  const totalMs = Date.now() - start;
  const isHealthy = dbStatus === 'healthy';

  return NextResponse.json({
    status: isHealthy ? 'ok' : 'degraded',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    latencyMs: totalMs,
    services: {
      database: {
        status: dbStatus,
        latencyMs: dbLatencyMs,
      },
      api: {
        status: 'healthy',
        version: '1.3.0',
      },
    },
    app: {
      name: 'SVK Academy',
      environment: process.env.NODE_ENV || 'development',
    },
  }, { status: isHealthy ? 200 : 503 });
}
