import Image from "next/image";
import config from "../config/config";
import axios from "axios";

import { useState } from "react";
import BookList from "@/Components/Home/BookList";
import FilterBooks from "@/Components/Home/FilterBooks";
export default function Home({ book }) {
  return <h1>Hello</h1>;
  const [books, setBooks] = useState(book);
  function handleChange(sortbooks) {
    setTimeout(function () {
      setBooks([...sortbooks]);
    }, 500);
  }
  const data1 = [
    { name: "New Arrivals" },
    { name: "Box Sets" },
    { name: "Best Sellers" },
    { name: "Fiction Books" },
    { name: "Awards Winner" },
    { name: "Featured Author" },
    { name: "Request a Book" },
  ];
  return (
    <>
      <nav>
        <div className="container-fluid">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-sm-11">
              <ul className="list-inline m-0 p-0">
                {data1.map((data, listno = 0) => (
                  <li className="list-inline-item" key={listno + 1}>
                    <a>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-sm-1">
              <ul className="list-inline float-right mb-0 text-white">
                <li className="list-inline-item font-weight-bold ">
                  <a
                    className="text-white p-0"
                    href="https://play.google.com/store/apps/details?id=com.bookswagon"
                  >
                    <Image
                      src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/android_withouthover.svg"
                      alt="Picture of the author"
                      width="50"
                      height="40"
                      className="wihouthover"
                    />
                    <Image
                      src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/android_withhover.svg"
                      alt="Picture of the author"
                      width="50"
                      height="40"
                      className="withhover"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div id="site-wrapper">
        <div className="text-center mt-2">
          <h1>
            <span id="ctl00_phBody_lblHeading">Best Sellers</span>{" "}
          </h1>
        </div>
        <div className="container otherpage seeallfilter">
          <div className="row">
            <div className="filtercol listfilter">
              <FilterBooks books={books}></FilterBooks>
            </div>
            <div className="bestsellercontentcol">
              <BookList books={books} onChange={handleChange}></BookList>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const data = await axios({
      method: "get",
      url: config.API_URL + "api/book",
      // timeout: config.TIMEOUT, // Wait for 5 seconds
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(data);
    return {
      props: {
        book: data.data.books,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        book: [],
      },
    };
  }
};
