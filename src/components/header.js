import React from "react";

const header = ({ setSearch, onSubmit }) => {
  return (
    <>
      <div className="py-4">
        <h1 className="text-white text-5xl py-4 text-center font-semibold bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">ReyNa Movies</h1>
        <form action="search-movie" onSubmit={onSubmit}>
          <div className="flex justify-center py-2 gap-2 max-w-lg sm:max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search movie..."
              className="w-2/3 px-4 py-2 text-white bg-[#293540] focus:outline-none focus:ring-1 focus:bg-transparent focus:ring-amber-300 placeholder-slate-400  focus:placeholder-white rounded-full"
              onChange={({ target }) => setSearch(target.value)}
            />
            <button type="submit" className="btn rounded-full hover:bg-opacity-80">
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default header;
