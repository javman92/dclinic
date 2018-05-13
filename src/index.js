
import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


/*
import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import { Router, Route, browserHistory } from 'react-router';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={FoodJokes}/>
        <Route path="/special" component={CelebrityJokes}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
*/