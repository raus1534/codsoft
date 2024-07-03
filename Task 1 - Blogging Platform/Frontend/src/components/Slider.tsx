import test from "../assets/test.jpg";
export default function Slider() {
  return (
    <>
      <div className="w-full h-[65%] relative">
        <img
          src={test}
          alt="blog"
          className="relative w-full h-full p-3 pb-0"
        />
        <span className="absolute bottom-0 p-3 text-3xl font-bold text-white uppercase left-5 bg-slide bg-slide-hover">
          The AI is taking the World
        </span>
      </div>
      <div className="h-[35%] flex space-x-2">
        <div className="w-1/3">
          <img src={test} alt="blog" className="w-full p-3 pb-0 h-4/5" />
          <span className="pb-1 pl-3 text-lg text-wrap text-stone-800">
            The AI is taking the World
          </span>
        </div>{" "}
        <div className="w-1/3">
          <img src={test} alt="blog" className="w-full p-3 pb-0 h-4/5" />
          <span className="pb-1 pl-3 text-lg text-wrap text-stone-800">
            The AI is taking the World
          </span>
        </div>
        <div className="w-1/3">
          <img src={test} alt="blog" className="w-full p-3 pb-0 h-4/5" />
          <span className="pb-1 pl-3 text-lg text-wrap text-stone-800">
            The AI is taking the World
          </span>
        </div>
      </div>
    </>
  );
}
