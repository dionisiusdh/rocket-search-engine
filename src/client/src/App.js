import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import { Upload } from './components/Upload';
import Home from "./modules/Home";
import Result from "./modules/Result"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/result/' component={Result} />
              <Route path='/result/:path' component={Result} />
              <Route path='/upload/' component={Upload} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;