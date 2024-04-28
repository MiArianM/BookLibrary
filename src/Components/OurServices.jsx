import "../Styles/OurServices.css";
import services from "../Services";
/* eslint-disable react/no-unescaped-entities */

function OurServices() {
  return (
    <section id="OurServices">
      {" "}
      <div id="CarouselServices">
        {services.map((service, index) => (
          <div key={index} className="projects__container container grid">
            <article className="projects__card">
              <div className="projects__image">
                <img src={service.img} className="projects__img" />

                <a href="#" className="projects__button button">
                  <i className="fa-brands fa-golang"></i>
                </a>
              </div>

              <div className="projects__content">
                <h3 className="projects__subtitle">Mim | BookStore</h3>
                <h2 className="projects__title">{service.title}</h2>

                <p className="projects__description">{service.description}</p>
              </div>

              <div className="projects__buttons">
                <a
                  href="https://github.com/"
                  target="_blank"
                  className="projects__link"
                >
                  <i className="ri-github-line"></i> {service.leftWork}
                </a>

                <a
                  href="https://dribbble.com/"
                  target="_blank"
                  className="projects__link"
                >
                  <i className="ri-dribbble-line"></i> {service.rightWork}
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
