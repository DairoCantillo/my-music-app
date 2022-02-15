import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HomeRouter from "../homeRouter/HomeRouter";
import Login from "../../components/pages/login/Login";
import "./app-router.scss";
import { onSession } from "../../services/session";
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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
