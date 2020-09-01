import React from 'react';
import PlantGame from './components/plantGame.js';
import StartComponent from './components/startComponent.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
       <Switch>
          <Route path="/start-game">
            <PlantGame />
          </Route>
          <Route path="/">
            <StartComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



// function App() {
//   return (
//     <div className="App">
//       <div>
//         <PlantSimulator />
//       </div>
//     </div>
//   );
// }

// export default App;

