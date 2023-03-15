import React, { useEffect , useState} from 'react'
import movies from './movies.json'
import Moviescard from './Moviecard'
import style from './Moviegrid.module.css'
import { get } from "../utils/httpClient"


function Moviegrid() {
  let [movies, setMovies] = useState([]);
  useEffect(() =>{
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  })
  return (
    <ul className={style.moviesGrid}>
        {movies.map((movie) => (
             <Moviescard  key={movie.id} movie={movie} />
        ))}
    </ul>
  )
}

export default Moviegrid
