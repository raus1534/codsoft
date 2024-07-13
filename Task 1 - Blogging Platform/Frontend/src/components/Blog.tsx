import { useNavigate, useParams } from "react-router-dom";
import Container from "./Container";
import RecentPost from "./RecentPost";
import Categories from "./Categories";
import { useEffect, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { getSingleBlog } from "@api/blog";
import { formatDate, sanitizeHTML } from "@utils/helper";

export default function Blog() {
  const { blogId } = useParams();
  const [singleBlog, setSingleBlog] = useState<any>();

  const navigate = useNavigate();

  const getBlog = async () => {
    const { blog, error } = await getSingleBlog(blogId!);
    if (error) return navigate("/");

    setSingleBlog(blog);
  };

  useEffect(() => {
    if (!blogId) return navigate("/");
    getBlog();
  }, []);

  return (
    <Container className="flex">
      <div className="w-2/3 py-3 space-y-2">
        <img
          src={singleBlog?.poster.url}
          alt="blog"
          className="w-full h-[500px]"
        />
        <div className="space-y-0">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">{singleBlog?.title}</h1>
            <span className="flex items-center pr-5 space-x-1">
              <IoMdEye />
              <span>{singleBlog?.views}</span>
            </span>
          </div>
          <div className="flex justify-between pr-5">
            <span className="text-stone-600 text-md">
              {formatDate(singleBlog?.createdAt) || ""}
            </span>
            <div className="text-stone-600 text-md">
              <span>{singleBlog?.owner.name}</span>
            </div>
          </div>
        </div>
        <p
          className="pr-4 text-lg text-justify"
          dangerouslySetInnerHTML={sanitizeHTML(singleBlog?.content || "")}
        />
      </div>
      {/* //extra */}
      <div className="w-1/3 px-2 space-y-2">
        <RecentPost />
        <Categories />
      </div>
    </Container>
  );
}
