const express = require('express');
const mongoose = require('mongoose');
const actividadRoutes = require('./routes/actividades');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = "mongodb+srv://actnotes:actnotes@cluster0.2ziiluy.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión a MongoDB Atlas exitosa');
  })
  .catch((err) => {
    console.error('Error en la conexión a MongoDB Atlas:', err);
  });

app.use(cors()); 

app.use(express.json());
app.use('/actividades', actividadRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
