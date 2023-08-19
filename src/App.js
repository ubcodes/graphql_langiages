import './App.css';
import Languages from './pages/Languages';
import { Route, Routes } from 'react-router-dom';
import Language from './pages/Language';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route strict exact path='/' element={<Languages />} />
      <Route strict exact path='/search' element={<Search />} />
      <Route strict exact path='/:code' element={<Language />} />
      </Routes>
    </div>
  );
}

export default App;
