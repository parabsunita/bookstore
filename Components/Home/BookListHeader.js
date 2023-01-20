export default function BookListHeader({ books, onChange }) {
  var sortbooks;
  const SortData = (abc) => {
    var value = document.getElementById("Sort").value;
    if (value == "Product_ActualPrice asc") {
      sortbooks = books.sort(
        (a, b) => (a.discount * a.price) / 100 - (b.discount * b.price) / 100
      );
      console.log(abc);
    } else if (value == "Product_ActualPrice desc") {
      sortbooks = books.sort(function (a, b) {
        return (b.discount * b.price) / 100 - (a.discount * a.price) / 100;
      });
    } else {
      sortbooks = books;
    }
    return sortbooks;
  };
  function handleChange(event) {
    // Here, we invoke the callback with the new value
    debugger;
    onChange(SortData());
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
            <option value="Product_ActualPrice asc">Price - Low to High</option>
            <option value="Product_ActualPrice desc">
              Price - High to Low
            </option>
          </select>
        </div>
      </div>
    </>
  );
}
