/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import "../Styles/ToReadList.css";

function ToReadList({ bookdata }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (bookdata) {
      setBooks((prevBooks) => [...prevBooks, bookdata]);
      console.log(bookdata);
    }
  }, [bookdata]);
  return (
    <ul id="BooksList">
      {books.map((book) => (
        <li key={v4()}>
          <div id="imgo">
            <img
              src={`https://covers.openlibrary.org/b/isbn/${book.imgisbn}-L.jpg`}
            />{" "}
            <div id="InfoData">
              <h2>{book.Name}</h2>
              <address>By {book.Author}</address>
              <p>{book.intro}</p>
              <span>
                Language : {book.language.join(",")} <br />
              </span>
              <span style={{ borderBottom: "none" }}>Pages : {book.Pages}</span>
            </div>
          </div>

          <div id="someOtherInfos">
            <div className="Boxo">
              <h3>
                <fieldset>
                  <legend>Published</legend>
                  in :{" "}
                  {
                    book.publish.PublishYear[
                      book.publish.PublishYear.length - 1
                    ]
                  }{" "}
                  <br />
                  At : {book.publish.PublishPlace.join(",")}
                  <br />
                  BY : {book.publish.Publishers.join(",")}
                </fieldset>
              </h3>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ToReadList;
