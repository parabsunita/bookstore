import { useEffect, useState } from "react";
import Image from "next/image";
import Axios from "axios";
import config from "@/config/config";
export default function Order() {
  const [orderQty, setOrderQty] = useState(0);
  const [order, setOrder] = useState([]);
  const order1 = [1, 1, 4, 5];
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
      debugger;
      setOrder(res.data.data.orders);
      console.log(Order);
    });
  }
  useEffect(() => {
    getData();
    console.log(Order);
  }, []);
  return (
    <div className="container mt-2 pt-3 pb-1 product-detailwrapper">
      <div className="row">
        <div className="col-md-12 col-lg-12 mb-2">
          {order.map(function (order, idx) {
            return (
              <div className="row mt-2 py-4 border ipadnopad" key={idx}>
                <div className="col-md-4 col-lg-3">
                  <div className="position-relative border text-center">
                    <Image
                      src={order.bookDetails[0].img_url}
                      classNameName="card-img-top bklazy d-inline-block"
                      alt="book"
                      width="200"
                      height="100"
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
                    {order.bookDetails[0].name}
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
                        ₹ {order.bookDetails[0].price}
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
                        <input
                          type="button"
                          className="btn themebackground text-white"
                          value="Pay Now"
                        />
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
