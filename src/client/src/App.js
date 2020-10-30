import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./modules/Home";
import Result from "./modules/Result"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/result/:path' component={Result} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;