import React from "react";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="purple">Books</span>
          </h2>
          <a href="/books">
            <buttion className="btn">Explore books</buttion>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Explore;
