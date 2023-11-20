import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MenuBar from './MenuBar';
import { Container, Typography, List,  ListItemText, Button, Card, CardMedia, CardContent } from '@mui/material';

function SeriesDetail() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/series/${id}`)
      .then((response) => {
        setSerie(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los detalles de la serie:', error);
      });
  }, [id]);

  if (!serie) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
    <MenuBar/>
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
      <Container style={{ marginTop: '20px', color: 'white' }}>
        <Typography variant="h4" gutterBottom>
          Detalles de la Serie
        </Typography>
        <Typography variant="h5" gutterBottom>
          Título: {serie.title}
        </Typography>
        <Typography variant="h6" gutterBottom style={{ textAlign: 'justify' }}>
          Descripción: {serie.description}
        </Typography>
        <List>
            {serie.seasons.map((season) => (
                <div key={season._id} style={{ marginBottom: '20px' }}>
                <Typography variant="h6" gutterBottom style={{ color: 'white' }}>{`Temporada ${season.title}`}</Typography>
                <List style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {season.episodes.map((episode) => (
                    <Card key={episode._id} style={{ margin: '8px', maxWidth: '300px' }}>
                        <CardMedia
                        component="img"
                        alt={episode.title}
                        src={episode.imageUrl}
                        style={{ objectFit: 'cover', width: '100%', height: '150px' }}
                        />
                        <ListItemText primary={` ${episode.title}`} style={{ textAlign: 'center' }} />
                        <CardContent>
                        <Typography variant="subtitle1" gutterBottom style={{ textAlign: 'justify' }}>
                            {episode.description}
                        </Typography>
                        </CardContent>
                        <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => window.open(episode.videoUrl, '_blank')}
                        style={{ margin: '8px' }}
                        >
                        Ver Episodio
                        </Button>
                    </Card>
                    ))}
                </List>
                </div>
            ))}
            </List>
      </Container>
    </div>
    </div>
  );
}

export default SeriesDetail;
