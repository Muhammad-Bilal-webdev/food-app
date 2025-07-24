import React, { useState } from 'react';
import Navbar from './components/Navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/Cart/cart';
import Placeorder from './pages/placeorder/placeorder';
import Footers from './components/footer/Footers';
import Loginpopup from './components/loginpopup/Loginpopup';
import UserDashboard from './components/UserDashboard';

// ✅ Import new pages
import Menu from './pages/menu/menu';
import About from './pages/about/about';
import Contact from './pages/contact/contact';

const App = () => {
  const [showlogin, setshowlogin] = useState(false);

  return (
    <div className='app'>
      {showlogin ? <Loginpopup setshowlogin={setshowlogin} /> : <></>}
      <Navbar setshowlogin={setshowlogin} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeorder' element={<Placeorder />} />
         <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>

      <Footers />
    </div>
  );
};

export default App;
