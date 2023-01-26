import SignIn from "./SignIn";

export default function Login() {
  return (
    <>
      <div
        style={{
          backgroundImage: ` url(https://www.bookswagon.com/images/css/login_bg.jpg)`,
          height: "750px",
        }}
      >
        <div className=" d-block">
          <div id="loginModal">
            {" "}
            <img
              className="w-100"
              //   login-src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/loginbanner.png"
              src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/loginbanner.png"
            />
            <div className="bg-white pl-5 pr-5 pt-3 pb-3 text-center">
              <SignIn></SignIn>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-sm-12 pl-0">
            <div className="row">
              <div className="col-sm-3">
                <h4>Company</h4>
                <ul className="list-unstyled text-center">
                  <li className="list-inline-item">
                    <a href="https://www.bookswagon.com/aboutus">About Us</a>
                  </li>
                  <li>
                    <a href="https://www.bookswagon.com/career">Career</a>
                  </li>
                  <li>
                    <a href="https://blog.bookswagon.com" target="_blank">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bookswagon.com/contactus">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h4>Policies</h4>
                <ul className="list-unstyled text-center">
                  <li>
                    <a href="https://www.bookswagon.com/privacypolicy">
                      Privacy Policies
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bookswagon.com/termsofuse">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bookswagon.com/safesecurehelp">
                      Secure Shopping
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bookswagon.com/copyright">
                      Copyright Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h4>Help</h4>
                <ul className="list-unstyled text-center">
                  <li>
                    <a href="https://www.bookswagon.com/paymenthelp">Payment</a>
                  </li>
                  <li>
                    <a href="https://www.bookswagon.com/termsofuse?#shipping">
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bookswagon.com/returnhelp">Return</a>
                  </li>
                  <li>
                    <a href="https://www.bookswagon.com/faq">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3">
                <h4>Misc</h4>
                <ul className="list-unstyled text-center">
                  <li>
                    <a href="https://www.bookswagon.com/affiliate/login">
                      Affiliate
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bookswagon.com/sitemap">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
