/* eslint-disable react/no-unescaped-entities */
import "../Styles/Library.css";
import books from "../Books";
import { useState } from "react";
import { v4 } from "uuid";
function Library() {
  const [searchvalue, setSearchValue] = useState("");
  const [finalBooks, setFinalBooks] = useState([...books]);
  const [favlist, setFavList] = useState([]);
  const [addlist, setAddList] = useState([]);
  const [finalprice, setFinalPrice] = useState(0);
  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };
  const PressingButton = (event) => {
    const BookId = event.target.parentElement.dataset.id;
    const BookIndex = addlist.findIndex((item) => +item.Book.isbn === +BookId);
    switch (event.target.innerText) {
      case "Purchase":
        if (BookIndex !== -1) {
          setAddList((prevlist) => {
            const UpdatedList = [...prevlist];
            UpdatedList[BookIndex].Quantity += 1;
            return UpdatedList;
          });
        } else {
          const newBook = books.find((book) => +book.isbn === +BookId);
          setAddList((prevlist) => [
            ...prevlist,
            { Book: newBook, Quantity: 1 },
          ]);
        }
        setFinalPrice((prevPrice) =>
          Math.max(
            prevPrice +
              parseFloat(
                event.target.parentElement.dataset.price.split(" ").shift()
              ),
            0
          )
        );
        break;
      case "+":
        setAddList((prevAddList) => {
          const updatedAddList = [...prevAddList];
          updatedAddList[BookIndex].Quantity += 1;
          return updatedAddList;
        });

        setFinalPrice((prevPrice) =>
          Math.max(
            prevPrice +
              parseFloat(
                event.target.parentElement.dataset.price.split(" ").shift()
              ),
            0
          )
        );
        break;
      case "-":
        setAddList((prevAddList) => {
          const updatedAddList = [...prevAddList];
          updatedAddList[BookIndex].Quantity -= 1;
          return updatedAddList;
        });
        setFinalPrice((prevPrice) =>
          Math.max(
            prevPrice -
              parseFloat(
                event.target.parentElement.dataset.price.split(" ").shift()
              ),
            0
          )
        );
        break;
      case "":
        if (event.target.classList == "fa-regular fa-heart") {
          event.target.classList = "fa-solid fa-heart";
          setFavList((favlist) => [
            ...favlist,
            books.find(
              (book) => +book.isbn === +event.target.parentElement.dataset.id
            ),
          ]);
        } else {
          event.target.classList = "fa-regular fa-heart";
          setFavList((favlist) => [
            ...favlist.filter(
              (book) => +book.isbn !== +event.target.parentElement.dataset.id
            ),
          ]);
        }
        break;
      default:
        console.log("HH");
        break;
    }
    setAddList((prevAddList) =>
      prevAddList.filter((item) => item.Quantity >= 0)
    );
  };

  const ClickHandler = () => {
    setFinalBooks(
      books.filter((book) =>
        book.title.toLowerCase().includes(searchvalue.toLowerCase())
      )
    );
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
                    <div
                      data-id={Book.isbn}
                      className="cta-section"
                      data-price={Book.price}
                    >
                      <a href="#Cart-Section" className="btn btn-light">
                        Preview
                      </a>
                      <a href="#Cart-Section" className="btn btn-light">
                        Borrow
                      </a>
                      <a
                        onClick={PressingButton}
                        href="#Cart-Section"
                        className="btn btn-light"
                      >
                        Purchase
                      </a>
                      <i
                        onClick={PressingButton}
                        className={
                          favlist.includes(Book)
                            ? "fa-solid fa-heart"
                            : "fa-regular fa-heart"
                        }
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div id="cart-favSection">
          <div id="Cart-Section">
            <h3>Your Add Cart</h3>
            <ol>
              {addlist.map((product) => (
                <li id="cart" key={v4()}>
                  <div>
                    {" "}
                    <img src={product.Book.img} />
                  </div>
                  <div
                    data-price={product.Book.price}
                    data-id={product.Book.isbn}
                  >
                    <h2>{product.Book.title}</h2>
                    <h4>{product.Book.price}</h4>
                    <button onClick={PressingButton}>-</button>
                    <span>{product.Quantity}</span>
                    <button onClick={PressingButton}>+</button>
                  </div>
                </li>
              ))}
            </ol>
            <strong>Total Price : {finalprice} $</strong>
          </div>
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
      </div>
      <strong>
        This Library is not Completed Yet ! Cause Of Missing knowledges Of
        React.js <br />
        I've Created The Add-Cart Logic but , The Quantity section of each item
        has still bug adn couldn't debugg it unfortunately !
        <br />
        Or The Preview Section is not completed not Yet so , This Library will
        Update as soon as I learn More xD
      </strong>
    </section>
  );
}

export default Library;
