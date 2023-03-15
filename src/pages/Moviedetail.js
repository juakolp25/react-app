import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import movie from './movie.json'
import style from './Moviedetails.module.css'
import { get } from "../utils/httpClient"

function Moviedetail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() =>{
    get("/movie/"+ movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);

  if(!movie){
    return null;
  }

  const imagenUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <div className={style.detailsContainer}>
      <img 
        className={`${style.col} ${style.movieImage}`} 
        src={imagenUrl} 
        alt={movie.title} 
      />
      <div 
        className={`${style.col} ${style.movieDetails}`}>
        <p 
          className='firstItem'>
            <strong>Title:</strong> {movie.title}
        </p>
        <p>
        <strong>Genres:</strong>{" "}
        {movie.genres.map(genre => genre.name).join(" ")}
        </p>
        <p><strong>Description:</strong> {movie.overview}</p>
      </div>
    </div>
  )
}

export default Moviedetail
