// import React, { useState, useEffect } from 'react';
// import MovieItem from './MovieItem';
// //import '../css/card.css';                                    //to review

// function FetchData() {
//     const [movies, setMovies] = useState([]);

//     useEffect(() => {
//         fetchMovies();
//     }, []);

//     const fetchMovies = async () => {
//         try {
//             const response = await fetch('http://localhost:8080/movies/getAllMovies');
//             const data = await response.json();
//             setMovies(data);
//         } catch (error) {
//             console.error('Error fetching movies:', error);
//         }
//     };

//     return (
//         <div>
//             <div className="card-container">
//             {movies.map((movie) => (
//                 <MovieItem
//                     key={movie.movie_id}
//                     title={movie.title}
//                     release_date={movie.release_date}
//                     genre={movie.genre}
//                     duration={movie.duration}
//                     language={movie.language}
//                     director={movie.director}
//                     description={movie.description}
                   
//                 />
//             ))}
//             </div>
//         </div>
//     );
// }

// export default FetchData;

import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import '../CSS/card.css';

function FetchData() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch('http://localhost:8080/movies/getAllMovies');
            const data = await response.json();
            setMovies(data);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    return (
        <div>
            <div className="card-container">
            {movies.map((movie) => (
                <MovieItem
                    key={movie.movie_id}
                    movie_id={movie.movie_id}
                    title={movie.title}
                    release_date={movie.release_date}
                    genre={movie.genre}
                    duration={movie.duration}
                    language={movie.language}
                    director={movie.director}
                    description={movie.description}
                   
                />
            ))}
            </div>
            <p>hello git</p>
        </div>
    );
}

export default FetchData;
