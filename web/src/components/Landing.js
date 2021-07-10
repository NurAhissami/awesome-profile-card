import {Link} from "react-router-dom";
import logo from "../images/logo-awesome-profile-cards.svg";

function Landing() {
  return (
    <main class="main">
      <section class="landing">
        <div class="landing_logo">
          <img
            class="landing_logo--card"
            src={logo} alt="logo"
          />
        </div>
        <div class="landing_info">
          <p class="landing_info--create">Crea tu tarjeta de visita</p>
          <small class="landing_info--better">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </small>
        </div>
        <section class="landing_list">
          <article class="landing_list--article">
            <i
              class="fal fa-object-ungroup landing_list--article--icon"
              aria-hidden="true"
            ></i>

            <p class="landing_list--article--text">Diseña</p>
          </article>
          <article class="landing_list--article">
            <i
              class="fa fa-keyboard landing_list--article--icon"
              aria-hidden="true"
            ></i>
            <p class="landing_list--article--text">Rellena</p>
          </article>
          <article class="landing_list--article">
            <i
              class="fa fa-share-alt landing_list--article--icon"
              aria-hidden="true"
            ></i>
            <p class="landing_list--article--text">Comparte</p>
          </article>
        </section>
        <div class="landing_list--button">
          <Link to="/card">
            <span class="landing_list--button--get--started">COMENZAR</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Landing;