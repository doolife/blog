import { Link } from 'react-router-dom';

const Navigaion = () => {
    return (
      <>
        <header className="header">
          <h1 className="header__logo"><Link to='/'>Home</Link></h1>
        </header>
        <ul className="nav">
          <li className="nav__list nav__list--1"><Link to='/work'>Work</Link></li>
          <li className="nav__list nav__list--2"><Link to='/story'>Story</Link></li>
        </ul>
      </>
    );
};

export default Navigaion;