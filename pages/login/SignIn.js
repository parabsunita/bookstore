import Axios from "axios";
import Image from "next/image";
import config from "@/config/config";
export default function SignIn() {
  const handleLogin = async (event) => {
    event.preventDefault();
    const data = {
      email: document.getElementById("ctl00_phBody_SignIn_txtEmail").value,
      password: document.getElementById("ctl00_phBody_SignIn_txtPassword")
        .value,
    };

    const JSONdata = JSON.stringify(data);
    Axios({
      method: "post",
      url: config.API_URL + "api/auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSONdata,
    }).then((res) => {
      localStorage.setItem("AuthKey", res.data.data.token);
    });
  };
  return (
    <>
      <div
        style={{
          backgroundImage: ` url(https://www.bookswagon.com/images/css/login_bg.jpg)`,
          height: "750px",
        }}
      >
        <div className=" d-block">
          <div id="loginModal" style={{ width: "40%" }}>
            {" "}
            <Image
              className="w-100"
              src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/loginbanner.png"
              alt="Login banner"
              width="498"
              height="108"
            />
            <div className="bg-white pl-5 pr-5 pt-3 pb-3 text-center">
              <div
                id="ctl00_phBody_SignIn_plnLoginPassword"
                className="login-wrapper"
              >
                <h1 className="mb-3">Log in</h1>
                <div className="form-row">
                  <div className="form-group col-sm-12">
                    <input
                      name="ctl00$phBody$SignIn$txtEmail"
                      type="text"
                      id="ctl00_phBody_SignIn_txtEmail"
                      className="w-100"
                      placeholder="Mobile/Email"
                    />

                    <label
                      id="ctl00_phBody_SignIn_lblemailmsg"
                      className="error d-block"
                    ></label>
                  </div>
                  <div className="form-group col-sm-12">
                    <input
                      name="ctl00$phBody$SignIn$txtPassword"
                      type="password"
                      id="ctl00_phBody_SignIn_txtPassword"
                      className="w-100"
                      autocomplete="off"
                      placeholder="Password"
                    />
                    <span
                      id="ctl00_phBody_SignIn_rfvPassword"
                      className="error d-none"
                    >
                      Please Enter Password
                    </span>

                    <label
                      id="ctl00_phBody_SignIn_lblmsg d-none"
                      className="error"
                    ></label>
                  </div>
                  <div className="form-group col-sm-12 text-right">
                    <span className="themecolor font-weight-bold">
                      <a className="forgotpasswordlink themecolor" href="#">
                        Forgot your Password?
                      </a>
                    </span>
                  </div>
                </div>
                <div className="form-row text-center">
                  <div className="form-group col-sm-12">
                    <a
                      onClick={handleLogin}
                      id="ctl00_phBody_SignIn_btnLogin"
                      className="btn btn-block themebackground text-white mb-2"
                      href=""
                    >
                      Login
                    </a>

                    <div className="text-center col-sm-12 mb-2">Or</div>
                    <a
                      id="ctl00_phBody_SignIn_btnRequestOTP"
                      className="btn btn-block border themeborder themecolor requestotp"
                      href="javascript:__doPostBack('ctl00$phBody$SignIn$btnRequestOTP','')"
                    >
                      Request OTP
                    </a>
                  </div>
                </div>
                <div className="form-row text-center mt-3 w-100">
                  <div className="form-group col-sm-12">
                    <a
                      href="#"
                      className="themecolor d-block w-100 mb-3 font-weight-bold signuplink"
                    >
                      New to Bookswagon? Sign up
                    </a>
                    <p className="text-center">
                      By continuing, I agree to the{" "}
                      <a
                        className="themecolor font-weight-bold"
                        href="https://www.bookswagon.com/termsofuse"
                      >
                        Terms of Use
                      </a>{" "}
                      &amp;{" "}
                      <a
                        href="https://www.bookswagon.com/privacypolicy"
                        className="themecolor font-weight-bold"
                      >
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer">
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
                    <a href="https://blog.bookswagon.com">Blog</a>
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
