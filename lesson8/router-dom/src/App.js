import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./container/About";
import HomePage from "./container/Home";
import NotFound from "./container/NotFound";
import UserDetail from "./container/UserDetail";
import Header from "./layout/Header";
import SearchPage from "./container/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/user/:login" element={<UserDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
