// add the actual JSX file names that link to the JSX files in the components folder)

import React, { Component } from 'react';
import './App.css';
// import Sidebar from './components/sidebar'
// import Introduction from './components/introduction'
import About from './components/about-me';
// import Timeline from './components/timeline'


// This portion of the app needs to be updated to the files in the components folder
class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	{/* <Sidebar></Sidebar> */}
				<div id="colorlib-main">
					{/* <Introduction></Introduction> */}
					<About></About>
					{/* <Timeline></Timeline> */}
          	</div>
      	</div>
      </div>
    );
  }
}

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default App;
