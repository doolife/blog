import { Link } from 'react-router-dom';

const Navigaion = () => {
    return (
        <ul className="nav">
          <li className="nav__list nav__list--1"><Link to='/'>Work</Link></li>
          <li className="nav__list nav__list--2"><Link to='/story'>Story</Link></li>
        </ul>
    );
};

export default Navigaion;