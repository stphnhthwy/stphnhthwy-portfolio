// import React, { Component } from 'react';
// import Nav from './components/nav';
// import Main from './pages/main'
// import './App.scss';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Nav />
//         <Main />
//     </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/main';

export default function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  )
}

// export default App;
