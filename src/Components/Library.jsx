/* eslint-disable react/no-unescaped-entities */
import "../Styles/Library.css";
import books from "../Books";
import { useState } from "react";
function Library() {
  const [searchvalue, setSearchValue] = useState("");
  const [finalBooks, setFinalBooks] = useState([...books]);
  const [favlist, setFavList] = useState([]);
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
      setFavList((favlist) => [
        ...favlist,
        books.find((book) => +book.isbn === +event.target.dataset.id),
      ]);
    } else {
      event.target.classList = "fa-regular fa-heart";
      setFavList((favlist) => [
        ...favlist.filter((book) => +book.isbn !== +event.target.dataset.id),
      ]);
    }
    console.log(favlist);
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
        <p style={{ fontFamily: "serief", letterSpacing: "2px" }}>
          -Relax ! LowerCase/UpperCase Is not Important Here xD
        </p>
      </div>
      <div id="libraryAndList">
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
                      <i
                        data-id={Book.isbn}
                        onClick={FavHandler}
                        className="fa-regular fa-heart"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div id="Fav-List">
          <h3>Your Favorite Books</h3>
          <ol>
            {favlist.map((favbook) => (
              <li key={favbook.isbn}>
                <img src={favbook.img} />
                <h2>{favbook.title}</h2>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Library;
