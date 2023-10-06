import React, { useState } from 'react';
import { TextField, Button, Box, Container, Typography } from '@mui/material'; // Importa componentes de Material-UI
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/users', formData);
      console.log(response.data);
      
      navigate('/');
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  };

  return (
    <Container maxWidth="sm"> {/* Contenedor con ancho máximo */}
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">Registro</Typography> {/* Título */}
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Nombre"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Apellido"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Registrarse
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
