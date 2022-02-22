import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HomeRouter from "../homeRouter/HomeRouter";
import Login from "../../components/pages/login/Login";
import "./app-router.scss";
import { onSession } from "../../services/session";
import Page404 from '../../components/pages/404/Page404';
const AppRouter = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/home/*"
          element={isLogin ? <HomeRouter /> : <Navigate to="/login" />}
        />
        <Route
          path="login"
          element={!onSession() ? <Login /> : <Navigate to="/home" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
