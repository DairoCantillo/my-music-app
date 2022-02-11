import { useSelector } from "react-redux";
import { Routes, Route, BrowserRouter,Navigate } from "react-router-dom";
import Login from '../components/pages/Login';
import HomeRouter from './HomeRouter';
const AppRouter = () => {
  const isLogin = useSelector(state => state.user.isLogin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/*" element={isLogin?<HomeRouter/>:<Navigate to="/login" />} />
        <Route path="login" element={!isLogin?<Login />:<Navigate to="/home" />} />
        <Route path="/"element={<Navigate to="/login" />}
    />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
