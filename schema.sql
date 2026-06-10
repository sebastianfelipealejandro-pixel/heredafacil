-- SQL command to create the leads table and structure
CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    servicio VARCHAR(100) NOT NULL,
    mensaje TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
