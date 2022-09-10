import React from 'react';
import Nav from './components/Nav';

import CoreRoute from './core/core.route';

function App() {
  return (
      <div className='container'>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Simple Blog Application</h1>
          </div>
        </div>

        <Nav />
        <CoreRoute />
      </div>
  );
}

export default App;
