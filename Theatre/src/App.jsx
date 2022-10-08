import './App.css';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>Hello World
      {/* <Router>
          <Switch>
            <Route />
          </Switch>
      </Router> */}
    </div>
  );
};

export default App;
