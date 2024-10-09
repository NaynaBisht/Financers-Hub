import React from "react";
import "./FirstPage.css";

const FirstPage = () => {
  return (
    <div className="main-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
          <img src="/images/logo.png" alt="FinancersHub Logo" className="logo" />
          <h1 className="navbar-title">FinancersHub</h1>
          </div>
          <ul className="navbar-links">
            <li><a href="#msmes">MSMEs</a></li>
            <li><a href="#investors">Investors</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* MSMEs Section */}
        <section id="msmes" className="section">
          <div className="section-content">
            <h1 className="section-title">Empowering MSMEs</h1>
            <p className="section-description">
              FinancersHub provides a platform for MSMEs to apply for funding,
              manage credit score reports, and present investment opportunities.
            </p>
            <a href="/msme/register" className="button">Explore MSMEs</a>
          </div>
        </section>

        {/* Investors Section */}
        <section id="investors" className="section">
          <div className="section-content">
            <h1 className="section-title">Supporting Investors</h1>
            <p className="section-description">
              FinancersHub enables investors to discover promising MSMEs, review
              financial reports, and make informed investment decisions.
            </p>
            <a href="/investor/register" className="button">Explore Investors</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FirstPage;
