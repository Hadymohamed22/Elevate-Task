import Layout from "@/layouts/Layout";
import CreatePost from "@/pages/CreatePost";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import PostDetails from "@/pages/PostDetails";
import { Route, Routes } from "react-router";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/posts/create-post" element={<CreatePost />} />
        <Route path="posts/:id" element={<PostDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
