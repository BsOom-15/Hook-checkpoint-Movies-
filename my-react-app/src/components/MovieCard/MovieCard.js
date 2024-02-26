import React from 'react';
import '../MovieCard/MovieCard.css'
import { useNavigate } from 'react-router-dom';

const MovieCard = (props) => {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='cards'>
      <div className='img'>
        <img src= {props.poster} alt=''/>
      </div>
      <div className='cards-title'>
        <h3>{props.title}</h3>
      </div>
      <div className='cards-descripe'>
        <p>{props.description}</p>
        <p>{props.rate}</p>
      </div>
      <div className='btn'>
      <button
      onClick={() => {
                            if(props.id === 1){
                              navigate("/madmax")
                            }else if (props.id === 2){
                                navigate("/avengers")
                            }else if (props.id === 3){
                              navigate("/DuneFrankMovies")
                            }
                        }} 
      >Go to Movie</button>
      </div>
      </div>
    </div>
  )
}

export default MovieCard
