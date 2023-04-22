import React from "react";

const movieNotFound = () => {
  return (
    <>
      <div className="bg-[#212121] flex flex-col items-center justify-center mx-auto mt-32">
        <code className="text-amber-500 font-semibold text-[150px]">404</code>
        <code className="text-gray-200 text-2xl">Movie Not Found</code>
      </div>
    </>
  );
};

export default movieNotFound;
