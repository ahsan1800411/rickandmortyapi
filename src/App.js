import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Character from './pages/Character';
import CharacterList from './pages/CharacterList';
import Search from './pages/Search';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CharacterList />} />
          <Route path='/search' element={<Search />} />
          <Route path='/:id' element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
