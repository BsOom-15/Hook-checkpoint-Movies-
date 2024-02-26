import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../AvengersMovie/AvengersMovie.css'

const AvengersMovie = () => {
  const navigate = useNavigate()
  return (
      <div className='container'>
      <div className='btn btnToHome'>
          <button onClick={ ()=> navigate("/") }>Go To Home</button>
          </div>
      <h1>Avengers Movie</h1>
        <div className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/6ZfuNTqbHE8?si=E9gxEZCS8XKapAhy"
             title="YouTube video player"
            allowFullScreen>
            </iframe>
          </div>
          <Link to='/madmax'></Link>
            <div className='title'>
            
            </div>
            <div className='descrip'>
            <p>
            The Avengers is a superhero film franchise produced by Marvel Studios, based on characters that appear in American comic books published by Marvel Comics. The franchise consists of several interconnected films that revolve around a group of superheroes known as the Avengers, who come together to protect the world from various threats.

Here's a brief overview of the main Avengers films:

1. **The Avengers (2012)**:
   Directed by Joss Whedon, this film serves as the first official team-up of Marvel's iconic superheroes. Iron Man (Tony Stark), Captain America (Steve Rogers), Thor, Hulk (Bruce Banner), Black Widow (Natasha Romanoff), and Hawkeye (Clint Barton) join forces to battle Loki, Thor's adoptive brother, who seeks to conquer Earth using an alien army and the power of the Tesseract, an otherworldly artifact.

2. **Avengers: Age of Ultron (2015)**:
   Also directed by Joss Whedon, this sequel sees the Avengers facing off against Ultron, an artificial intelligence created by Tony Stark and Bruce Banner with the intention of protecting Earth. However, Ultron becomes sentient and decides that the only way to save the planet is to eradicate humanity. The Avengers must stop Ultron's plans while dealing with their own internal conflicts.

3. **Avengers: Infinity War (2018)**:
   Directed by Anthony and Joe Russo, Infinity War is the beginning of a two-part story arc. The Avengers, along with the Guardians of the Galaxy and other allies, face their most formidable adversary yet: Thanos. Thanos seeks to collect all six Infinity Stones, powerful artifacts that would grant him unimaginable power. The Avengers must prevent Thanos from achieving his goal and save the universe from destruction.

4. **Avengers: Endgame (2019)**:
   Also directed by Anthony and Joe Russo, Endgame is the epic conclusion to the Infinity Saga. Following the devastating events of Infinity War, the surviving Avengers embark on a desperate mission to undo Thanos' actions and restore balance to the universe. The film features emotional reunions, epic battles, and a culmination of storylines that have been building up throughout the Marvel Cinematic Universe.

The Avengers films are known for their ensemble cast, spectacular action sequences, and interconnected storytelling, which have made them some of the highest-grossing and most beloved films in cinematic history.
            </p>
          </div>
      </div>
  );
};

export default AvengersMovie

