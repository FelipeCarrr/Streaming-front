import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h4" color={'white'} gutterBottom>
          Lista de Películas
        </Typography>
        <Grid container spacing={2}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <Card>
                <CardMedia
                  component="img"
                  alt={movie.title}
                  src={movie.imageUrl}
                  style={{ objectFit: 'cover', width: '290px', height: '150px' }}
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
