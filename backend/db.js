// Cloudflare D1 Database Interaction
export async function initializeDatabase(env) {
  // Create tables if not exists
  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      name TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `).run();

  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS apps (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      name TEXT,
      description TEXT,
      config JSON,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(user_id) REFERENCES users(id)
    )
  `).run();
}

export async function createUser(env, { email, name }) {
  const stmt = env.DB.prepare(
    'INSERT INTO users (email, name) VALUES (?, ?)'
  );
  return await stmt.bind(email, name).run();
}

export async function createApp(env, { userId, name, description, config }) {
  const stmt = env.DB.prepare(
    'INSERT INTO apps (user_id, name, description, config) VALUES (?, ?, ?, ?)'
  );
  return await stmt.bind(userId, name, description, JSON.stringify(config)).run();
}

export async function getUserApps(env, userId) {
  const stmt = env.DB.prepare(
    'SELECT * FROM apps WHERE user_id = ?'
  );
  return await stmt.bind(userId).all();
}
