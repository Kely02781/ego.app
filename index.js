const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/nasa-photo', async (req, res) => {
  try {
    const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=8cpawNSNdSnHLySR8a6WcmXuRLqHIwAEeVluhqTi');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error al obtener la foto de la NASA');
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
