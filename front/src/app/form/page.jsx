'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const MovieForm = () => {
  const [movieName, setMovieName] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState([]);
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [country, setCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/movies', {
        name: movieName,
        director: director,
        genres: genre.join(','),
        description: description,
        duration: parseFloat(duration),
        poster: posterUrl,
        country: country,
      });

      setSuccessMessage('Formulario enviado correctamente');
      setErrorMessage('');
      console.log('Server response:', response.data);
      
      setMovieName('');
      setDirector('');
      setGenre([]);
      setDescription('');
      setDuration('');
      setPosterUrl('');
      setCountry('');

    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error al enviar datos: ' + error.message);
      console.error('Error sending data:', error);
    }
  };

  const handlePosterUrlChange = (e) => {
    setPosterUrl(e.target.value);
  };

  const toggleGenre = (selectedGenre) => {
    if (genre.includes(selectedGenre)) {
      setGenre(genre.filter((g) => g !== selectedGenre));
    } else {
      setGenre([...genre, selectedGenre]);
    }
  };

  return (
    <div className="movie-form-container">
      <Link href="/">
        <button className="back-button">Ir a Inicio</button>
      </Link>
      <div className="form-wrapper">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="movieName" className="form-label">Nombre de la Película:</label>
            <input
              type="text"
              id="movieName"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="director" className="form-label">Director:</label>
            <input
              type="text"
              id="director"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="genre" className="form-label">Género:</label>
            <select
              id="genre"
              value={genre}
              onChange={(e) => toggleGenre(e.target.value)}
              className="form-input"
            >
          <option value="">Select a genre</option>
          <option value="Action">Acción</option>
          <option value="Adventure">Aventura</option>
          <option value="Animation">Animación</option>
          <option value="Comedy">Comedia</option>
          <option value="Crime">Crimen</option>
          <option value="Documentary">Documental</option>
          <option value="Drama">Drama</option>
          <option value="Family">Familia</option>
          <option value="Fantasy">Fantasía</option>
          <option value="History">Historia</option>
          <option value="Horror">Horror</option>
          <option value="Music">Musica</option>
          <option value="Mystery">Misterio</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Ciencia ficción</option>
          <option value="TV Movie">Película de televisión</option>
          <option value="Thriller">Suspenso</option>
          <option value="War">Guerra</option>
          <option value="War">Western</option>
        </select>
        <ul className="genre-list">
        {genre.map((g) => (
                <li key={g}>
                  {g}{' '}
                  <button type="button" onClick={() => toggleGenre(g)}>
                    Eliminar
                  </button>
                </li>
              ))}
               </ul>
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">Breve descripción:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-textarea"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="duration" className="form-label">Duración (en minutos):</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="posterUrl" className="form-label">URL del Póster:</label>
            <input
              type="text"
              id="posterUrl"
              value={posterUrl}
              onChange={handlePosterUrlChange}
              className="form-input"
              required
            />
            {posterUrl && (
              <div>
                <img src={posterUrl} alt="Preview" className="poster-preview" />
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="country" className="form-label">País:</label>
            <input
              type="text"
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm