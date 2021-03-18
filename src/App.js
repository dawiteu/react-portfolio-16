import React, { Fragment } from 'react';

import Header from './pages/Header'; 
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <h1>Hello!</h1>
      <h2>Hello 2</h2>
      <p>dddd</p>
      <span>Spaan</span>
    </Fragment>
  );
};

export default App;
