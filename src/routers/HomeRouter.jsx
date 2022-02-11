import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import AuthenticationService from "../services/auth";
import { useEffect } from "react";
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';
import Favorites from '../components/pages/Favorites';

//services
const authenticationService = new AuthenticationService();
const HomeRouter = () => {

  useEffect(() => {
    authenticationService.AuthenticationSpotify();
  });
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="user" element={<Home />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default HomeRouter;
