const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
app.use(express.json());

// Serve static files from Vite build
app.use(express.static(path.join(__dirname, 'dist')));

// Postgres pool configuration
const connectionString = process.env.DATABASE_URL || 'postgres://nicolas:cabrera@web_db-heredafacil:5432/heredafacil?sslmode=disable';
const pool = new Pool({
  connectionString: connectionString
});

// Test connection and initialize table
async function initDb() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        telefono VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        servicio VARCHAR(100) NOT NULL,
        mensaje TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Database initialized successfully.");
  } catch (err) {
    console.error("Database connection/initialization failed. Make sure Postgres is running.");
    console.error(err.message);
  }
}

initDb();

// POST endpoint for contact submissions
app.post('/api/contacto', async (req, res) => {
  const { name, phone, email, service, message } = req.body;

  if (!name || !phone || !email || !service) {
    return res.status(400).json({ success: false, error: 'Faltan campos obligatorios' });
  }

  try {
    const query = `
      INSERT INTO leads (nombre, telefono, email, servicio, mensaje)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    const values = [name, phone, email, service, message || null];
    const result = await pool.query(query, values);
    
    console.log("Lead successfully inserted:", result.rows[0]);
    res.status(201).json({ success: true, lead: result.rows[0] });
  } catch (error) {
    console.error("Error inserting lead into database:", error);
    res.status(500).json({ success: false, error: 'Error al registrar contacto en la base de datos' });
  }
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
