import Axios from "axios";
import config from "@/config/config";
import { useEffect, useState } from "react";
export default function BookDeatail({ bookdetail }) {
  const [auth, setAuth] = useState();
  const ratings = [1, 2, 3, 4, 5];
  const detailbookapi = bookdetail[0];
  useEffect(() => {
    if (typeof localStorage.getItem("AuthKey") === null) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  });
  return (
    <div className="container mt-2 pt-3 pb-1 product-detailwrapper">
      <div className="row">
        <div className="col-md-12 col-lg-12 mb-2">
          <div className="row mt-2 ipadnopad">
            <div className="col-md-4 col-lg-3">
              <div classNameName="position-relative border">
                <div
                  id="ctl00_phBody_ProductDetail_disDiscount"
                  className="offer position-absolute"
                >
                  {detailbookapi.discount}
                </div>
                <img
                  src={detailbookapi.img_url}
                  alt={detailbookapi.name}
                  classNameName="card-img-top bklazy d-inline-block"
                  title={detailbookapi.name}
                />
              </div>
            </div>
            <div className="col-md-8 col-lg-9 productbrief">
              <span
                id="ctl00_phBody_ProductDetail_lblTitle"
                className="themecolor headingtext"
              >
                {detailbookapi.name}
              </span>
              <input
                type="hidden"
                name="ctl00$phBody$ProductDetail$hdnISBN"
                id="ctl00_phBody_ProductDetail_hdnISBN"
                value={detailbookapi.isbn_13}
              />
              <label id="ctl00_phBody_ProductDetail_lblBinding">
                ({detailbookapi.binding})
              </label>
              <label id="ctl00_phBody_ProductDetail_lblRelease">
                {" "}
                | Released: {detailbookapi.released_date}
              </label>
              <br />
              <div className=" d-inline authordetailtext">
                <label id="ctl00_phBody_ProductDetail_lblAuthor1">
                  By:{" "}
                  <a href="https://www.bookswagon.com/author/colleen-hoover">
                    {detailbookapi.author}{" "}
                  </a>
                </label>
                <label id="ctl00_phBody_ProductDetail_lblAuthorType1">
                  (Author)
                </label>

                <label id="ctl00_phBody_ProductDetail_lblPublisherImprint">
                  {" "}
                  | Publisher Imprint: {detailbookapi.publisher}
                </label>
              </div>
              <div id="ctl00_phBody_ProductDetail_AvgProductRating_plnRating  d-inline">
                <ul className="list-inline">
                  {ratings.map((index) => (
                    <li className="list-inline-item">
                      <img
                        src="https://www.bookswagon.com/images/svg/graystar.svg"
                        id="ctl00_phBody_ProductDetail_AvgProductRating_star1"
                        alt="Gray Star"
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="reviews">
                <div className="post">
                  <label id="ctl00_phBody_ProductDetail_lblTotalReview d-none"></label>
                  |{" "}
                  <a href="#" id="reviewwritebtn">
                    Write a Review
                  </a>
                </div>
                <div className="clearfloat"></div>
                <span className="actualprice themecolor font-weight-bold">
                  <label id="ctl00_phBody_ProductDetail_lblourPrice">
                    ₹{" "}
                    {detailbookapi.discount == undefined
                      ? detailbookapi.price
                      : (detailbookapi.discount * detailbookapi.price) / 100}
                  </label>
                </span>
                <br />
                <span class="maxprice">
                  <del>
                    <label id="ctl00_phBody_ProductDetail_lblListPrice">
                      {detailbookapi.price}
                    </label>
                  </del>
                </span>
                <br />
                <div className="available mt-2 mb-2">
                  <span
                    id="ctl00_phBody_ProductDetail_lblAvailable"
                    className="available  text-success"
                  >
                    Available
                  </span>
                  <p>
                    <label id="ctl00_phBody_ProductDetail_lblBusiness">
                      Ships within <b>4-6 Business Days</b>
                    </label>
                    <br />
                    <label id="ctl00_phBody_ProductDetail_lishipping">
                      <br />
                      ₹39 shipping in India per item and low cost Worldwide.
                    </label>
                  </p>
                </div>
                <div id="ctl00_phBody_ProductDetail_divaction">
                  <div
                    id="ctl00_phBody_ProductDetail_divAddtoCart"
                    style={{ width: "250px", maxWidth: "48%" }}
                  >
                    <a
                      class="iframe cboxElement"
                      href="https://www.bookswagon.com/shoppingcart.aspx?pid=16788563&amp;vid=98&amp;ptype=1"
                      rel="nofollow"
                    >
                      {auth ? (
                        <input
                          type="button"
                          className="btn themebackground text-white"
                          value="Buy Now"
                        />
                      ) : (
                        <input
                          type="button"
                          className="btn themebackground text-white"
                          value="Sign In"
                        />
                      )}
                    </a>
                  </div>

                  <input
                    type="button"
                    className="btn  border themeborder themecolor ml-1"
                    value="Add to Wishlist"
                    onclick="AddToWishlist('16788563')"
                    style={{ width: "250px", maxWidth: "48%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  try {
    const filterbook1 = await Axios({
      method: "get",
      url: config.API_URL + `api/book/detail/${context.params.isbn13}`,
      // timeout: config.TIMEOUT, // Wait for 5 seconds
      headers: {
        "Content-Type": "application/json",
      },
    });
    const bookdetail = filterbook1.data.data.book;

    return {
      props: {
        bookdetail: bookdetail,
      },
    };
  } catch (error) {
    console.log("ghjhj");
    return {
      props: {
        bookdetail: [],
      },
    };
  }
};
