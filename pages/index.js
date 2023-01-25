import config from "../config/config";
import Axios from "axios";
import BooContext from "@/Components/Home/BookContext";
import { useState } from "react";
import BookList from "@/Components/Home/BookList";
import FilterBooks from "@/Components/Home/FilterBooks";
import Navbar from "@/Components/Shared/Navbar";
import Bookdetail from "@/Components/Home/Bookdetails";
export default function Home({ book }) {
  const [books, setBooks] = useState(book);
  const [detailbook, setShowDetailBook] = useState(false);
  const [detailbookapi, setShowDetailBookapi] = useState({});
  async function handleSortBooks(filtertype, filterparam, filterstatus) {
    const filterbook = await Axios({
      method: "get",
      url: `http://18.205.191.245:3000/api/book?${filtertype}=${filterparam}`,

      // timeout: config.TIMEOUT, // Wait for 5 seconds
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTimeout(function () {
      setBooks(filterbook.data.data.books);
    }, 500);
  }
  async function showdetailbook(e) {
    const param = e.target.parentElement.id;
    window.location.href = `http://localhost:3002/book/${param}`;
    // const filterbook1 = await Axios({
    //   method: "get",
    //   url: `http://35.174.167.227:3000/api/book/detail/${param}`,

    //   // timeout: config.TIMEOUT, // Wait for 5 seconds
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const bookdetail = filterbook1.data.data.book[0];
    // console.log(filterbook1);
    // setTimeout(function () {
    //   setShowDetailBookapi(bookdetail);
    //   setShowDetailBook(true);
    // }, 500);
  }

  return (
    <BooContext.Provider
      value={{ books, detailbookapi, handleSortBooks, showdetailbook }}
    >
      <Navbar></Navbar>

      <div id="site-wrapper" className="">
        <div className="text-center mt-2">
          <h1>
            <span id="ctl00_phBody_lblHeading">Best Sellers</span>{" "}
          </h1>
        </div>
        <div className="container otherpage seeallfilter">
          <div className="row">
            <div className="filtercol listfilter">
              {!detailbook && <FilterBooks></FilterBooks>}
            </div>
            <div className="bestsellercontentcol">
              {detailbook ? (
                <Bookdetail book={detailbookapi}></Bookdetail>
              ) : (
                <BookList books={books}></BookList>
              )}
            </div>
          </div>
        </div>
      </div>
    </BooContext.Provider>
  );
}

export const getServerSideProps = async () => {
  try {
    const bookDataPromise = Axios({
      method: "get",
      url: config.API_URL + "api/book",
      // timeout: config.TIMEOUT, // Wait for 5 seconds
      headers: {
        "Content-Type": "application/json",
      },
    });
    const filterDataPromise = Axios({
      method: "get",
      url: config.API_URL + "api/book/filter/list",
      // timeout: config.TIMEOUT, // Wait for 5 seconds
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await Promise.all([bookDataPromise, filterDataPromise]);

    return {
      props: {
        book: result[0].data.data.books,
        filter: result[1].data.data.filters,
      },
    };
  } catch (error) {
    return {
      props: {
        book: ["a", "b"],
        filter: [],
      },
    };
  }
};
