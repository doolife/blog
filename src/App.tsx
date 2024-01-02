import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation';
import Work from './components/work';
import Story from './components/story';

const App = ()=> {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Work />} />
        <Route path='/story' element={<Story />} />
      </Routes>
    </>
  );
}

export default App;
