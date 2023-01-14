import React from "react";

import { Link } from "react-router-dom";
import Price from "./Price";
import Rating from "./Rating";

const Book = ({ book }) => {
  return (
    <div className="book">
      <Link to="/books/:id">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to="/books/:id" className="book__title__link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating}/>
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
    </div>
  );
};

export default Book;
