import React from 'react';
//import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Dancing } from './components/Dancing';
import { Main } from './components/Main';


  const App = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dancing" element={<Dancing />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

  export default App;