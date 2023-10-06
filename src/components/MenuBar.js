import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home'; // Importa el icono de inicio
import { Link } from 'react-router-dom';

const MenuBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
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
          <Button color="inherit" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuBar;
