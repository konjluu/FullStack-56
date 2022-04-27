import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import './App.css';
import AboutPage from "./container/About";
import HomePage from "./container/Home";
import NotFound from "./container/NotFound";

function App() {
  return (
    <BrowserRouter>
      <nav>
          <Link to="/" className="me-2">
            Home
          </Link>

          <Link to="/about" className="me-2">
            About
          </Link>

          <Link to="/do not know 1" className="me-2">
            Don't Know-1
          </Link>

          <Link to="/do not know 2" className="me-2">
          Don't Know-2
          </Link>
      </nav>

      <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/about" element={<AboutPage/>} />
         <Route path="*" element={<NotFound/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
