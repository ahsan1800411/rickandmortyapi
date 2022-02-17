import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Character from './pages/Character';
import CharacterList from './pages/CharacterList';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CharacterList />} />
          <Route path='/:id' element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
