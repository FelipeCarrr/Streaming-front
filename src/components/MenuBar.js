import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add'; // Importa el icono de agregar
import { Link } from 'react-router-dom';

const MenuBar = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole'); // Obtiene el rol del usuario desde el almacenamiento local

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole'); // Elimina el rol del usuario al cerrar sesión
    navigate('/');
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
            <HomeIcon />
          </Link>
          <Typography variant="h6" style={{ marginLeft: '8px', flexGrow: 1 }}>
            Streaming
          </Typography>
          {userRole === 'Admin' && ( // Renderiza el icono de agregar solo si el rol es 'Admin'
            <Link to="/createmovie" style={{ textDecoration: 'none', color: 'inherit' }}>
              <IconButton color="inherit">
                <AddIcon />
              </IconButton>
            </Link>
          )}
          <Button color="inherit" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuBar;
