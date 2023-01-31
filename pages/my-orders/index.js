import { useEffect, useState } from "react";
import Image from "next/image";
import Axios from "axios";
import config from "@/config/config";
export default function Order() {
  const [orderQty, setOrderQty] = useState(0);
  const [order, setOrder] = useState(0);
  function DecreseQty() {
    if (orderQty != 0) setOrderQty(orderQty - 1);
  }
  function IncreaseQty() {
    setOrderQty(orderQty + 1);
  }
  function getData() {
    debugger;
    Axios({
      method: "get",
      url: config.API_URL + "api/order/myorders",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("AuthKey"),
      },
    }).then((res) => {
      setOrder(res.data.data.orders);
      console.log(Order);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container mt-2 pt-3 pb-1 product-detailwrapper">
      <div className="row">
        <div className="col-md-12 col-lg-12 mb-2">
          <div className="row mt-2 ipadnopad">
            <div className="col-md-4 col-lg-3">
              <div className="position-relative border text-center">
                <Image
                  src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/662/9788172345662.jpg"
                  classNameName="card-img-top bklazy d-inline-block"
                  alt="book"
                  width="227"
                  height="340"
                />
                <div>
                  <button value="" onClick={DecreseQty}>
                    -
                  </button>
                  <label className="m-3">{orderQty}</label>
                  <button value="" onClick={IncreaseQty}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-9 productbrief">
              <span
                id="ctl00_phBody_ProductDetail_lblTitle"
                className="themecolor headingtext"
              >
                The Power Of Your Subconscious Mind
              </span>
              <input
                type="hidden"
                name="ctl00$phBody$ProductDetail$hdnISBN"
                id="ctl00_phBody_ProductDetail_hdnISBN"
                // value={detailbookapi.isbn_13}
              />
              <label id="ctl00_phBody_ProductDetail_lblBinding">
                {/* ({detailbookapi.binding}) */}
              </label>

              <br />
              <div className=" d-inline authordetailtext">
                <label id="ctl00_phBody_ProductDetail_lblAuthor1">
                  By:{" "}
                  <a href="https://www.bookswagon.com/author/colleen-hoover">
                    {" "}
                  </a>
                </label>
                <label id="ctl00_phBody_ProductDetail_lblAuthorType1">
                  Dr Joseph Murphy (Author)
                </label>
              </div>

              <div className="reviews">
                <div className="clearfloat"></div>
                <span className="actualprice themecolor font-weight-bold">
                  <label id="ctl00_phBody_ProductDetail_lblourPrice">
                    ₹ 400
                  </label>
                </span>
                <br />

                <div className="available mt-2 mb-2">
                  <p>
                    <label id="ctl00_phBody_ProductDetail_lblBusiness">
                      Product will deliver on <b>4-6 Business Days</b>
                    </label>
                    <br />
                    <label id="ctl00_phBody_ProductDetail_lishipping">
                      <br />
                      Delivery charges will be 40
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
                      <input
                        type="button"
                        className="btn themebackground text-white"
                        value="Pay Now"
                      />
                    </a>
                  </div>

                  <input
                    type="button"
                    className="btn  border themeborder themecolor ml-1"
                    value="Cancel"
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
