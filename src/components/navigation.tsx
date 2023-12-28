import { Link } from 'react-router-dom';

const Navigaion = () => {
    return (
        <ul className="nav">
          <li className="nav__list nav__list--1"><Link to='/'>Home</Link></li>
          <li className="nav__list nav__list--2"><Link to='/page1'>Page1</Link></li>
        </ul>
    );
};

export default Navigaion;