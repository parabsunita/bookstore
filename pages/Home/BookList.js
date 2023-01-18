import Image from "next/image";
import Product from "./Product";
export default function BookList({ books }) {
  return (
    <div className="row bestsellerbox">
      {books.map((book, countstrip = 0) => (
        <Product
          book={book}
          countstrip={countstrip}
          key={countstrip + 1}
        ></Product>
      ))}
    </div>
  );
}
