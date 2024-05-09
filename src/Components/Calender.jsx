/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useMediaQuery } from "react-responsive";
import "../Styles/Calendar.css";
import { useEffect, useState } from "react";
import ToReadList from "./ToReadList";
function ActionList(props) {
  // eslint-disable-next-line react/prop-types
  const { onAccept, onClear, onCancel, onSetToday } = props;
  const actions = [
    { text: "Accept", method: onAccept },
    { text: "Clear", method: onClear },
    { text: "Cancel", method: onCancel },
    { text: "Today", method: onSetToday },
  ];

  return (
    <List>
      {actions.map(({ text, method }) => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={method}>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
function BookHeader({ onBookChase }) {
  const [inputvalue, setInputValue] = useState("");
  const handleBookChasing = () => {
    onBookChase(inputvalue);
    setInputValue("");
  };
  return (
    <Box
      sx={{
        // Place the element in the grid layout
        gridColumn: 1,
        gridRow: 1,
        // Center the icon
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesomeIcon icon={faBook} onClick={handleBookChasing} />
      <input
        type="text"
        placeholder="👈🏻 Which Book You want To Read ?"
        value={inputvalue}
        onChange={(event) => setInputValue(event.target.value)}
      />
    </Box>
  );
}
function Calender({ children }) {
  const MobileQu = useMediaQuery({
    query: "(max-width: 500px)",
  });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <section id="Calender">
        <hr />
        {children}
        {MobileQu ? (
          <MobileDatePicker />
        ) : (
          <StaticDatePicker
            slots={{
              actionBar: ActionList,
            }}
          />
        )}
      </section>
    </LocalizationProvider>
  );
}
function App() {
  const [book, setBook] = useState("");
  const [databook, setDataBook] = useState("");
  const handleBookChase = (inputValue) => {
    setBook(inputValue);
  };
  const getting = async () => {
    try {
      const bookname = book.split(" ").join("+");
      const res = await fetch(
        `https://openlibrary.org/search.json?q=${bookname}`
      );
      const json = await res.json();
      console.log(json);
      const Book = {
        Name: json.q,
        Author: json.docs[json.docs.length - 1].author_name[0],
        contributor: json.docs[json.docs.length - 1].contributor,
        BorrowOrNot: json.docs[json.docs.length - 1].ebook_access,
        publish: {
          PublishYear: json.docs[json.docs.length - 1].publish_date,
          PublishPlace: json.docs[json.docs.length - 1].publish_place,
          Publishers: json.docs[json.docs.length - 1].publisher,
        },
        Subjects: json.docs[json.docs.length - 1].subject,
        intro: json.docs[json.docs.length - 1].first_sentence,
        isbn: json.docs[json.docs.length - 1]._version_,
        language: json.docs[json.docs.length - 1].language,
        Pages: json.docs[json.docs.length - 1].number_of_pages_median,
        imgisbn: json.docs[json.docs.length - 1].isbn[
          json.docs[json.docs.length - 1].isbn.length - 2
        ],
      };
      setDataBook(Book);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    {
      book ? getting() : console.log("Nothing Here !");
    }
  }, [book]);
  return (
    <>
      <Calender>
        <BookHeader onBookChase={handleBookChase} />
      </Calender>
      <ToReadList bookdata={databook} />
    </>
  );
}
export default App;
