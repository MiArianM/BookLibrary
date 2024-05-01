import "../Styles/Header.css";
/* eslint-disable react/no-unescaped-entities */
function Header() {
  return (
    <>
      <header>
        <nav className="animate__animated animate__backInDown">
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
          <div
            className="animate__animated animate__flipInX "
            id="FirstHomeinfo"
          >
            <h1>
              Mim | BookStore - Global Library Book is The Place where You Can{" "}
              <span className="focus">
                <div className="focus--mask">
                  <div className="focus--mask-inner">Buy ,Preview , Borrow</div>
                </div>
              </span>
              The Books !
            </h1>
            <button>Explores Demo</button>
          </div>
          <div
            className="animate__animated animate__flipInX "
            id="HomeImageContainer"
          >
            <figure className="animate__animated animate__fadeInLeft ImgCard">
              <div className="HomeImage img1">
                <figcaption>
                  <h2>Library Office Security </h2>
                  <p>
                    <i className="fa-solid fa-shield-halved">
                      Connect With Our Expert Agent !
                    </i>
                  </p>
                </figcaption>
              </div>
            </figure>
            <figure className="animate__animated animate__fadeInRight ImgCard">
              <div className="HomeImage img2">
                <figcaption>
                  <h2>Recollect your past for the future</h2>
                  <p>
                    <i className="fa-solid fa-check-double">Let's Get To it</i>
                  </p>
                </figcaption>
              </div>
            </figure>
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
