import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomeMusicApp/Home";
const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="favorites" element={<Home />} />
      <Route path="user" element={<Home />} />
      <Route path="playlists" element={<Home />} />
    </Routes>
  );
};

export default HomeRouter;
