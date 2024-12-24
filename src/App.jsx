import { useEffect, useState } from 'react';
import './App.css';
import { NavBarSection } from './components/NavbarSection';
import { HomePageSection } from './components/HomepageSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartSection } from './components/CartSection';

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBarSection />
        <Routes>
          <Route path='/' element={<HomePageSection />}/>
          <Route path='/cart' element={<CartSection />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
