import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Dashboard de Streaming
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
