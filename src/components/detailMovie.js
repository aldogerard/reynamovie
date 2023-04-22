import mark from "../assets/questionMark.png";

const detailMovie = ({ onClick }) => {
  return (
    <>
      <div className="fixed flex justify-center items-center backdrop-blur-lg bg-black/50 top-0 left-0 right-0 bottom-0">
        <div className="flex flex-wrap p-6 relative">
          <button onClick={onClick} className="absolute p-4 bg-[#202020] rounded-full right-0 -top-1 text-xl">
            ❌
          </button>
          <img src={mark} alt="" />
        </div>
      </div>
    </>
  );
};

export default detailMovie;
