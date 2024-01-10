import { Link } from 'react-router-dom';

const Navigaion = () => {
    return (
      <>
        <header className="header">
          <h1 className="header__logo">Doolife</h1>
          <Link to='/' className="header__menu">List</Link>
        </header>
      </>
    );
};

export default Navigaion;