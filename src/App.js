import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './components/Home';
import StockList from './components/StockList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">Stock Market</Navbar.Brand>
          <Nav className="ml-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/stocks" className="nav-link">Stocks</NavLink>
          </Nav>
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/stocks" component={StockList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
