import "../Styles/Main.css";
/* eslint-disable react/no-unescaped-entities */
function OurServices() {
  return (
    <section id="OurServices">
      <div className="projects__container container grid">
        <article className="projects__card">
          <div className="projects__image">
            <img
              src="../../public/Pics/Service1.jpg"
              alt="image"
              className="projects__img"
            />

            <a href="#" className="projects__button button">
              <i className="fa-brands fa-golang"></i>
            </a>
          </div>

          <div className="projects__content">
            <h3 className="projects__subtitle">Mim | BookStore</h3>
            <h2 className="projects__title">Read Free Library Books Online</h2>

            <p className="projects__description">
              Millions of books available through Controlled Digital Lending
            </p>
          </div>

          <div className="projects__buttons">
            <a
              href="https://github.com/"
              target="_blank"
              className="projects__link"
            >
              <i className="ri-github-line"></i> More Information
            </a>

            <a
              href="https://dribbble.com/"
              target="_blank"
              className="projects__link"
            >
              <i className="ri-dribbble-line"></i> View The Books
            </a>
          </div>
        </article>
      </div>
      <div className="projects__container container grid">
        <article className="projects__card">
          <div className="projects__image">
            <img
              src="../../public/Pics/Service2.jpg"
              alt="image"
              className="projects__img"
            />

            <a href="#" className="projects__button button">
              <i className="fa-brands fa-golang"></i>
            </a>
          </div>

          <div className="projects__content">
            <h3 className="projects__subtitle">Mim | BookStore</h3>
            <h2 className="projects__title">Set a Yearly Reading Goal</h2>

            <p className="projects__description">
              Learn how to set a yearly reading goal and track what you read
            </p>
          </div>

          <div className="projects__buttons">
            <a
              href="https://github.com/"
              target="_blank"
              className="projects__link"
            >
              <i className="ri-github-line"></i> More Information
            </a>

            <a
              href="https://dribbble.com/"
              target="_blank"
              className="projects__link"
            >
              <i className="ri-dribbble-line"></i> Set The Goal
            </a>
          </div>
        </article>
      </div>
      <div className="projects__container container grid">
        <article className="projects__card">
          <div className="projects__image">
            <img
              src="../../public/Pics/Service3.jpg"
              alt="image"
              className="projects__img"
            />

            <a href="#" className="projects__button button">
              <i className="fa-brands fa-golang"></i>
            </a>
          </div>

          <div className="projects__content">
            <h3 className="projects__subtitle">Mim | BookStore</h3>
            <h2 className="projects__title">
              Keep Track of your Favorite Books
            </h2>

            <p className="projects__description">
              Organize your Books using Lists & the Reading Log
            </p>
          </div>

          <div className="projects__buttons">
            <a
              href="https://github.com/"
              target="_blank"
              className="projects__link"
            >
              <i className="ri-github-line"></i> More Information
            </a>

            <a
              href="https://dribbble.com/"
              target="_blank"
              className="projects__link"
            >
              <i className="ri-dribbble-line"></i> Favorite List
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default OurServices;
