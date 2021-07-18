import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Header from './container/Header';
import ProductDetails from './container/ProductDetails';
import ProductListing from './container/ProductListing';

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route  exact path="/product/:productId" component={ProductDetails} />
          <Route>404 Page Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
