import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
      <Router>
        <Navbar showSidebar={showSidebar} sidebar={sidebar} />
        <div className="content">
          <Sidebar showSidebar={showSidebar} sidebar={sidebar} />
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;