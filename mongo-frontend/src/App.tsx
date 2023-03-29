import React from 'react';
//import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dancing } from './components/Dancing';
import { Happy } from './components/Happy';
import { Main } from './components/Main';


  const App = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dancing" element={<Dancing />} />
            <Route path="/happy" element={<Happy />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

  export default App;