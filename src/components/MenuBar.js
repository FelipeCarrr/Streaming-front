import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import { MdMovieFilter } from 'react-icons/md';
import { BiSolidCameraMovie } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { HiOutlineDocumentAdd } from "react-icons/hi";

const MenuBar = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
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
          {userRole === 'Admin' && (
            <Link to="/createmovie" style={{ textDecoration: 'none', color: 'inherit' }}>
              <IconButton color="inherit">
                <AddIcon />
              </IconButton>
            </Link>
          )}
          {userRole === 'Admin' && (
            <Link to="/add" style={{ textDecoration: 'none', color: 'inherit' }}>
              <IconButton color="inherit">
              <HiOutlineDocumentAdd />
              </IconButton>
            </Link>
          )}
          <Link to="/series" style={{ textDecoration: 'none', color: 'inherit', marginRight: '12px' }}>
            <Button color="inherit">
              <MdMovieFilter />
              Series
            </Button>
          </Link>
          <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
            <Button color="inherit">
              <BiSolidCameraMovie />
              Películas
            </Button>
          </Link>
          <Button variant="contained" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuBar;
