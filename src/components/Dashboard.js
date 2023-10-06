import React from 'react';
import { Link } from 'react-router-dom';
import {   Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import MenuBar from './MenuBar';

const Dashboard = () => {

  const recentMovies = [
    {
      id: 1,
      title: 'Pelicula 1',
      imageUrl: 'URL_de_la_imagen_1.jpg',
    },
    {
      id: 2,
      title: 'Pelicula 2',
      imageUrl: 'URL_de_la_imagen_2.jpg',
    },
  ];

  return (
    <div>
      <MenuBar />
      <Container style={{ marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Películas Recientes
        </Typography>
        <Grid container spacing={2}>
          {/* Mapea las películas recientes y muestra una tarjeta para cada una */}
          {recentMovies.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia
                  component="img"
                  alt={movie.title}
                  height="200"
                  image={movie.imageUrl}
                />
                <CardContent>
                  <Typography variant="h6">{movie.title}</Typography>
                  <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="primary">
                      Ver Película
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
