
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Main from './components/main';
import Page1 from './components/page1';

const App = ()=> {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Main />} />
        <Route path='/page1' element={<Page1 />} />
      </Routes>
    </>
  );
}

export default App;
