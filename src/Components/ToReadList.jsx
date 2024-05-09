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
            />
          </div>
          <div id="InfoData">
            <h2>{book.Name}</h2>
            <address>By {book.Author}</address>
            <p>{book.intro}</p>
          </div>
          <div id="someOtherInfos">
            <div>
              <h3>
                Published{" "}
                {book.publish.PublishYear[book.publish.PublishYear.length - 1]}{" "}
                At {book.publish.PublishPlace.join(",")}
              </h3>
              By :<h5>{book.publish.Publishers.join(",")}</h5>
              Language : {book.language} <br />
              Pages : {book.Pages}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ToReadList;
