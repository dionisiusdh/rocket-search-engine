import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Upload } from './modules/Upload';
import Home from "./modules/Home";
import Result from "./modules/Result";
import About from "./modules/About";
import Show from "./modules/Show";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/result/' component={Result} />
              <Route path='/show/:file' component={Show} />
              <Route path='/upload/' component={Upload} />
              <Route path='/about' component={About} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;