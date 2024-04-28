/* eslint-disable react/no-unescaped-entities */
import Header from "./Components/Header";
import OurServices from "./Components/OurServices";
import "./Styles/Global.css";
function App() {
  return (
    <>
      <Header />
      <main>
        <OurServices />
        <section id="infos1">
          <div>
            <h3>Events Calendar</h3>
            <span>-</span>
            <p>
              A solid, feature-rich calendar and events management suite that’s
              scalable from soup to nuts. Create and showcase events on your
              website with ease.
            </p>
            <a>Discover</a>
          </div>
          <div>
            <img />
          </div>
        </section>
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
