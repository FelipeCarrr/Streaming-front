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

function SeriesList() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/series/')
      .then((response) => {
        setSeries(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener la lista de series:', error);
      });
  }, []);

  return (
    <div>
    <MenuBar/>
    
    <div style={{
        backgroundColor: 'black', 
        minHeight: '100vh',      
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'flex-start', 
        padding: '16px',
        position: 'relative', 
      }}>
    
      <Container style={{ marginTop: '20px', color: 'white' }}>
        <Typography variant="h4" gutterBottom>
          Lista de Series
        </Typography>
        <Grid container spacing={2}>
          {series.map((serie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={serie.id}>
              <Card style={{ background: 'white', color: 'black' }}>
                <CardMedia
                  component="img"
                  alt={serie.title}
                  src={serie.seasons[0].episodes[0].imageUrl}
                  style={{ objectFit: 'cover', width: '295px', height: '150px' }}
                />
                <CardContent>
                  <Typography variant="h6" align="center">
                    {serie.title}
                  </Typography>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Link to={`/series/${serie.id}`} style={{ textDecoration: 'none' }}>
                      <Button variant="outlined" color="primary">
                        Ver Serie
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
    </div>
  );
}

export default SeriesList;
