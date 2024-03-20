import { useState } from 'react';
import axios from 'axios';

const FormularioPelicula = () => {
  const [nombrePelicula, setNombrePelicula] = useState('');
  const [director, setDirector] = useState('');
  const [genero, setGenero] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [duracion, setDuracion] = useState('');
  const [poster, setPoster] = useState('');
  const [type, setType] = useState('');
  const [country, setCountry] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/ruta', {
        name: nombrePelicula,
        director: director,
        genre: genero,
        description: descripcion,
        duration: parseFloat(duracion),
        poster: poster,
        type: type,
        country: country,
        isActive: isActive
      });
      
      console.log('Respuesta del servidor:', response.data);
      // Aquí podrías añadir lógica adicional, como mostrar un mensaje de éxito o redireccionar
    } catch (error) {
      console.error('Error al enviar datos:', error);
      // Manejo de errores, como mostrar un mensaje al usuario
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
      <div>
        <label htmlFor="poster">Poster (URL de la imagen):</label>
        <input
          type="text"
          id="poster"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="type">Tipo:</label>
        <input
          type="text"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="country">País:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="isActive">¿Activa?:</label>
        <input
          type="checkbox"
          id="isActive"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioPelicula;
