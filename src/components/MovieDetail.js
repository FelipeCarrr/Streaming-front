import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Paper } from '@mui/material';
import axios from 'axios';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Realiza una solicitud GET al servidor de Spring Boot para obtener los detalles de la película por ID
    axios
      .get(`https://streaming-app.azurewebsites.net/api/videos/${id}`) // Asegúrate de que esta sea la ruta correcta en tu servidor
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error('Error al cargar la película:', error);
        setMovie(null); // Película no encontrada
      });
  }, [id]);

  if (!movie) {
    return <Typography variant="h5">Película no encontrada.</Typography>;
  }

  const { title, description, videoUrl } = movie;

  return (
    <Paper elevation={3} style={{ padding: '16px', maxWidth: '600px', margin: '0 auto', marginTop: '32px' }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <div>
        <video controls width="100%">
          <source src={videoUrl} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
      <Typography variant="body1" paragraph>
        {description}
      </Typography>
    </Paper>
  );
};

export default MovieDetail;
