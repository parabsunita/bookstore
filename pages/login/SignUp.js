import Axios from "axios";
import config from "@/config/config";
import Image from "next/image";
export default function SignUp() {
  const SignUP = async (event) => {
    event.preventDefault();
    const data = {
      firstName: document.getElementById("ctl00_phBody_SignUp_txtFirstName")
        .value,
      lastName: document.getElementById("ctl00_phBody_SignUp_txtLastName")
        .value,
      email: document.getElementById("ctl00_phBody_SignUp_txtEmail").value,
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
      alert(res.data.message);
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
              alt="login-banner"
            />
            <div className="bg-white pl-5 pr-5 pt-3 pb-3 text-center">
              <div className="signup-wrapper">
                <h3 style={{ fontSize: "20px" }} className="mb-3">
                  Sign up
                </h3>
                <div>
                  <div className="form-row">
                    <div className="form-group col-sm-12">
                      <input
                        name="ctl00$phBody$SignUp$FirsttxtName"
                        type="text"
                        id="ctl00_phBody_SignUp_txtFirstName"
                        className="w-100"
                        placeholder=" First Name"
                      />
                    </div>
                    <div className="form-group col-sm-12">
                      <input
                        name="ctl00$phBody$SignUp$LasttxtName"
                        type="text"
                        id="ctl00_phBody_SignUp_txtLastName"
                        className="w-100"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="form-group col-sm-12">
                      <input
                        name="ctl00$phBody$SignUp$txtEmail"
                        type="text"
                        maxlength="15"
                        id="ctl00_phBody_SignUp_txtEmail"
                        className="w-100 "
                        placeholder="Enter Email Address"
                      />

                      <br />
                    </div>
                    <div className="form-group col-sm-12">
                      <input
                        name="ctl00$phBody$SignUp$txtpassword"
                        type="text"
                        maxlength=""
                        id="ctl00_phBody_SignIn_txtPassword"
                        className="w-100 "
                        placeholder="Enter Password"
                      />

                      <br />
                    </div>
                  </div>

                  <div
                    id="ctl00_phBody_SignUp_plnVerify"
                    className="form-row d-none otpslide"
                  >
                    <input
                      type="hidden"
                      name="ctl00$phBody$SignUp$hdnOTPExpire"
                      id="ctl00_phBody_SignUp_hdnOTPExpire"
                    />
                    <div className="form-group col-9 text-left">
                      <span style={{ fontSize: "13px" }}>
                        OTP sent to Mobile
                      </span>
                    </div>
                    <div className="form-group col-3 text-right ">
                      <a
                        id="ctl00_phBody_SignUp_lnkResendLink"
                        className="themecolor font-weight-bold"
                        href="javascript:__doPostBack('ctl00$phBody$SignUp$lnkResendLink','')"
                      >
                        Resend
                      </a>
                    </div>
                    <div className="form-group col-sm-12">
                      <input
                        name="ctl00$phBody$SignUp$txtOTP"
                        type="text"
                        id="ctl00_phBody_SignUp_txtOTP"
                        className="w-100"
                        placeholder="Enter OTP"
                      />
                      <input
                        type="hidden"
                        name="ctl00$phBody$SignUp$hdnSessionId"
                        id="ctl00_phBody_SignUp_hdnSessionId"
                      />
                      <span
                        id="ctl00_phBody_SignUp_rfvOTP"
                        className="error d-none"
                      >
                        Please Enter OTP
                      </span>
                      <span
                        id="ctl00_phBody_SignUp_lblMobileMsg"
                        className="error"
                      ></span>
                    </div>
                    <div className="form-group col-sm-12">
                      <input
                        name="ctl00$phBody$SignUp$txtPassword"
                        type="password"
                        id="ctl00_phBody_SignUp_txtPassword"
                        className="w-100"
                        placeholder="Password"
                      />
                      <input
                        type="hidden"
                        name="ctl00$phBody$SignUp$hdnPassword"
                        id="ctl00_phBody_SignUp_hdnPassword"
                      />
                    </div>
                    <div className="form-group col-sm-12">
                      <input
                        name="ctl00$phBody$SignUp$txtConfirmPwd"
                        type="password"
                        id="ctl00_phBody_SignUp_txtConfirmPwd"
                        className="w-100"
                        placeholder="Confirm-Password"
                      />
                    </div>
                  </div>

                  <div className="form-row text-center">
                    <div className="form-group col-sm-12">
                      <input
                        id="ctl00_phBody_SignUp_chkNewsletter"
                        type="checkbox"
                        name="ctl00$phBody$SignUp$chkNewsletter"
                        checked="checked"
                      />
                      <label for="ctl00_phBody_SignUp_chkNewsletter">
                        Subscribe to Bookswagon Newsletter
                      </label>
                      <input
                        type="submit"
                        name="ctl00$phBody$SignUp$btnContinue"
                        value="Continue"
                        id="ctl00_phBody_SignUp_btnContinue"
                        className="btn btn-block border themeborder themecolor mb-2 signupcontinue mt-3"
                        onClick={SignUP}
                      />
                      <a
                        id="ctl00_phBody_SignUp_btnSubmit"
                        className="btn btn-block border themeborder themecolor mb-2 signupsubmit d-none"
                      >
                        Sign up
                      </a>
                      <a className="btn btn-block  themebackground text-white loginlink">
                        Existing User? Log in
                      </a>
                    </div>
                  </div>

                  <div className="form-row text-center mt-3 w-100">
                    <div className="form-group col-sm-12">
                      <p
                        className="
                      text-center"
                      >
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
      </div>
      <div className="container footer pt-5">
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
            <ul className="list-unstyled icons list-inline text-center">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/bookswagoneducationalfacts/">
                  <Image
                    src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/facebook.png"
                    alt="Facebook"
                    width="32px"
                    height="32px"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/bookswagon_in">
                  <Image
                    src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/twitter.png"
                    alt="Twitter"
                    width="32px"
                    height="32px"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/company/bookswagon/">
                  <Image
                    src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/linkedin.png"
                    alt="Linkedin"
                    width="32px"
                    height="32px"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.pinterest.co.uk/bookswagon/">
                  <Image
                    src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/pinterest.png"
                    alt="Pinterest"
                    width="32px"
                    height="32px"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.youtube.com/channel/UCrJ4T5_wqMb_eZWtC-staVQ">
                  <Image
                    src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/youtube.png"
                    alt="Youtube"
                    width="32px"
                    height="32px"
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/bookswagon_official/">
                  <Image
                    src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/instagram.png"
                    alt="Instagram"
                    width="32px"
                    height="32px"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12  text-center text-light copyrighttext mb-3">
            Copyright © 2023 . Bookswagon.com.{" "}
            <span className="allrightreserve">All Rights Reserved</span>
          </div>
        </div>
      </div>
    </>
  );
}
