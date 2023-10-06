import React from 'react';
import { Container } from '@mui/material';
import MenuBar from './MenuBar';
import MovieList from './MovieList'
import { ThemeProvider, createTheme } from '@mui/material/styles';


function Dashboard() {

  const theme = createTheme({
    typography: {
      h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },
      h6: {
        fontSize: '1.2rem',
        fontWeight: 500,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div><MenuBar /></div>
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
      <Container style={{ marginTop: '20px' }}>
        <MovieList />
      </Container>
    </div>

    </ThemeProvider>
  );
}


export default Dashboard;
