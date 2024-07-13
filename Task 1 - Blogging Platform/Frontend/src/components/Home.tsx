import Container from "./Container";
import Slider from "./Slider";

import RecentPost from "./RecentPost";
import Categories from "./Categories";
import BlogList from "./BlogList";

export default function Home() {
  return (
    <div className="bg-white">
      <Container className="flex space-x-5">
        <div className="h-[90vh] w-2/3 space-y-2">
          <Slider />
          <hr className="border-2 border-black" />
          <BlogList />
        </div>
        {/* //extra */}
        <div className="w-1/3 p-2 space-y-2">
          <RecentPost />
          <Categories />
        </div>
      </Container>
    </div>
  );
}
