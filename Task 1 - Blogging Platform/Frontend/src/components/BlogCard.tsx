import { formatDate, sanitizeHTMLWithP } from "@utils/helper";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  createdAt: string;
  content: string;
  poster: string;
}

export default function BlogCard({
  id,
  title,
  createdAt,
  content,
  poster,
}: Props) {
  return (
    <Link key={id} to={"/blog/" + id} className="flex">
      <div className="w-3/5">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className="text-xs text-gray-600">{formatDate(createdAt)}</span>
        <p
          className="text-base"
          dangerouslySetInnerHTML={sanitizeHTMLWithP(
            content.slice(0, 200) + ".." || ""
          )}
        />
      </div>
      <div className="w-2/5">
        <img src={poster} alt="blog" className="w-full h-40 p-2 " />
      </div>
    </Link>
  );
}
