import { Link } from 'react-router-dom';

const Navigaion = () => {
    return (
      <>
        <h1 className="logo"><Link to='/'>Home</Link></h1>
        <ul className="nav">
          <li className="nav__list nav__list--1"><Link to='/work'>Work</Link></li>
          <li className="nav__list nav__list--2"><Link to='/story'>Story</Link></li>
        </ul>
      </>
    );
};

export default Navigaion;