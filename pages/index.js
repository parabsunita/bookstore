import Head from "next/head";
import Axios from "axios";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Countstrip from "../public/Images/countstrip.png";
import Image from "next/image";
import logo from "../public/Images/logo-new.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ books }) {
  console.log(books.data.books[0]);
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
      <header>
        <div class="container-fluid desktopheader mobilehide">
          <div className="row">
            <div className="col-sm-1">
              <Image
                src={logo}
                alt="Picture of the author"
                width="350px"
                height="300px"
              />
            </div>
            <div className="col-sm-6  d-flex align-items-center justify-content-center">
              <div className="searchcomponent">
                <input
                  placeholder="Search by Title, Author, Publisher or ISBN"
                  id="inputbar"
                  class="inputbar"
                  type="text"
                  autocomplete="off"
                  maxlength="250"
                />
                <span class="search">
                  <input
                    type="button"
                    name="btnTopSearch"
                    value=""
                    id="btnTopSearch"
                    class="sprite search-btn"
                  />
                </span>
              </div>
            </div>
            <div className="col-sm-5 d-flex align-items-center justify-content-end">
              <ul className="list-inline m-0 signreflink position-relative"></ul>
              <li className="list-inline-item text-center loginpopupwrapper">
                <a href="https://www.bookswagon.com/login">
                  <span class="usernametext">
                    <span id="ctl00_lblUser">Hello, User</span>
                  </span>
                  <span class="text-white accountred">
                    <Image
                      alt="Wishlist Icon"
                      src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/account_red.svg"
                      width="50"
                      height="30"
                    />
                  </span>
                </a>
              </li>
              <li className="list-inline-item position-relative">
                <a href="https://www.bookswagon.com/wishlist.aspx">
                  <span className="itemcount">
                    <label id="ctl00_lblWishlistCount">0</label>
                  </span>
                  <Image
                    alt="Wishlist Icon"
                    src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/wishlist_white.svg"
                    width="50"
                    height="30"
                  />
                </a>
              </li>
              <li className="list-inline-item position-relative">
                <a href="https://www.bookswagon.com/wishlist.aspx">
                  <span className="itemcount">
                    <label id="ctl00_lblWishlistCount">0</label>
                  </span>
                  <Image
                    alt="Wishlist Icon"
                    src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/cart_white.svg"
                    width="50"
                    height="30"
                  />
                </a>
              </li>
            </div>
          </div>
        </div>
      </header>
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
                    type="range"
                    id="amount"
                    className="themecolor"
                    // style="border: 0; font - weight: bold; width: 130px"
                  />
                </p>
              </div>
              <div className="d-block position-relative fitertype"></div>
              <div className="d-block position-relative fitertype"></div>
            </div>
            <div className="bestsellercontentcol">
              <div className="row"></div>
              <div className="row bestsellerbox">
                {books.data.books.map((user, countstrip = 0) => (
                  <div className="col-sm-20" key={books.name}>
                    <div className="card align-items-center">
                      <div className="offer position-absolute">
                        {user.discount}%
                      </div>
                      <span class="countstrip">{countstrip}</span>
                      <a href="https://www.bookswagon.com/book/it-ends-us-colleen-hoover/9781501110368"></a>
                      <Image
                        src={user.img_url}
                        alt="Picture of the author"
                        width="350"
                        height="300"
                        className="card-img-top"
                      />
                      <div className="card-body position-relative">
                        <a className="quick-view themecolor">Quick View</a>
                        <p className="card-text text-center">
                          <span className="booktitle font-weight-bold">
                            {user.name}
                          </span>
                          <span className="author authortextcolor">
                            {user.author}
                          </span>
                          <span className="actualprice themecolor  font-weight-bold">
                            {(user.discount * user.price) / 100}
                          </span>
                          <span class="initialprice">
                            <del>{user.price}</del>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://18.205.191.245:3000/api/book");
  const data = await res.json();
  return {
    props: {
      books: data,
    },
  };
}
