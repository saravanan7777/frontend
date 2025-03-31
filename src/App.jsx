import React, { useState } from 'react';
import Home from './pages/home';
import Mid from './pages/mid';
import Rooms from './pages/room';
import Foot from './pages/footer';
import Review from './pages/review';
function App() {
 

  return (
    <div className="w-full overflow-hidden">
    <Home />
    <Mid/>
    <Rooms/>
    <Review />
    <Foot/>
    
    </div>
  );
}

export default App;