/* eslint-disable react/no-unescaped-entities */
import Calender from "./Components/Calender";
import Header from "./Components/Header";
import OurServices from "./Components/OurServices";
import "./Styles/Global.css";
function App() {
  return (
    <>
      <Header />
      <main>
        <OurServices />
        <Calender />
        <section id="infos2">
          <div></div>
          <div>
            <h3>Online Donations</h3>
            <span>-</span>
            <p>
              Now accepting donations on your WordPress website is easy! The
              theme has the Give plugin integrated, which provides you with a
              pain-free and flexible way of accepting donations, managing
              crowdfunding campaigns, setting donation goals, and much more.
            </p>
            <a>Discover</a>
          </div>
        </section>
        <section id="Books"></section>
        <section id="Genres"></section>
        <section id="BuyBook"></section>
        <section id="Contact"></section>
        <section id="About Us"></section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
