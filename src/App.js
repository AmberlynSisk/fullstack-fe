import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/main.scss';
import Home from './components/pages/home'
import Login from './components/pages/login';
import Signup from './components/pages/signup';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route exact path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route exact path="/signup" element={<Signup setLoggedIn={setLoggedIn} />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;