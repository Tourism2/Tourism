import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import BlogList from "./Cards";
import Footer from "./Footer";
import SignUpForm from "./SignUp";
import LogInForm from "./LogIn";
import HomePage from "./Home";
import BlogDetails from "./Details";
import BlogForm from "./BlogForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignUpForm />} />
        <Route exact path="/login" element={<LogInForm />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/blogform" element={<BlogForm />} />
      </Routes>
      <div className="mt-20">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
