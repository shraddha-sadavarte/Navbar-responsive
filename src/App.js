import React from "react";
import Navbar from "./Components/Navbar";
import {BrowserRouter,Routes, Route} from 'react-router-dom';

const Home = () => {
    return (
      <>
        <Navbar />
        <section className="hero-section">
          <p>Welcome to </p>
          <h1>Hogwarts! Home page</h1>
        </section>
      </>
    );
  };
  
  const Movies = () => {
    return (
      <>
        <Navbar />
        <section className="hero-section">
          <p>Welcome to </p>
          <h1>Hogwarts! Movies Page</h1>
        </section>
      </>
    );
  };
  
  const Books = () => {
    return (
      <>
        <Navbar />
        <section className="hero-section">
          <p>Welcome to </p>
          <h1>Hogwarts! Books Page</h1>
        </section>
      </>
    );
  };
  
  const About = () => {
    return (
      <>
        <Navbar />
        <section className="hero-section">
          <p>Welcome to </p>
          <h1>Hogwarts! About Page</h1>
        </section>
      </>
    );
  };
  
  const App = () => {
    return (
      <BrowserRouter>
        <Routes>
           <Route exact path="/" element={<Home />}> </Route>
           <Route exact path="/movies" element={<Movies />}> </Route>
           <Route exact path="/book" element={<Books />}> </Route>
           <Route exact path="/about" element={<About />}> </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  

export default App;
