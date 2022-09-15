import React from 'react';
import Nav from './components/nav';

import CoreRoute from './core/core.route';

function App() {
  return (
      <div className='container'>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Simple Blog Application</h1>
          </div>
        </div>

        <Nav />
        <CoreRoute />
      </div>
  );
}

export default App;
