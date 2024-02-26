import React from 'react';
import '../MadMaxMovies/MadMaxMovies.css';
import { Link,useNavigate } from 'react-router-dom';

const MadMaxMovies = () => {
  const navigate = useNavigate()
  return (
      <div className='container'>
      <div className='btn btnToHome'>
          <button onClick={ ()=> navigate("/") }>Go To Home</button>
          </div>
      <h1>Mad Max Movie</h1>
        <div className="ratio ratio-16x9">
            <iframe 
              src="https://www.youtube.com/embed/XJMuhwVlca4?si=rAEiYFnp0njnbc_L" 
              title="YouTube video player"
              allowFullScreen>
            </iframe>
          </div>
          <Link to='/madmax'></Link>
            <div className='descrip'>
            
            <p>"Mad Max: Fury Road" is a 2015 post-apocalyptic action film directed by George Miller. Set in a stark desert wasteland where humanity struggles for survival, the movie stars Tom Hardy as the titular character, Max Rockatansky, and Charlize Theron as Imperator Furiosa.

The story follows Max, a former police officer haunted by his past, who is captured by the tyrannical warlord Immortan Joe and his cult-like army known as the War Boys. Max becomes embroiled in a high-speed chase across the desert when Furiosa, one of Joe's trusted lieutenants, betrays him by smuggling Joe's five wives - women held captive as breeders - out of the Citadel, Joe's stronghold.

As Max and Furiosa reluctantly join forces, they embark on a relentless journey across the barren wasteland in search of freedom and redemption. Pursued by Immortan Joe and his fanatical followers, including his fearsome son Rictus Erectus, they encounter various allies and adversaries along the way, including the motorcycle-riding Vuvalini and the eccentric mechanic known as the Keeper of the Seeds.

"Mad Max: Fury Road" is celebrated for its adrenaline-pumping action sequences, breathtaking practical effects, and stunning cinematography. The film received widespread critical acclaim for its masterful direction, strong performances, and feminist themes, particularly in its portrayal of Furiosa as a fiercely independent and capable leader. It won numerous awards, including six Academy Awards, and is widely regarded as one of the greatest action films of all time.</p>
          </div>
      </div>
  );
};

export default MadMaxMovies;
