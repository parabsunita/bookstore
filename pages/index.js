import { Inter } from "@next/font/google";
import Countstrip from "../public/Images/countstrip.png";
import Image from "next/image";

import config from "../config/config";
import axios from "axios";
import Search from "../public/Images/search-solid.svg";
import Header from "./shared/Header";
import BookList from "./Home/BookList";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ books }) {
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
                {data1.map((data) => (
                  <li className="list-inline-item">
                    <a>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="col-sm-1">
              <ul class="list-inline float-right mb-0 text-white">
                <li class="list-inline-item font-weight-bold ">
                  <a
                    class="text-white p-0"
                    href="https://play.google.com/store/apps/details?id=com.bookswagon"
                    target="_blank"
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
        <div className="container otherpage seeallfilter">
          <div class="text-center mt-2">
            <h1>
              <span id="ctl00_phBody_lblHeading">Best Sellers</span>{" "}
            </h1>
          </div>
          <div className="row">
            <div className="filtercol listfilter">
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
                <p>
                  <label for="amount">Price range:</label>
                  <input
                    type="text"
                    id="amount"
                    class="themecolor"
                    readonly=""
                  />
                </p>
                <div
                  id="slider-range"
                  className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                >
                  <>
                    <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
                    <span
                      tabindex="0"
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "100%" }}
                    />
                    {/* <span
                      tabindex="0"
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{left:"100%"}}
                    /> */}
                  </>
                </div>
              </div>
              <div className="d-block position-relative fitertype">
                <p>
                  <label for="amount">Discount Range:</label>
                  <input
                    type="text"
                    id="discountval"
                    class="themecolor"
                    readonly=""
                    style={{ border: "0", fontWeight: "bold", width: "130px" }}
                  />
                </p>
              </div>
              <div className="d-block position-relative fitertype mt-4">
                <input type="hidden" id="hdnBinding" value="0" />
                <div className="togglefilter">
                  <h3 className="themecolor">Binding</h3>
                  <i className="fas fa-caret-down position-absolute"></i>
                </div>
                <ul
                  className="list-unstyled"
                  aria-labelledby="navbarDropdown"
                  style={{ display: "block" }}
                >
                  <li className="nav-item position-relative">
                    <div className="checkboxwrapper position-absolute">
                      <input
                        type="checkbox"
                        value="1"
                        name="chkBinding"
                        onclick="GetSearchCriteria('books','Binding:1');"
                      />
                    </div>
                    <a
                      className="nav-link"
                      href="javascript:GetSearchCriteria('books','Binding:1');"
                    >
                      Paper Back
                    </a>
                  </li>
                  <li className="nav-item position-relative">
                    <div className="checkboxwrapper position-absolute">
                      <input
                        type="checkbox"
                        value="2"
                        name="chkBinding"
                        onclick="GetSearchCriteria('books','Binding:2');"
                      />
                    </div>
                    <a
                      className="nav-link"
                      href="javascript:GetSearchCriteria('books','Binding:2');"
                    >
                      Hard Cover
                    </a>
                  </li>
                  <li className="nav-item position-relative">
                    <div class="checkboxwrapper position-absolute">
                      <input
                        type="checkbox"
                        value="5"
                        name="chkBinding"
                        onclick="GetSearchCriteria('books','Binding:5');"
                      />
                    </div>
                    <a
                      className="nav-link"
                      href="javascript:GetSearchCriteria('books','Binding:5');"
                    >
                      Others
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-block position-relative fitertype mt-4">
                <input type="hidden" id="hdnLang" value="0" />
                <div className="togglefilter">
                  <h3 className="themecolor">Language</h3>
                  <i className="fas fa-caret-down position-absolute"></i>
                </div>
                <ul
                  className="list-unstyled"
                  aria-labelledby="navbarDropdown"
                  style={{ display: "block" }}
                >
                  <li className="nav-item position-relative">
                    <div className="checkboxwrapper position-absolute">
                      <input
                        type="checkbox"
                        value="English"
                        name="chkLanguage"
                        onclick="GetSearchCriteria('books','Language:English');"
                      />
                    </div>
                    <a
                      className="nav-link"
                      href="javascript:GetSearchCriteria('books','Language:English');"
                    >
                      English{" "}
                    </a>
                  </li>
                  <li className="nav-item position-relative">
                    <div className="checkboxwrapper position-absolute">
                      <input
                        type="checkbox"
                        value="Others"
                        name="chkLanguage"
                        onclick="GetSearchCriteria('books','Language:Others');"
                      />
                    </div>
                    <a
                      className="nav-link"
                      href="javascript:GetSearchCriteria('books','Language:Others');"
                    >
                      Others{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bestsellercontentcol">
              <div class="row">
                <div class="col-sm-6 text-left">
                  <strong>{books.length} results found</strong>
                </div>
                <div class="col-sm-6 text-right">
                  {" "}
                  Sort By:
                  <select id="ddlSort">
                    <option value="Ranking asc" selected="selected">
                      Relevance
                    </option>
                    <option value="Product_ActualPrice asc">
                      Price - Low to High
                    </option>
                    <option value="Product_ActualPrice desc">
                      Price - High to Low
                    </option>
                    <option value="Product_discount desc">Discount</option>
                  </select>
                </div>
              </div>
              <BookList books={books} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const { data } = await axios({
      method: "get",
      url: config.API_URL + "api/book",
      timeout: config.TIMEOUT, // Wait for 5 seconds
      headers: {
        "Content-Type": "application/json",
      },
    });
    return {
      props: {
        books: data.data.books,
      },
    };
  } catch {
    return {
      props: {
        books: [],
      },
    };
  }
};
