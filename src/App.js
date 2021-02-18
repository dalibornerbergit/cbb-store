import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Sidebar from './components/layout/Sidebar';
import About from './components/About';
import { useState } from 'react';
import CustomerList from './components/customers/CustomerList';
import CreateCustomer from './components/customers/CreateCustomer';
import EditCustomer from './components/customers/EditCustomer';
import ProductList from './components/products/ProductList';
import CreateProduct from './components/products/CreateProduct';

function App() {
  const [sidebar, setSidebar] = useState(true)

  const showSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <>
      <Router>
        <Navbar showSidebar={showSidebar} sidebar={sidebar} />
        <div className="wrapper">
          <Sidebar showSidebar={showSidebar} sidebar={sidebar} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/customers" exact component={CustomerList} />
            <Route path="/customers/create" exact component={CreateCustomer} />
            <Route path="/customers/:id/edit" component={EditCustomer} />
            <Route path="/products" exact component={ProductList} />
            <Route path="/products/create" component={CreateProduct} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;