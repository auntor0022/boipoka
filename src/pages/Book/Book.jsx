import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
    const {
      bookId,
    bookName,
    image,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
      <Link to={`/BookDetails/${bookId}`}>
          <div className="card bg-base-100 w-96 shadow-sm p-6 rounded-xl border border-[#F3F3F3]">
      <figure className="bg-[#F3F3F3] py-8 rounded-xl">
        <img className="w-[134px] h-[200px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-around my-2">
          {tags.map((tag) => (
            <button className="font-medium text-base text-[#23BE0A]">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </h2>
              <p className="text-base">Book by: {publisher}</p>
              <div className="mt-1 border-t-1 border-dashed"></div>
        <div className="card-actions justify-end">
          <div className="badge">{category}</div>
          <div className="badge">
            {rating} <FaStarHalfAlt />
          </div>
        </div>
      </div>
    </div>
      </Link>
  );
};

export default Book;
