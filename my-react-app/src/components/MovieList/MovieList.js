import { useState } from 'react';
import '../MovieList/MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import PosterOne from '../../Img/MadMax.jpg';
import PosterTwo from '../../Img/Avengers Poster.jpg';
import PosterThree from '../../Img/Dune Frank.jpg';

function MovieList() {
    const [search, setSearch] = useState("");
    const [searchRate, setSearchRate] = useState("");
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: 'MAD MAX',
            description: 'The "Mad Max" movies are a series of post-apocalyptic action films directed by George Miller,featuring the character Max Rockatansky. Set in a dystopian future, the films are known for their intense action and imaginative world-building, with "Mad Max: Fury Road" being the most recent installment, acclaimed for its stunning visuals and exhilarating action sequences.',
            poster: PosterOne,
            rate: '(5)',
        },
        {
            id: 2,
            title: 'AVENGERS',
            description: 'The "Avengers" movies unite Marvels iconic superheroes against formidable foes like Loki and Thanos,showcasing epic battles and character growth. From the 2012 inception with "The Avengers" to the climactic "Endgame" in 2019, the series explores themes of sacrifice and redemption while protecting the universe. Renowned for its interconnected storytelling,',
            poster: PosterTwo,
            rate: '(4)',
        },
        {
            id: 3,
            title: 'DUNE FRANK',
            description: 'Dune is a sci-fi epic directed by Denis Villeneuve, based on Frank Herberts novel,following the journey of Paul Atreides as he navigates political intrigue and power struggles on the desert planet Arrakis. Set in a distant future, the film explores themes of destiny, ecology, and the human condition amidst conflict over a valuable resource called "spice."  With stunning visuals and a stellar cast',
            poster: PosterThree,
            rate: '(3)',
        }
    ]);
    const [newMovie, setNewMovie] = useState({
        id: 4,
        title: '',
        description: '',
        poster: '',
        rate: '',
    });

    const [selectedPoster , setSelectedPoster] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMovie({ ...newMovie, [name]: value });
    };

    const handlePosterChange = (e) => {
        setSelectedPoster(e.target.files[0]);
    }

    const handleAddMovie = () => {
        if (selectedPoster) {
            const movieToAdd = {
                ...newMovie,
                poster: URL.createObjectURL(selectedPoster)
            };
            setMovies([...movies, movieToAdd]);
        } else {
            window.prompt("No poster selected for the movie.");
        }
        
        setNewMovie({
            id: newMovie.id + 1,
            title: '',
            description: '',
            poster: '',
            rate: '',
        });
        setSelectedPoster(null);
    };

    return (
        <div className='container'>
            <div className='row'>
                <h1 className='h1-one'>Movies Library</h1>
                <div className='searchContainer'>
                    <div className='title-search'>
                        <input
                            type='text'
                            id='searchInput'
                            placeholder='Search By Title'
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className='rate-search'>
                        <input
                            onChange={(e) => setSearchRate(e.target.value)}
                            type='text'
                            id='searchInput'
                            placeholder='Search By Rate' />
                    </div>
                </div>
                {movies
                    .filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()) && movie.rate.includes(searchRate))
                    .map((movie) => (
                        <div key={movie.id} className='col-md-4'>
                            <MovieCard
                                id = {movie.id}
                                title={movie.title}
                                description={movie.description}
                                poster={movie.poster}
                                rate={<p>Rate : {movie.rate}</p>}
                            />
                        </div>
                    ))}
                <div className='designeForm'>
                    <div className=''>
                        <input
                            type='text'
                            name='title'
                            placeholder='Title'
                            value={newMovie.title}
                            onChange={handleInputChange}
                        />
                        <input
                            type='text'
                            name='description'
                            placeholder='Description'
                            value={newMovie.description}
                            onChange={handleInputChange}
                        />
                        <input
                            type='file'
                            name='poster'
                            className='posterFile'
                            placeholder='Poster URL'
                            onChange={handlePosterChange}
                        />
                        <input
                            type='text'
                            name='rate'
                            placeholder='Rate'
                            value={newMovie.rate}
                            onChange={handleInputChange}
                        />
                        <div className='btn'>
                        <button className='rounded-3' onClick={handleAddMovie}>Add Movie</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieList;

