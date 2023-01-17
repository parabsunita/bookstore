import Image from "next/image";
import logo from "../../public/Images/logo-new.png";

export default function Header() {
  return (
    <header>
      <div className="container-fluid desktopheader mobilehide">
        <div className="row">
          <div className="col-sm-1">
            <img
              src="Images/logo-new.png"
              alt="Picture of the author"
              width="75px"
              height="63px"
            />
          </div>
          <div className="col-sm-6  d-flex align-items-center justify-content-center">
            <div className="searchcomponent">
              <input
                placeholder="Search by Title, Author, Publisher or ISBN"
                id="inputbar"
                className="inputbar"
                type="text"
              />
              <span class="search">
                <input
                  type="button"
                  name="btnTopSearch"
                  value=""
                  id="btnTopSearch"
                  className="sprite search-btn"
                >
                  {/* <Image
                      src={Search}
                      alt="search"
                      width="50px"
                      height="00px"
                    /> */}
                </input>
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
  );
}
