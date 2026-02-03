// src/Pages/Home.jsx
import React from "react";
import "./Home.css";

import bgImage from "../assets/bk-bg.png";
import cake1 from "../assets/cake1.png";
import cake2 from "../assets/cake2.png";
import customCake from "../assets/custom_cake.png";
import cupcakes from "../assets/sweet_cupcakes.png";
import pastries from "../assets/fresh_pastries.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="home"
    >
      {/* NAVBAR */}
      <header className="navbar">
        <nav className="nav-left">
          <a onClick={() => navigate("/book/all")}>Home</a>
          <span className="dot">·</span>
          <a onClick={() => navigate("/book/cakes")}>Cakes</a>
          <span className="dot">·</span>
          <a onClick={() => navigate("/book/cupcakes")}>Cupcakes</a>
        </nav>

        <nav className="nav-right">
          {/* <a href="#">Gallery</a> */}
          <span className="dot">·</span>
          {/* <a href="#">Contact</a> */}
        </nav>
      </header>
      <div className="nav-logo">
        Cakes <span>Special</span>
        <div className="logo-card">
          <img src={logo} alt="Logo" />
        </div>
      </div>


      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-content">
          <h1>Baked with <span>Love & Magic!</span></h1>
          <p>Delicious cakes & pastries made just for you.</p>
          <button
            className="primary-btn"
            onClick={() => {
              navigate("/book/all");
              window.scrollTo(0, 0);
            }}          >
            Discover Our Treats
          </button>
        </div>
        {/* <img src={cake1} alt="Cake" className="hero-left" /> */}
        <img src={cake2} alt="Cupcakes" className="hero-right" />

      </section>

      {/* CATEGORY CARDS */}
      <section className="categories">
        <div className="card" onClick={() => navigate("/book/cakes")}>
          <img src={customCake} alt="Custom Cakes" />
          <h3>Custom Cakes</h3>
          <button>Design Your Cake</button>
        </div>

        <div className="card" onClick={() => navigate("/book/cupcakes")}>
          <img src={cupcakes} alt="Sweet Cupcakes" />
          <h3>Sweet Cupcakes</h3>
          <button>View Cupcakes</button>
        </div>

        <div className="card" onClick={() => navigate("/book/pastries")}>
          <img src={pastries} alt="Fresh Pastries" />
          <h3>Fresh Pastries</h3>
          <button>Explore Pastries</button>
        </div>
      </section>

      {/* OFFERS */}
      <section className="offers">
        <div className="offer-box">
          <h2>Our Bestsellers</h2>
          <p><strong>Get 20% OFF</strong> on Your First Order!</p>
          <button>Get the Deal</button>
        </div>

        <div className="offer-box">
          <h2>Open Daily</h2>
          <p> - 8 AM to 8 PM -</p>
        </div>
      </section>

      {/* FOOTER ICONS */}
      <section className="features">
        <div>🍰 Freshly Baked</div>
        <div>❤️ Made with Love</div>
        <div>🚚 Fast Delivery</div>
      </section>
    </div>
  );
};

export default Home;
