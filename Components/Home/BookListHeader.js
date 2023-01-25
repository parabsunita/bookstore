import { useContext } from "react";
import BookContext from "./BookContext";

export default function BookListHeader() {
  const values = useContext(BookContext);
  const books = values.books;
  const handleSortBooks = values.handleSortBooks;
  function handleChange() {
    const filterparam = document.getElementById("Sort").value;
    const filterquery = "sortby";
    handleSortBooks(filterquery, filterparam);
  }

  return (
    <>
      <div className="row col-12">
        <div className="col-sm-6 text-left">
          <strong>{books.length} results found</strong>
        </div>
        <div className="col-sm-6 text-right">
          {" "}
          Sort By:
          <select id="Sort" onChange={handleChange}>
            <option value="Relevence">Relevence</option>
            <option value="price_low_to_high">Price - Low to High</option>
            <option value="price_high_to_low">Price - High to Low</option>
            <option value="discount_high_to_low">Discount</option>
          </select>
        </div>
      </div>
    </>
  );
}
