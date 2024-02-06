import logo from "../../assets/images/logo.svg"
import dp from "../../assets/images/dp.png"
import { useState, useEffect } from "react";

export default function Movies (){
  const [movies, setMovies] = useState([]);

  const url = 'https://api.themoviedb.org/3/discover/movie?api_key=bf348d5fea887396d30911075148bfdd&sort_by=popularity.desc';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setMovies(result.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="bg-black w-full h-[1200px]">
      <div className="flex justify-between p-10">
        <img src={logo} alt="logo" className="w-40 h-16" />
        <img src={dp} alt="dp" className="w-20 h-20"/>
      </div>
      <h1 className="text-white text-3xl font-semibold leading-10 ml-16">Entertainment according to your choice</h1>
      <div className="flex flex-col m-14">
        <h1 className="text-[#878787] font-medium text-3xl leading-10">Action</h1>
        <div className="grid grid-cols-4">
          {movies.filter(movie => movie.genre_ids.includes(28)).slice(0, 4).map(movie => (
            <div key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-[340px] h-[190px] mt-5 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col m-14">
        <h1 className="text-[#878787] font-medium text-3xl leading-10">Thriller</h1>
        <div className="grid grid-cols-4">
          {movies.filter(movie => movie.genre_ids.includes(53)).slice(0, 4).map(movie => (
            <div key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-[340px] h-[190px] mt-5 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col m-14">
        <h1 className="text-[#878787] font-medium text-3xl leading-10">Horror</h1>
        <div className="grid grid-cols-4 gap-x-10">
          {movies.filter(movie => movie.genre_ids.includes(27)).slice(0, 4).map(movie => (
            <div key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-[340px] h-[190px] mt-5 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}