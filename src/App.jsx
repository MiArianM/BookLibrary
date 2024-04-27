import "./Styles/WebStyles.css";
function App() {
  return (
    <>
      <header>
        <nav>
          <img src="../NavLogo.png" width="100px" />
          <ul>
            <li>
              <a href="#">Demos</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <button>Purchase Now</button>
          </ul>
        </nav>
        <section id="HomeHeader">
          <div id="FirstHomeinfo">
            <h1>
              Mim | BookStore - Global Library Book Which You Can{" "}
              <span className="focus">
                <div className="focus--mask">
                  <div className="focus--mask-inner">
                    Buy ,Preview , Borrow !
                  </div>
                </div>
              </span>
            </h1>
            <button>Explores Demo</button>
          </div>
          <div id="HomeImageContainer">
            <div className="HomeImage img1">
              <h2>Library Office Security </h2>
            </div>
            <div className="HomeImage img2">
              <h2>Recollect your past for the future</h2>
            </div>
          </div>
        </section>
      </header>
      <main>
        <section id="OurExperts"></section>
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
