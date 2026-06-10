const express = require('express');
const { PrismaClient } = require('@prisma/client');
const path = require('path');

const app = express();
app.use(express.json());

// Serve static files from Vite build
app.use(express.static(path.join(__dirname, 'dist')));

const prisma = new PrismaClient();

// POST endpoint for contact submissions
app.post('/api/contacto', async (req, res) => {
  const { name, phone, email, service, message } = req.body;

  if (!name || !phone || !email || !service) {
    return res.status(400).json({ success: false, error: 'Faltan campos obligatorios' });
  }

  try {
    const lead = await prisma.lead.create({
      data: {
        nombre: name,
        telefono: phone,
        email: email,
        servicio: service,
        mensaje: message || null
      }
    });
    
    console.log("Lead successfully inserted with Prisma:", lead);
    res.status(201).json({ success: true, lead });
  } catch (error) {
    console.error("Prisma insert error:", error);
    res.status(500).json({ success: false, error: 'Error al registrar contacto en la base de datos' });
  }
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
