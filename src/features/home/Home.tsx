import React, { useEffect, useState } from 'react'
import { getMovies } from '../movie/movieSlice'
import { useAppDispatch, useAppSelector } from '../../app/hook'

const Home = () => {

  const [movieName, setMovieName] = useState("spider")
  const dispatch = useAppDispatch()
  const movies = useAppSelector((state) => state.movie.movieList)
  console.log('movies', movies)

  useEffect(() => {
    dispatch(getMovies(movieName));
    
  }, [movieName])
  
  return (
    <div>
      Home
    </div>
  )
}

export default Home