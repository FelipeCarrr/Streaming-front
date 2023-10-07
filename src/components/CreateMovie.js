import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@mui/material';
import MenuBar from './MenuBar';

function CreateMovie() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    genero: '',
    videoUrl: '',
    imageUrl:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza una solicitud POST para crear la película en tu API
    axios
      .post('https://streaming-app.azurewebsites.net/api/videos/create', formData) // Reemplaza '/api/videos/' con la ruta correcta de tu API
      .then((response) => {
        console.log('Película creada con éxito:', response.data);
        // Puedes redirigir al usuario a la página de detalles de la película
        // o mostrar un mensaje de éxito aquí.
      })
      .catch((error) => {
        console.error('Error al crear la película:', error);
        // Muestra un mensaje de error al usuario si es necesario.
      });
  };

  return (
    
    <div>
    <MenuBar/>
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" component="div" align="center" gutterBottom>
        Crear Película
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Título"
          variant="outlined"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Descripción"
          variant="outlined"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Género"
          variant="outlined"
          type="text"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
        fullWidth
        label="URL"
        variant="outlined"
        type="text" // Cambia "url" a "text" aquí
        name="videoUrl"
        value={formData.videoUrl}
        onChange={handleChange}
        required
        margin="normal"
        />
        <TextField
        fullWidth
        label="Minuatura URL"
        variant="outlined"
        type="text" // Cambia "url" a "text" aquí
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        required
        margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          size="large"
          sx={{ marginTop: 2 }}
        >
          Crear Película
        </Button>
      </form>
    </Container>
    </div>
  );
}

export default CreateMovie;
