import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import BookContext from "./BookContext";

export default function Book({ book, countstrip }) {
  const values = useContext(BookContext);
  const showdetailbook = values.showdetailbook;
  return (
    <div className="col-sm-20">
      <div
        className="card align-items-center showdetailbook"
        id={book.isbn_13}
        onClick={showdetailbook}
      >
        {book.discount != undefined && (
          <div className="offer position-absolute">{book.discount + "%"}</div>
        )}

        <span className="countstrip">{countstrip + 1}</span>

        <Image
          src={book.img_url}
          alt="Picture of the author"
          width="350"
          height="300"
          className="card-img-top"
        />
        <div className="card-body position-relative">
          <a className="quick-view themecolor">Quick View</a>
          <p className="card-text text-center">
            <span className="booktitle font-weight-bold">{book.name}</span>
            <span className="author authortextcolor">{book.author}</span>
            <span className="actualprice themecolor  font-weight-bold">
              {book.discount == undefined
                ? book.price
                : (book.discount * book.price) / 100}
            </span>
            <span className="initialprice">
              <del>{book.price}</del>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
