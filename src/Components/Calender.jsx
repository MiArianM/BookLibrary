/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useMediaQuery } from "react-responsive";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Modal from "@mui/material/Modal";
import dayjs from "dayjs";
import "../Styles/Calendar.css";
import ToReadList from "./ToReadList";
import Button from "@mui/material/Button";
import { useSnackbar } from "notistack";

// eslint-disable-next-line no-unused-vars
const ActionList = React.forwardRef((props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [selectedtime, setSelectedTime] = useState([]);
  const [open, setOpen] = useState(false);
  const [valueTime, setValueTime] = useState(dayjs("2024-5-10T15:30"));
  const handleClose = () => setOpen(false);
  // eslint-disable-next-line react/prop-types
  const onAccept = () => {
    setOpen(true);
    const newSelectedTime = {
      Date: datevalue.toISOString().split("T").shift(),
    };
    setSelectedTime([...selectedtime, newSelectedTime]);
  };
  const okButton = () => {
    if (selectedtime.length > 0) {
      setOpen(false);

      // Get the last object from selectedTime array
      const lastSelectedTime = selectedtime[selectedtime.length - 1];
      // Update the last object with the Time key
      lastSelectedTime.Time = valueTime.$d
        .toString()
        .split(" ")
        .splice(4, 1)
        .toString();
      // Update selectedTime array
      setSelectedTime([...selectedtime.slice(0, -1), lastSelectedTime]);
      console.log(selectedtime);
    }
  };
  const cancelButton = () => {
    setOpen(false);
  };
  const { datevalue, onClear, onCancel, onSetToday } = props;
  const actions = [
    { text: "Accept", method: onAccept },
    { text: "Clear", method: onClear },
    { text: "Cancel", method: onCancel },
    { text: "Today", method: onSetToday },
  ];

  return (
    <>
      <List>
        {actions.map(({ text, method }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={method}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeClock
              value={valueTime}
              onChange={(newValue) => setValueTime(newValue)}
            />
          </LocalizationProvider>
          <button onClick={okButton}>Ok</button>
          <button onClick={cancelButton}>Cancel</button>
        </Box>
      </Modal>
    </>
  );
});
ActionList.displayName = "ActionList";
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
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("I love snacks.");
  };

  const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar("This is a success message!", { variant });
  };
  const [datevalue, setDateValue] = useState(null);
  const renderActionList = () => <ActionList datevalue={datevalue} />;
  const MobileQu = useMediaQuery({
    query: "(max-width: 500px)",
  });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <section id="Calender">
        <hr />
        <>{children}</>
        {MobileQu ? (
          <MobileDatePicker />
        ) : (
          <>
            <StaticDatePicker
              slots={{
                actionBar: renderActionList, // Pass datevalue as a prop
              }}
              value={datevalue}
              onChange={(newDate) => setDateValue(newDate)}
            />
            <React.Fragment>
              <Button onClick={handleClick}>Show snackbar</Button>
              <Button onClick={handleClickVariant("success")}>
                Show success snackbar
              </Button>
            </React.Fragment>
          </>
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
      console.log(bookname);
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
        imgisbn:
          json.docs[json.docs.length - 1].isbn[
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
