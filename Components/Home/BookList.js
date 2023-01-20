import Image from "next/image";
import BookListHeader from "./BookListHeader";
import Book from "./Book";

export default function BookList({ books, onChange }) {
  return (
    <div className="row bestsellerbox">
      <BookListHeader books={books} onChange={onChange}></BookListHeader>
      {books.map((book, countstrip = 0) => (
        <Book book={book} countstrip={countstrip} key={countstrip + 1}></Book>
      ))}
    </div>
  );
}
