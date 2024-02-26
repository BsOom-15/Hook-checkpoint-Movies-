import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../DuneFrankMovies/DuneFrankMovies.css';

const DuneFrankMovies = () => {
  const navigate = useNavigate()
  return (
      <div className='container'>
      <div className='btn btnToHome'>
          <button onClick={ ()=> navigate("/") }>Go To Home</button>
          </div>
      <h1>Avengers Movie</h1>
        <div className="ratio ratio-16x9">
        <iframe
        src="https://www.youtube.com/embed/n9xhJrPXop4?si=1qeMiYTf4jxLJDY8" 
        title="YouTube video player" 
        allowFullScreen>
        </iframe>
          </div>
          <Link to='/madmax'></Link>
            <div className='title'>
            
            </div>
            <div className='descrip'>
            <p>
            It seems like you're referring to the movie adaptation of Frank Herbert's science fiction novel "Dune." Directed by Denis Villeneuve, "Dune" was released in 2021. Here's an overview:

"Dune" is an epic science fiction story set in a distant future where noble houses vie for control of the desert planet Arrakis, the only source of the universe's most valuable substance known as "spice." The film follows the young nobleman Paul Atreides, played by Timothée Chalamet, whose family is tasked with overseeing the production of spice on Arrakis. As Paul becomes embroiled in the political intrigue and power struggles of Arrakis, he discovers his own destiny and encounters the native people of the planet, the Fremen.

The movie features an ensemble cast including Rebecca Ferguson, Oscar Isaac, Zendaya, Jason Momoa, and others. It is praised for its stunning visuals, intricate world-building, and faithful adaptation of Herbert's novel. "Dune" received critical acclaim for its direction, performances, and visual effects, and it is considered one of the most ambitious and visually striking science fiction films of recent years.

Denis Villeneuve's adaptation covers only the first part of Frank Herbert's novel, leaving room for a potential sequel to explore the rest of the story. The film has sparked renewed interest in Herbert's "Dune" series and has been celebrated by both fans of the original novel and newcomers to the world of Arrakis.
            </p>
          </div>
      </div>
  );
};

export default DuneFrankMovies


 

