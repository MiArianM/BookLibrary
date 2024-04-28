/* eslint-disable react/no-unescaped-entities */
import "../Styles/Library.css";
import books from "../Books";
import { useState } from "react";
function Library() {
  const [searchvalue, setSearchValue] = useState("");
  const [finalBooks, setFinalBooks] = useState([...books]);
  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };
  const ClickHandler = () => {
    setFinalBooks(
      books.filter((book) =>
        book.title.toLowerCase().includes(searchvalue.toLowerCase())
      )
    );
  };
  const FavHandler = (event) => {
    if (event.target.classList == "fa-regular fa-heart") {
      event.target.classList = "fa-solid fa-heart";
    } else {
      event.target.classList = "fa-regular fa-heart";
    }
  };
  return (
    <section id="Library">
      <h2>Mim | Library Book</h2>
      <div id="SearchContainer">
        <label>
          <input
            onChange={searchHandler}
            value={searchvalue}
            type="text"
            required
            placeholder="Book Name "
          />
          <button onClick={ClickHandler}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </label>
          <p style={{fontFamily:"serief",letterSpacing:"2px"}}>-Relax ! LowerCase/UpperCase Is not Important Here xD</p>
      </div>
      <ul>
        {finalBooks.map((Book) => (
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
                    <i onClick={FavHandler} className="fa-regular fa-heart"></i>
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
