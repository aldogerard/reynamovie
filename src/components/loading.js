import React from "react";

const loading = () => {
  return (
    <>
      <div className="bg-[#212121] flex items-center justify-center mx-auto mt-40">
        <div className="bg-amber-500 w-5 h-5 m-5 md:w-8 md:h-8 md:m-8 rounded-full animate-loading  "></div>
        <div className="bg-amber-500 w-5 h-5 m-5 md:w-8 md:h-8 md:m-8 rounded-full animate-loading loading2"></div>
        <div className="bg-amber-500 w-5 h-5 m-5 md:w-8 md:h-8 md:m-8 rounded-full animate-loading loading3"></div>
      </div>
    </>
  );
};

export default loading;
