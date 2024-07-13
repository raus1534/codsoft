import Container from "./Container";
import UserBlog from "./UserBlog";

import UserProfile from "./UserProfile";

export default function Dashboard() {
  return (
    <Container className="flex p-4 space-x-5">
      <UserProfile />
      <UserBlog />
    </Container>
  );
}
