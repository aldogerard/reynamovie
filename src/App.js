import React, { useEffect, useState } from "react";
import { getDataMovies, getSearchMovie } from "./api";

import Header from "./components/header";
import MovieCard from "./components/movieCard";
import Loading from "./components/loading";
import MovieNotFound from "./components/movieNotFound";

const App = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDataMovies().then((result) => setDatas(result));
  }, []);

  const handlerSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      search === ""
        ? getDataMovies()
            .then((result) => setDatas(result))
            .catch((err) => alert(err))
            .finally(() => setLoading(false))
        : getSearchMovie(search)
            .then((result) => setDatas(result))
            .catch((err) => alert(err))
            .finally(() => setLoading(false));
    }, 700);
  };

  const getData = () => {
    if (loading) return <Loading />;
    if (!loading && datas.length === 0) return <MovieNotFound />;
    return datas.map((res, i) => <MovieCard res={res} key={i} />);
  };

  return (
    <div className="w-full h-screen bg-[#212121] ">
      <div className="container max-w-5xl 2xl:max-w-7xl mx-auto ">
        <Header setSearch={setSearch} onSubmit={handlerSubmit} />
        <div className=" w-full  flex flex-wrap justify-start items-start pb-10">{getData()}</div>
        {datas && (
          <div className="flex justify-center py-6 mt-6 absolute -z-10 w-full left-0 ">
            <h1 className="text-gray-400 font-semibold">
              Copyright ©️ 2023 | build by
              <a href="https://aldogerard.github.io/tailwind-portfolio-css/" target="_blank" rel="noreferrer" className="text-amber-500">
                {" "}
                @aldogerard
              </a>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
