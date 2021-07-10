import Profile from './Profile';
function Card({
  photo,
  name,
  job,
  email,
  phone,
  linkedin,
  github,
  palette,
  handleOnClickReset,
}) {
  return (
    <div className="main_card--preview">
      <section className="card_background">
        <div className="card_button_container">
          <button
            onClick={handleOnClickReset}
            alt="reset"
            className="card_button js-reset-button"
            title="reset-button"
          >
            <i className="far fa-trash-alt"></i>Reset
          </button>
        </div>
        <section className={`card js-card js-color-${palette}`}>
          <section className="card_info">
            <h2 className="card_info--name js-previewname">
              {name === '' ? 'Nombre y Apellido' : name}
            </h2>
            <h3 className="card_info--job js-previewjob">
              {job === '' ? 'Front-end developer' : job}
            </h3>
          </section>
          <section className="card_photo js__profile-image">
            <Profile avatar={photo} />
          </section>

          <ul className="card_media">
            <li>
              <a
                className="js-linkTel"
                href={`tel:${phone}`}
                target="_blank"
                title="phone-icon"
              >
                <i className="fas fa-mobile-alt card_media--item"></i>
              </a>
            </li>
            <li>
              <a
                className="js-linkEmail"
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                title="mail-icon"
              >
                <i className="fa fa-envelope card_media--item"></i>
              </a>
            </li>
            <li>
              <a
                className="js-linkIn"
                href={`https://linkedin.com/in/${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                title="linkedin-icon"
              >
                <i className="fab fa-linkedin-in card_media--item"></i>
              </a>
            </li>
            <li>
              <a
                className="js-linkGit"
                href={`https://github.com/${github}`}
                target="_blank"
                rel="noopener noreferrer"
                title="github-icon"
              >
                <i className="fab fa-github-alt card_media--item"></i>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default Card;
