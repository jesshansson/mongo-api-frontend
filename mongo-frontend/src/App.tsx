import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dancing } from './components/Dancing';
import { Happy } from './components/Happy';
import { HappyDancing } from './components/HappyDancing';
import { Main } from './components/Main';
import { Songs } from './components/Songs';


  const App = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/dancing" element={<Dancing />} />
            <Route path="/happy" element={<Happy />} />
            <Route path="/happydancing" element={<HappyDancing />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

  export default App;