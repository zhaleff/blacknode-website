import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useLayoutEffect, lazy, Suspense } from "react";

// Solution taken from Stack Overflow

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Home = lazy(() => import("./app/home/App.jsx"));

// Public shell (navbar + footer)
const PublicLayout = lazy(() => import("./app/PublicLayout.jsx"));

export default function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
           <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
           </Route>
          </Routes>
        </Suspense>
      </Wrapper>
    </BrowserRouter>
  );
}
