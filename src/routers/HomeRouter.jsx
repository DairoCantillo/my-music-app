import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/HomeMusicApp/Home";
import Header from '../components/molecules/header/Header';
import Footer from '../components/molecules/footer/Footer';
const HomeRouter = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Home />} />
        <Route path="user" element={<Home />} />
        <Route path="playlists" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default HomeRouter;
