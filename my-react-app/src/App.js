import './App.css';
import './style.css'
import MovieList from './components/MovieList/MovieList';
import { Route, Routes } from 'react-router-dom';


import MadMaxMovies from './components/MoveBetweenPages/MadMaxMovies/MadMaxMovies';
import AvengersMovie from './components/MoveBetweenPages/AvengersMovie/AvengersMovie';
import DuneFrankMovies from './components/MoveBetweenPages/DuneFrankMovies/DuneFrankMovies';





// App Function
function App() {
  return (
    <div className='container'>
    <Routes>
      <Route path='/' element = {<MovieList/>}/>
      <Route path='/madmax' element = {<MadMaxMovies/>}/>
      <Route path='/avengers' element = {<AvengersMovie/>}/>
      <Route path='/DuneFrankMovies' element = {<DuneFrankMovies/>}/>
      
    </Routes>
    </div>
  ) 
}

export default App