import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import CreateMovie from './components/CreateMovie';
import SeriesList from './components/SeriesList';
import SeriesDetail from './components/SeriesDetail';
import AddSeriesForm from './components/AddSeriesForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/createmovie" element={<CreateMovie />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/series" element={<SeriesList />} />
        <Route path="/series/:id" element={<SeriesDetail />} />
        <Route path="/add" element={<AddSeriesForm />} />
      </Routes>
    </Router>
  );
}

export default App;
