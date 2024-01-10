import { Link } from 'react-router-dom';

const Navigaion = () => {
    return (
      <>
        <header className="header">
          <div className="container">
            <div className="header--wrap">
              <h1 className="header__title">Doolife</h1>
              <p className="header__text">Hellow World</p>
            </div>
            <div className="header__menu">
              <Link to='/'>List</Link>
            </div>
          </div>
        </header>
      </>
    );
};

export default Navigaion;