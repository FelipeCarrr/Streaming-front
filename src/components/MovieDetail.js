import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Paper } from '@mui/material';
import axios from 'axios';
import MenuBar from './MenuBar'; 

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    
    axios
      .get(`http://localhost:8080/api/videos/${id}`) 
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
    <div><MenuBar />
    <div
      style={{
        backgroundColor: 'black', 
        minHeight: '100vh',       
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '16px',
        position: 'relative', 
      }}
    >
      <Paper
        elevation={3}
        style={{
          backgroundColor: 'transparent',
          padding: '16px',
          maxWidth: '900px',  
          margin: '0 auto',
          color: 'white',     
          borderRadius: '8px', 
        }}
      >
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <div>
          <video
            controls
            width="100%"
            style={{ borderRadius: '8px' }}
          >
            <source src={videoUrl} type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
      </Paper>
    </div>
    </div>
  );
};

export default MovieDetail;
