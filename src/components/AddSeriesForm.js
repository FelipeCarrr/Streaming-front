import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  IconButton,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AddSeriesForm = () => {
  const initialEpisode = {
    title: '',
    description: '',
    videoUrl: '',
    imageUrl: '',
  };

  const initialSeason = {
    title: '',
    release_date: '',
    episodes: [initialEpisode],
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    release_date: '',
    seasons: [initialSeason],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSeasonChange = (index, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const seasons = [...prevData.seasons];
      seasons[index] = { ...seasons[index], [name]: value };
      return { ...prevData, seasons };
    });
  };

  const handleEpisodeChange = (seasonIndex, episodeIndex, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const seasons = [...prevData.seasons];
      const episodes = [...seasons[seasonIndex].episodes];
      episodes[episodeIndex] = { ...episodes[episodeIndex], [name]: value };
      seasons[seasonIndex] = { ...seasons[seasonIndex], episodes };
      return { ...prevData, seasons };
    });
  };

  const addSeason = () => {
    setFormData((prevData) => ({
      ...prevData,
      seasons: [...prevData.seasons, initialSeason],
    }));
  };

  const addEpisode = (seasonIndex) => {
    setFormData((prevData) => {
      const seasons = [...prevData.seasons];
      seasons[seasonIndex].episodes = [
        ...seasons[seasonIndex].episodes,
        initialEpisode,
      ];
      return { ...prevData, seasons };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8080/api/series/create', formData);
        console.log('Serie agregada con éxito:', response.data);
      // Manejar éxito, redireccionar o mostrar un mensaje
    } catch (error) {
      console.error('Error al agregar la serie:', error);
      // Manejar error, mostrar un mensaje de error, etc.
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5">Agregar Nueva Serie</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Título"
            fullWidth
            margin="normal"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            label="Descripción"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <TextField
            label="Fecha de Lanzamiento"
            fullWidth
            margin="normal"
            name="release_date"
            value={formData.release_date}
            onChange={handleChange}
          />

          {formData.seasons.map((season, seasonIndex) => (
            <div key={seasonIndex}>
              <Typography variant="h6">Temporada {seasonIndex + 1}</Typography>
              <TextField
                label="Título de la Temporada"
                fullWidth
                margin="normal"
                name="title"
                value={season.title}
                onChange={(e) => handleSeasonChange(seasonIndex, e)}
              />
              <TextField
                label="Fecha de Lanzamiento de la Temporada"
                fullWidth
                margin="normal"
                name="release_date"
                value={season.release_date}
                onChange={(e) => handleSeasonChange(seasonIndex, e)}
              />

              {season.episodes.map((episode, episodeIndex) => (
                <div key={episodeIndex}>
                  <Typography variant="subtitle1">
                    Episodio {episodeIndex + 1}
                  </Typography>
                  <TextField
                    label="Título del Episodio"
                    fullWidth
                    margin="normal"
                    name="title"
                    value={episode.title}
                    onChange={(e) =>
                      handleEpisodeChange(seasonIndex, episodeIndex, e)
                    }
                  />
                  <TextField
                    label="Descripción del Episodio"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    name="description"
                    value={episode.description}
                    onChange={(e) =>
                      handleEpisodeChange(seasonIndex, episodeIndex, e)
                    }
                  />
                  <TextField
                    label="URL del Video del Episodio"
                    fullWidth
                    margin="normal"
                    name="videoUrl"
                    value={episode.videoUrl}
                    onChange={(e) =>
                      handleEpisodeChange(seasonIndex, episodeIndex, e)
                    }
                  />
                  <TextField
                    label="URL de la Imagen del Episodio"
                    fullWidth
                    margin="normal"
                    name="imageUrl"
                    value={episode.imageUrl}
                    onChange={(e) =>
                      handleEpisodeChange(seasonIndex, episodeIndex, e)
                    }
                  />
                </div>
              ))}

              <IconButton
                color="primary"
                onClick={() => addEpisode(seasonIndex)}
              >
                <AddCircleOutlineIcon />
              </IconButton>
            </div>
          ))}

          <IconButton color="primary" onClick={addSeason}>
            <AddCircleOutlineIcon />
          </IconButton>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: '20px' }}
          >
            Agregar Serie
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AddSeriesForm;
