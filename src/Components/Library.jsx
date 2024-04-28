/* eslint-disable react/no-unescaped-entities */
import "../Styles/Library.css";
import books from "../Books";
function Library() {
  return (
    <section id="Library">
      <h2>Mim | Library Book</h2>
      <div id="SearchContainer">
        <label>
          <input type="text" required placeholder="Book Name " />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </label>
      </div>
      <ul>
        {books.map((Book) => (
          <li key={Book.isbn}>
            {" "}
            <div className="containero">
              <div className="card dark">
                <img src={Book.img} alt="..." />
                <div className="card-body">
                  <div className="text-section">
                    <h3 className="card-title">{Book.title}</h3>
                    <p className="card-text">
                      <br />
                      {Book.subtitle}
                    </p>
                    <p>
                      - | It has {Book.pages} Pages , And Published at{" "}
                      {Book.published}
                    </p>
                    <address style={{ marginLeft: "20px" }}>
                      By {Book.author}
                    </address>
                  </div>
                  <strong id="Price">Price : {Book.price}</strong>
                  <div className="cta-section">
                    <a href="#" className="btn btn-light">
                      Preview
                    </a>
                    <a href="#" className="btn btn-light">
                      Borrow
                    </a>
                    <a href="#" className="btn btn-light">
                      Purchase
                    </a>
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Library;
