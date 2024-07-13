import { getOtherBlogs } from "@api/blog";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BlogCard from "./BlogCard";

export default function BlogList() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const navigate = useNavigate();

  const getBlogs = async () => {
    const { error, blogs } = await getOtherBlogs();
    if (error) return navigate("/");
    setBlogs([...blogs]);
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <>
      <div className="w-full h-screen p-3 overflow-scroll">
        {blogs.map(({ _id, title, createdAt, poster, content }) => {
          return (
            <BlogCard
              id={_id}
              title={title}
              createdAt={createdAt}
              poster={poster?.url}
              content={content}
            />
          );
        })}
      </div>
    </>
  );
}
