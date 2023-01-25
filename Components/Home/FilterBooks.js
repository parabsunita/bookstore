import Image from "next/image";
import { useContext } from "react";
import BookContext from "./BookContext";
export default function FilterBooks({ filter }) {
  const values = useContext(BookContext);

  const handleSortBooks = values.handleSortBooks;

  function handleChange(e) {
    if (e.target.id == "PAPERBACK" || e.target.id == "HARDCOVER") {
      var filtertype = "binding";
    }
    handleSortBooks(filtertype, e.target.id);
  }

  return (
    <>
      <h2>
        Refine your Search
        <Image
          src="https://www.bookswagon.com/images/svg/clearfilter.svg"
          alt="clearfilter"
          width="40"
          height="30"
          className="float-right clearfilter"
        />
      </h2>
      <div className="d-block position-relative fitertype">
        <label htmlFor="amount" className="d-block">
          Price range:
        </label>

        <input type="range" min="1" max="100" value="50" id="myRange" />
      </div>
      <div className="d-block position-relative fitertype">
        <label htmlFor="amount" className="d-block">
          Discount range:
        </label>

        <input type="range" min="1" max="100" value="50" id="myRange" />
      </div>
      <div className="d-block position-relative fitertype mt-4">
        <input type="hidden" id="hdnBinding" value="0" />
        <div className="togglefilter">
          <h3 className="themecolor">Binding</h3>
          <i className="fa fa-caret-down position-absolute"></i>
        </div>
        <ul
          className="list-unstyled"
          aria-labelledby="navbarDropdown"
          style={{ display: "block" }}
        >
          <li className="nav-item position-relative">
            <input
              type="checkbox"
              id="PAPERBACK"
              className="mr-2"
              onClick={handleChange}
            ></input>
            <label htmlFor="PAPERBACK"> Paper Back</label>
          </li>
          <li className="nav-item position-relative">
            <input
              type="checkbox"
              id="HARDCOVER"
              className="mr-2"
              onClick={handleChange}
            ></input>
            <label htmlFor="HARDCOVER"> Hard Cover</label>
          </li>
          <li className="nav-item position-relative">
            <input type="checkbox" id="Others" className="mr-2"></input>
            <label htmlFor="Others"> Others</label>
          </li>
        </ul>
      </div>
      <div className="d-block position-relative fitertype mt-4">
        <input type="hidden" id="hdnLang" value="0" />
        <div className="togglefilter">
          <h3 className="themecolor">Language</h3>
          <i className="fa fa-caret-down position-absolute"></i>
        </div>
        <ul
          className="list-unstyled"
          aria-labelledby="navbarDropdown"
          style={{ display: "block" }}
        >
          <li className="nav-item position-relative">
            <input
              type="checkbox"
              value="English"
              id="chkLanguageEnglish"
              className="mr-2"
              name="chkLanguageEnglish"
            />

            <label htmlFor="chkLanguageEnglish">English</label>
          </li>
          <li className="nav-item position-relative">
            <input
              type="checkbox"
              value="Others"
              id="chkLanguageOthers"
              className="mr-2"
            />
            <label htmlFor="chkLanguageOthers">Others</label>
          </li>
        </ul>
      </div>
      {/* <div>
        {filter.map((filter, countstrip = 0) => (
          <span>{filter.price_range.heading}</span>
        ))} */}
      {/* </div> */}
    </>
  );
}
// export const getServerSideProps = async () => {
//   try {
//     const { data } = await axios({
//       method: "get",
//       url: config.API_URL + "api/book/filter/list",
//       // timeout: config.TIMEOUT, // Wait for 5 seconds
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     console.log(data);
//     return {
//       props: {
//         filter: data.data.filters,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         filter: [],
//       },
//     };
//   }
// };
