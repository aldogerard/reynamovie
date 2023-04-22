import { useEffect, useState } from "react";
import mark from "../assets/questionMark.png";
import DetailMovie from "./detailMovie";

const MovieCard = ({ res }) => {
  const [genres, setGenres] = useState([]);
  const [modal, setModal] = useState(false);

  const backdrop_path = `https://image.tmdb.org/t/p/w500${res.backdrop_path}`;

  const getGenre = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${res.id}?api_key=3c859a2b04eb25c775cb827d8895f0e7`);
    const respJson = await response.json();
    setGenres((state) => (state = respJson.genres.filter((res, i) => i < 3)));
  };

  useEffect(() => {
    getGenre();
  }, []);

  const getDetailMovie = () => {
    if (modal) return <DetailMovie onClick={() => setModal(false)} />;
  };

  return (
    <>
      <div className="w-full max-w-lg md:max-w-md sm:w-1/2 lg:w-1/3 2xl:w-1/4  mx-auto sm:mx-0   overflow-hidden transition-all ease-in-out ">
        <div className="rounded-md overflow-hidden m-2 px-1 sm:px-0">
          <img src={!res.backdrop_path ? mark : backdrop_path} alt="PICT-MOVIE" />
          <div className=" flex flex-col justify-between gap-1  p-4 h-[270px] bg-[#151515] rounded-b-md overflow-hidden">
            <h1 className="text-amber-300 text-xl font-semibold">{res.title}</h1>
            <div className="flex gap-3 ">
              {genres.map((res) => (
                <p className="text-gray-200 text-sm">{res.name}</p>
              ))}
            </div>
            <p className="text-gray-500 text-sm">{res.overview.substring(0, 100)}</p>
            <div className="flex justify-between items-center py-3">
              <span className="text-white text-md">{res.release_date}</span>
              <span className="text-amber-500 font-bold text-lg">
                {res.vote_average.toFixed(1)}
                <span className="text-gray-600 font-normal text-base">/10</span>
              </span>
            </div>
            <div className="flex justify-end ">
              <button onClick={() => setModal(true)} className="btn hover:bg-opacity-80 w-[90px] rounded-lg text-sm">
                Detail
              </button>
            </div>
          </div>
        </div>
        {getDetailMovie()}
      </div>
    </>
  );
};

export default MovieCard;
