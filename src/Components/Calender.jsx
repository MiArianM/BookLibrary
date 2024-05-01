import { useState } from "react";
import "../Styles/Calendar.css";
function Calender() {
  const [isshow, setIsShow] = useState(true);
  const Toggle = () => {
    setIsShow(!isshow);
  };
  return (
    <section id="Calender">
      <hr />
      <div
        className={`${
          isshow
            ? " animate__animated animate__rollIn"
            : " animate__animated animate__rollOut"
        }`}
      >
        <h3>This Feauture Is Not Available Right now ! 😕</h3>
        <span>-</span>
        <p>
          📑The function that will be placed here will be Like This :<br />{" "}
          After you choose the Date in this calendar, the books whose
          information is taken from the API, their publication time will be
          matched with the time you chose and then it will be shown to you.{" "}
          <br />
          -UseEffect | Needed !
          <br />
          <span>
            Therefore, until learning the desired topic, this feature will be
            inactive.{" "}
          </span>
        </p>
      </div>
      <button onClick={Toggle}>{isshow ? "Hide" : "Show"}</button>
      <hr />
    </section>
  );
}

export default Calender;
