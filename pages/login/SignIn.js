import Axios from "axios";
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
    <div id="ctl00_phBody_SignIn_plnLoginPassword" className="login-wrapper">
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
          <span id="ctl00_phBody_SignIn_rfvPassword" className="error d-none">
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
              target="_blank"
            >
              Terms of Use
            </a>{" "}
            &amp;{" "}
            <a
              href="https://www.bookswagon.com/privacypolicy"
              target="_blank"
              className="themecolor font-weight-bold"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
