import React from 'react'
import  style from './Moviecard.module.css'
import { Link } from 'react-router-dom';

function Moviecard({ movie }) {
    const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return <li className={style.movieCard}>
        <Link to={"/movies/" + movie.id}>
        <img 
            width={230} 
            height={345} 
            className={style.movieImage} 
            src={imagenUrl} 
            alt={movie.title} 
        />
        <div>{movie.title}</div>
        </Link>
        </li>
}

export default Moviecard
