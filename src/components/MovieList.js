import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://streaming-app.azurewebsites.net/api/videos/')
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de películas:', error);
      });
  }, []);

  return (
    <div>
    <MenuBar/>
    <Container maxWidth="md">
      <Typography variant="h4" component="div" align="center" gutterBottom>
        Lista de Películas
      </Typography>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <Card>
              <CardMedia
                component="img"
                alt={movie.title}
                src={movie.imageUrl} // Reemplaza con la URL de la miniatura de la película
                style={{ objectFit: 'cover', height: '150px' }}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {movie.title}
                </Typography>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Link
                    to={`/movies/${movie.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button variant="outlined" color="primary">
                      Ver Película
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
}

export default MovieList;
