"use client"; 
import { useState } from 'react';
import axios from 'axios';

const FormularioPelicula = () => {
  const [nombrePelicula, setNombrePelicula] = useState('');
  const [director, setDirector] = useState('');
  const [genero, setGenero] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [duracion, setDuracion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('ruta', {
        nombrePelicula,
        director,
        genero,
        descripcion,
        duracion
      });
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombrePelicula">Nombre de la película:</label>
        <input
          type="text"
          id="nombrePelicula"
          value={nombrePelicula}
          onChange={(e) => setNombrePelicula(e.target.value)}
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
        <label htmlFor="genero">Género:</label>
        <select
          id="genero"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          required
        >
          <option value="">Selecciona un género</option>
          <option value="Accion">Acción</option>
          <option value="Comedia">Comedia</option>
          <option value="Drama">Drama</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>

        </select>
      </div>
      <div>
        <label htmlFor="descripcion">Breve descripción:</label>
        <textarea
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label htmlFor="duracion">Duración (en horas):</label>
        <input
          type="number"
          id="duracion"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          required
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioPelicula;


//prueba para el push