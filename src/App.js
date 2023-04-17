import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
