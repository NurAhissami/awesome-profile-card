import logo from '../images/logo-awesome-profile-cards.svg';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="title">Awesome profile cards</h1>
      <div className="imagecontainer">
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="Logo"
            title="Awesome profile cards"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
