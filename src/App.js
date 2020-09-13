import React from 'react';
import './App.css';
import Home from './components/Home';
import Item from './components/Item';
import Items from './components/Items';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
    <Router>
      <Nav></Nav>
        <Switch>
          <Route path="/Fornite-reactJS" exact component={Home} />
          <Route path="/Fornite-reactJS/items" exact component={Items} />
          <Route path="/Fornite-reactJS/items/:id" component={Item} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
