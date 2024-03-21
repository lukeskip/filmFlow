'use client'
import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = () => {
  const [movieName, setMovieName] = useState('');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
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
        genre: genre,
        description: description,
        duration: parseFloat(duration),
        poster: posterUrl, // Cambiado a posterUrl
        country: country,
      });

      setSuccessMessage('Formulario enviado correctamente');
      setErrorMessage('');
      console.log('Server response:', response.data);

    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error al enviar datos: ' + error.message);
      console.error('Error sending data:', error);
    }
  };

  const handlePosterUrlChange = (e) => {
    setPosterUrl(e.target.value);
  };

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      {successMessage && <p>{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="movieName">Nombre de la Pelicula:</label>
          <input
            type="text"
            id="movieName"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            required
          />
        </div>
      <div>
        <label htmlFor="director">Director:</label>
        <input
          type="text"
          id="director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="genre">Genero:</label>
        <select
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        >
          <option value="">Select a genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Science Fiction">Ciencia Ficcion</option>
        </select>
      </div>
      <div>
        <label htmlFor="description">Breve descripcion :</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="duration">Duracion (en horas):</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </div>
      <div>
          <label htmlFor="posterUrl">Poster URL:</label>
          <input
            type="text"
            id="posterUrl"
            value={posterUrl}
            onChange={handlePosterUrlChange}
            required
          />
          {posterUrl && (
            <div>
              <img src={posterUrl} alt="Preview" style={{ maxWidth: '200px' }} />
            </div>
          )}
        </div>

      <div>
        <label htmlFor="country">Pais:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default MovieForm;