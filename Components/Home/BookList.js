import Image from "next/image";
import BookListHeader from "./BookListHeader";
import Book from "./Book";
import { useContext } from "react";
import BookContext from "./BookContext";
import Link from "next/link";
export default function BookList() {
  const values = useContext(BookContext);
  const books = values.books;

  return (
    <div className="row bestsellerbox">
      <BookListHeader></BookListHeader>
      {books.map((book, countstrip = 0) => (
        <Book book={book} countstrip={countstrip} key={countstrip + 1}></Book>
      ))}
    </div>
  );
}
