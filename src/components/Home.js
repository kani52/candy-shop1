import React from 'react';
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <section>
      <header>
        <h1 className="welcome-heading">WELCOME TO CANDY SHOP</h1>
        <p>Your taste to Begins Here</p>
      </header>
      <section className="about">
        <h2>About Us</h2>
      <p >&nbsp;Our candy Trust is a registered non-minority service organization established in the year 1986 by Thiru. M.V. Muthuramalingam to inculcate among the youth a sense of discipline which is important to mould them into useful and capable citizens. The watch words of the Trust are “Dedication, Determination and Distinction”.
      Our was established in the year 1995-96 to impart quality service. It is a self financing non-minority institution, affiliated to Anna University and approved by All India Council for Technical Education (AICTE) and also an ISO certified institution.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="programs">
        <h2>Programs</h2>
        <p>
          Explore our wide range of programs, from arts and sciences to engineering and more.
        </p>
        <button>View Programs</button>
      </section>

      <section className="admissions">
        <h2>Admissions</h2>
        <p>
          Learn how to apply, admission requirements, and important deadlines.
        </p>
        <button>Admission Information</button>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? Contact our support team.
        </p>
        <button>Contact Us</button>
      </section>
      </section>
    </div>
  );
};

export default Home;
