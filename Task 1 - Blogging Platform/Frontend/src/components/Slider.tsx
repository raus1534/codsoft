import { getBlogsByViews } from "@api/blog";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
export default function Slider() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const navigate = useNavigate();

  const getBlogs = async () => {
    const { blogs, error } = await getBlogsByViews();
    if (error) return navigate("/");

    setBlogs([...blogs]);
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <>
      <Link to={"/blog/" + blogs[0]?._id} className="w-full h-[65%] relative">
        <img
          src={blogs[0]?.poster?.url}
          alt="blog"
          className="relative w-full p-3 pb-0 h-3/4"
        />
        <span className="absolute bottom-0 p-3 text-3xl font-bold text-white uppercase left-5 right-3 bg-slide bg-slide-hover">
          {blogs[0]?.title}
        </span>
      </Link>
      <div className="flex space-x-2">
        {blogs.slice(1).map(({ title, poster, _id }) => {
          return (
            <Link to={"/blog/" + _id} className="w-1/3 rounded-xl">
              <img
                src={poster?.url}
                alt="blog"
                className="w-full p-3 pb-0 h-4/5"
              />
              <div className="px-4 font-bold text-md text-stone-800 text-wrap">
                {title.slice(0, 50) + `${title.length > 50 ? " ...." : ""}`}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
