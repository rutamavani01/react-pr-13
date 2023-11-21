import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';

import Home from './Home';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Login/>}></Route>
            <Route path='/Home' element = {<Home/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
