import { Link } from 'react-router-dom';

const Navigaion = () => {
    return (
      <>
        <header className="header">
          <div className="container">
            <div className="header--wrap">
              <h1 className="header__logo">
                <Link to='/'>Logo</Link>
              </h1>
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