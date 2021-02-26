import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useContext, useState } from "react";
import { Routes } from "./router/Routes";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

import Footer from "./components/layout/Footer";
import "./App.css";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const { isDark } = useContext(ThemeContext);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <Router>
        <Navbar showSidebar={showSidebar} sidebar={sidebar} />
        <div className={"wrapper " + (isDark && "bg-success")}>
          <Sidebar showSidebar={showSidebar} sidebar={sidebar} />
          <Switch>
            {Routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
