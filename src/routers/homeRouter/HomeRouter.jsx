import { Routes, Route } from "react-router-dom";
import Home from "../../components/pages/home/Home";
import AuthenticationService from "../../services/auth";
import { useEffect } from "react";
import Header from "../../components/organisms/header/Header";
import Footer from "../../components/organisms/footer/Footer";
import Favorites from "../../components/pages/favorites/Favorites";
import "./home-router.scss";

//services
const authenticationService = new AuthenticationService();
const HomeRouter = () => {
  useEffect(() => {
    authenticationService.AuthenticationSpotify();
  });
  return (
    <>
      <Header />

      <main className="home-router">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default HomeRouter;
