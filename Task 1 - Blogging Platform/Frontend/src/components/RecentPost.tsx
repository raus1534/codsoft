import test from "../assets/test.jpg";

export default function RecentPost() {
  return (
    <div className="p-2 shadow-2xl">
      <h1 className="p-2 pb-0 pl-1 mb-3 text-xl font-semibold uppercase open-sans text-stone-950">
        Recent Post
      </h1>
      <div className="flex items-center p-1 space-x-3 space-y-2">
        <img src={test} alt="blog" className="h-16 rounded-lg" />
        <div>
          <p className="text-lg font-semibold">
            Ai Taking Over World? Is it the End?
          </p>
          <span className="text-xs text-gray-700">July 1, 2024</span>
        </div>
      </div>{" "}
      <div className="flex items-center p-1 space-x-3">
        <img src={test} alt="blog" className="h-16 rounded-lg" />
        <div>
          <p className="text-lg font-semibold">
            Ai Taking Over World? Is it the End?
          </p>
          <span className="text-xs text-gray-700">July 1, 2024</span>
        </div>
      </div>{" "}
      <div className="flex items-center p-1 space-x-3">
        <img src={test} alt="blog" className="h-16 rounded-lg" />
        <div>
          <p className="text-lg font-semibold">
            Ai Taking Over World? Is it the End?
          </p>
          <span className="text-xs text-gray-700">July 1, 2024</span>
        </div>
      </div>{" "}
      <div className="flex items-center p-1 space-x-3">
        <img src={test} alt="blog" className="h-16 rounded-lg" />
        <div>
          <p className="text-lg font-semibold">
            Ai Taking Over World? Is it the End?
          </p>
          <span className="text-xs text-gray-700">July 1, 2024</span>
        </div>
      </div>{" "}
      <div className="flex items-center p-1 space-x-3">
        <img src={test} alt="blog" className="h-16 rounded-lg" />
        <div>
          <p className="text-lg font-semibold">
            Ai Taking Over World? Is it the End?
          </p>
          <span className="text-xs text-gray-700">July 1, 2024</span>
        </div>
      </div>
    </div>
  );
}
