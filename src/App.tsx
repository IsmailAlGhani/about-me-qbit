import { useEffect, useState } from "react";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import HeaderSection from "./components/HeaderSection";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";

interface ProtectedRouteProps {
  isAllowed?: boolean;
  redirectPath?: string;
  children?: React.ReactNode;
}
const ProtectedRoute = ({
  isAllowed,
  redirectPath = "/",
  children,
}: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ?? <Outlet />;
};

function App() {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const keyUser = localStorage.getItem("userKey");
    setIsLogin(!!keyUser);
  }, [location]);
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderSection userId={isLogin} />
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route element={<ProtectedRoute isAllowed={!isLogin} />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route element={<ProtectedRoute isAllowed={!!isLogin} />}>
            <Route path="post" element={<PostPage />} />
          </Route>
        </Routes>
      </div>
      <footer className="h-10 !font-urbanist text-center">
        About Me ©2024 Created by IAG
      </footer>
    </div>
  );
}

export default App;
