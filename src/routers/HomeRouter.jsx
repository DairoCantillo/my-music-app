import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import AuthenticationService from "../services/auth";
import { useEffect } from "react";
import Header from '../components/organisms/Header';
import Footer from '../components/organisms/Footer';

import { useDispatch } from "react-redux";

const authenticationService = new AuthenticationService();

const HomeRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    authenticationService.AuthenticationSpotify();
  });
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
