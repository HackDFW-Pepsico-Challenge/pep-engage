import React from 'react';

import AppRouter from './AppRouter';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark bg-primary">
      
      <div class="container">
    <a className="navbar-brand" href="http://localhost:3000/home">
      <img src="pepsico_logo.png" alt="..." height="40"/>
      </a>
      <ul className="nav-list"><li> <a href="http://localhost:3000/home" className="text-light"> Home</a></li> 
      <li>
      <a href="http://localhost:3000/socials" className="text-light"> Socials</a>
        </li>
         <li>
      <a href="http://localhost:3000/campaigns" className="text-light"> Campaigns</a>
        </li> 

      </ul>
    </div>
</nav>


     <AppRouter/> 
    </div>
  );
}

export default App;