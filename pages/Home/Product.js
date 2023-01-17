import Image from "next/image";
export default function Product() {
  return (
    <div className="col-sm-20" key={countstrip}>
      <div className="card align-items-center">
        <div className="offer position-absolute">
          {book.discount == undefined ? "0" : book.discount}%
        </div>
        <span class="countstrip">{countstrip}</span>
        <a href="https://www.bookswagon.com/book/it-ends-us-colleen-hoover/9781501110368"></a>
        <Image
          src={book.img_url}
          alt="Picture of the author"
          width="350"
          height="300"
          className="card-img-top"
        />
        <div className="card-body position-relative">
          <a className="quick-view themecolor">Quick View</a>
          <p className="card-text text-center">
            <span className="booktitle font-weight-bold">{book.name}</span>
            <span className="author authortextcolor">{book.author}</span>
            <span className="actualprice themecolor  font-weight-bold">
              {book.discount == undefined
                ? book.price
                : (book.discount * book.price) / 100}
            </span>
            <span class="initialprice">
              <del>{book.price}</del>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
