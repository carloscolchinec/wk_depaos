const express = require('express');
const router = express.Router();
const Actividad = require('../models/actividad');

// Ruta para crear una nueva actividad
router.post('/', async (req, res) => {
  try {
    const actividad = await Actividad.create(req.body);
    res.status(201).json(actividad);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Ruta para obtener una actividad por su ID
router.get('/:id', async (req, res) => {
  try {
    const actividad = await Actividad.findById(req.params.id);
    if (!actividad) {
      return res.status(404).json({ error: 'Actividad no encontrada' });
    }
    res.json(actividad);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Ruta para obtener todas las actividades
router.get('/', async (req, res) => {
  try {
    const actividades = await Actividad.find();
    res.json(actividades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Ruta para actualizar una actividad por su ID
router.put('/:id', async (req, res) => {
  try {
    const actividad = await Actividad.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actividad) {
      return res.status(404).json({ error: 'Actividad no encontrada' });
    }
    res.json(actividad);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Ruta para borrar una actividad por su ID
router.delete('/:id', async (req, res) => {
  try {
    const actividad = await Actividad.findByIdAndDelete(req.params.id);
    if (!actividad) {
      return res.status(404).json({ error: 'Actividad no encontrada' });
    }
    res.json(actividad);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
