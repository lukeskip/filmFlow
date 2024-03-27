'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import style from '../detail.module.css';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const DetailContent = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mediaType, setMediaType] = useState('trailer');
  const URL = process.env.NEXT_PUBLIC_URL;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${URL}movies/${id}`);
        setMovieData(response.data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const toggleMediaType = () => {
    setMediaType(prevMediaType => prevMediaType === 'trailer' ? 'movie' : 'trailer');
  };

  if (isLoading) {
    return <div>Loading movie details...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!movieData) {
    return <div>No movie data found.</div>;
  }

  const {
    name,
    poster,
    trailer,
    movie, // Assuming movie refers to the same video URL as trailer
    director,
    description,
    duration,
    country,
    genres,
    reviews,
  } = movieData;

  return (
    <div className={style['detail-content']}>
      <Link href="/home">
        <button className={style['back-button']}>Ir a home</button>
      </Link>
      <div className={style['info-container']}>
        <img src={poster} alt={name + ' poster'} />
        <h3>{name}</h3>
        <p>Directed by: {director}</p>
        <p>Duration: {duration} minutes</p>
        <p>Country: {country}</p>
        <p>Description: {description}</p>
        <p>Genres: {genres.map((genre) => genre.name).join(', ')}</p>
        <div className={style['info-container']}></div>
        <h4>Reviews</h4>
        {reviews.map((review) => (
          <div key={review.id}>
            <p>{review.comment}</p>
            <p>Points: {review.points}</p>
            <p>User: {review.user.name}</p>
            <img src={review.user.img} alt={review.user.name} />
          </div>
        ))}
      </div>
      <div className={style['media-container']}>
      <button onClick={toggleMediaType}>
        {mediaType === 'trailer' ? 'Ver Película' : 'Ver Trailer'}
      </button>
        {mediaType === 'trailer' ? (
          <iframe src={trailer} width="800" height="500" title="Trailer" allowFullScreen />
        ) : (
          <iframe src={movie} width="800" height="500" title="Movie" allowFullScreen />
        )}
      </div>
    </div>
  );
};

export default DetailContent;
