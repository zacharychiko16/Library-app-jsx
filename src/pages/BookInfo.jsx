import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";

const BookInfo = ({ books }) => {
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="boo__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/book" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src="" alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title"></h2>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={50} salePrice={20} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary__para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa omnis facilis sequi. Illo ipsam iste qui non eligendi
                    tempora consectetur! Quae tempore doloremque, quia eligendi
                    repudiandae dolor autem dicta consectetur.
                  </p>
                  <p className="book__summary__para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa omnis facilis sequi. Illo ipsam iste qui non eligendi
                    tempora consectetur! Quae tempore doloremque, quia eligendi
                    repudiandae dolor autem dicta consectetur.
                  </p>
                </div>
                <button className="btn">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">
                Recommended Books
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
