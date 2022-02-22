import { Routes, Route } from "react-router-dom";
import Home from "../../components/pages/home/Home";
import AuthenticationService from "../../services/auth";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onSession } from "../../services/session";
import Header from "../../components/organisms/header/Header";
import Footer from "../../components/organisms/footer/Footer";
import Favorites from "../../components/pages/favorites/Favorites";
import "./home-router.scss";

import Page404 from "../../components/pages/404/Page404";

//services
const authenticationService = new AuthenticationService();
const HomeRouter = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const tracks = useSelector((state) => state.tracks);
  useEffect(() => {
    authenticationService.AuthenticationSpotify();
  }, [dispatch]);

  return (
    <>
      {onSession() && <Header />}
      <main className="home-router">
        <Routes>
          <Route path="/" element={tracks.length!==0 &&<Home tracks={tracks} />} />
          <Route
            path="favorites"
            element={<Favorites favorites={favorites} />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </main>

      {onSession() && <Footer />}
    </>
  );
};

export default HomeRouter;
