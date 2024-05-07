import { useState } from "react";
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
import {
  usePickerLayout,
  pickersLayoutClasses,
  PickersLayoutRoot,
  PickersLayoutContentWrapper,
} from "@mui/x-date-pickers/PickersLayout";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { useMediaQuery } from "react-responsive";
import "../Styles/Calendar.css";
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
function BookHeader() {
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
      <FontAwesomeIcon icon={faBook} />
      <h3>Pick Your DATE !</h3>
    </Box>
  );
}
function CustomLayout(props) {
  const { toolbar, tabs, content, actionBar } = usePickerLayout(props);

  return (
    <PickersLayoutRoot
      ownerState={props}
      sx={{
        [`.${pickersLayoutClasses.actionBar}`]: {
          gridColumn: 1,
          gridRow: 2,
        },
        [`.${pickersLayoutClasses.toolbar}`]: {
          gridColumn: 2,
          gridRow: 1,
        },
      }}
    >
      <BookHeader />
      {toolbar}
      {actionBar}
      <PickersLayoutContentWrapper
        className={pickersLayoutClasses.contentWrapper}
      >
        {tabs}
        {content}
      </PickersLayoutContentWrapper>
    </PickersLayoutRoot>
  );
}
function Calender() {
  const MobileQu = useMediaQuery({
    query: "(max-width: 500px)",
  });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <section id="Calender">
        <hr />

        {MobileQu ? (
          <MobileDatePicker />
        ) : (
          <StaticDatePicker
            slots={{
              layout: CustomLayout,
              actionBar: ActionList,
            }}
          />
        )}

        <hr />
      </section>
    </LocalizationProvider>
  );
}

export default Calender;
