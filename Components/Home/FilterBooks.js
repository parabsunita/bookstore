import Image from "next/image";
export default function FilterBooks({ books, onChange }) {
  return (
    <>
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
          <label htmlFor="amount">Price range:</label>
          <input type="text" id="amount" className="themecolor" readOnly="" />
        </p>
        <div
          id="slider-range"
          className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
        >
          <>
            <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
            <span
              tabIndex="0"
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
          <label htmlFor="amount">Discount Range:</label>
          <input
            type="text"
            id="discountval"
            className="themecolor"
            readOnly=""
            style={{ border: "0", fontWeight: "bold", width: "130px" }}
          />
        </p>
      </div>
      <div className="d-block position-relative fitertype mt-4">
        <input type="hidden" id="hdnBinding" value="0" />
        <div className="togglefilter">
          <h3 className="themecolor">Binding</h3>
          <i className="fa fa-caret-down position-absolute"></i>
        </div>
        <ul
          className="list-unstyled"
          aria-labelledby="navbarDropdown"
          style={{ display: "block" }}
        >
          <li className="nav-item position-relative">
            <input type="checkbox" id="paperback" className="mr-2"></input>
            <label htmlFor="paperback"> Paper Back</label>
          </li>
          <li className="nav-item position-relative">
            <input type="checkbox" id="HardCover" className="mr-2"></input>
            <label htmlFor="HardCover"> Hard Cover</label>
          </li>
          <li className="nav-item position-relative">
            <input type="checkbox" id="Others" className="mr-2"></input>
            <label htmlFor="Others"> Others</label>
          </li>
        </ul>
      </div>
      <div className="d-block position-relative fitertype mt-4">
        <input type="hidden" id="hdnLang" value="0" />
        <div className="togglefilter">
          <h3 className="themecolor">Language</h3>
          <i className="fa fa-caret-down position-absolute"></i>
        </div>
        <ul
          className="list-unstyled"
          aria-labelledby="navbarDropdown"
          style={{ display: "block" }}
        >
          <li className="nav-item position-relative">
            <input
              type="checkbox"
              value="English"
              id="chkLanguageEnglish"
              className="mr-2"
              name="chkLanguageEnglish"
            />

            <label htmlFor="chkLanguageEnglish">English</label>
          </li>
          <li className="nav-item position-relative">
            <input
              type="checkbox"
              value="Others"
              id="chkLanguageOthers"
              className="mr-2"
            />
            <label htmlFor="chkLanguageOthers">Others</label>
          </li>
        </ul>
      </div>
    </>
  );
}
