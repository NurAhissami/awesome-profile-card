import GetAvatar from './GetAvatar';

function Fill({
  photo,
  updateAvatar,
  onKeyUp,
  name,
  job,
  email,
  github,
  linkedin,
  phone,
}) {
  return (
    <form
      id="reset"
      className="contact-form js-form"
      action="https://formspree.io/f/mbjpqobw"
      method="POST"
    >
      <label className="label_fill" htmlFor="fullName">
        Nombre completo
      </label>
      <input
        className="input js-inputname"
        id="fullName"
        type="text"
        value={name}
        name="name"
        placeholder="Ej:Sally Jill"
        required
        onChange={onKeyUp}
      />
      <label className="label_fill" htmlFor="rol">
        Puesto
      </label>
      <input
        className="input js-inputjobtitle"
        id="rol"
        value={job}
        type="text"
        name="job"
        placeholder="Ej:Front-End unicorn"
        required
        onChange={onKeyUp}
      />

      <label className="label_fill"> Imagen de perfil </label>
      <GetAvatar avatar={photo} updateAvatar={updateAvatar} />
      <div className="add_image">
        <div className="action">
          <input
            type="file"
            name="photo"
            id="img-selector"
            className="action__hiddenField js__profile-upload-btn"
            required
          />
        </div>
      </div>

      <label className="label_fill" htmlFor="emailAddress">
        Email
      </label>
      <input
        className="input js-inputEmail"
        type="email"
        value={email}
        id="emailAddress"
        name="email"
        placeholder="Ej:sally-jill@gmail.com"
        required
        onChange={onKeyUp}
      />
      <label className="label_fill" htmlFor="telephone">
        Telefono
      </label>
      <input
        className="input js-inputTel"
        type="tel"
        value={phone}
        id="telephone"
        name="phone"
        placeholder="Ej:555-55-55-55"
        pattern=".{9}"
        onChange={onKeyUp}
      />
      <label className="label_fill" htmlFor="Linkedin">
        Linkedin{' '}
      </label>
      <input
        className="input js-inputIn"
        id="Linkedin"
        value={linkedin}
        type="text"
        name="linkedin"
        placeholder="Ej: sally.hill"
        required
        onChange={onKeyUp}
      />
      <label className="label_fill" htmlFor="Github">
        {' '}
        Github
      </label>
      <input
        className="input js-inputGit"
        id="Github"
        value={github}
        type="text"
        name="github"
        placeholder="Ej: sally-hill"
        required
        onChange={onKeyUp}
      />
    </form>
  );
}

export default Fill;
