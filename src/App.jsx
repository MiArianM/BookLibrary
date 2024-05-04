/* eslint-disable react/no-unescaped-entities */
import Calender from "./Components/Calender";
import Header from "./Components/Header";
import Library from "./Components/Library";
import OurServices from "./Components/OurServices";
import "./Styles/Global.css";
import "./Styles/FadeAnimations.css";
import "./Styles/Responsive.css";
function App() {
  return (
    <>
      <Header />
      <main>
        <OurServices />
        <Calender />
        <Library />
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
