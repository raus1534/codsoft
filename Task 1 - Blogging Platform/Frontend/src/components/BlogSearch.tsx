import { useSearchParams } from "react-router-dom";
import Container from "./Container";
import RecentPost from "./RecentPost";
import Categories from "./Categories";
import { useEffect, useState } from "react";
import { searchBlog } from "@api/blog";
import { useNotification } from "@hooks/index";
import NotFoundText from "./NotFoundText";
import BlogCard from "./BlogCard";

export default function BlogSearch() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [resultNotFound, setResultNotFound] = useState<boolean>(false);
  const { updateNotification } = useNotification();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("title") || "";

  const searchBlogs = async (val: string) => {
    const { error, blogs } = await searchBlog(val);
    if (error) return updateNotification("error", error);
    if (!blogs.length) {
      setResultNotFound(true);
      return setBlogs([]);
    }
    setResultNotFound(false);
    setBlogs([...blogs]);
    console.log(blogs);
  };

  useEffect(() => {
    if (query.trim()) searchBlogs(query);
  }, [query]);

  return (
    <Container className="flex">
      <div className="w-2/3 p-4 py-3 space-y-2">
        <h1 className="text-3xl font-bold">Search Result: {query}</h1>
        <NotFoundText visible={resultNotFound} text="Blog Not Found" />
        <div className="w-full h-[200vh] overflow-scroll">
          {blogs.map(({ _id, title, createdAt, content, poster }) => {
            return (
              <>
                <BlogCard
                  key={_id}
                  id={_id}
                  title={title}
                  createdAt={createdAt}
                  poster={poster?.url}
                  content={content}
                />
                <hr className="border-1 border-primary" />
              </>
            );
          })}
        </div>
      </div>
      {/* //extra */}
      <div className="w-1/3 px-2 space-y-2">
        <RecentPost />
        <Categories />
      </div>
    </Container>
  );
}
