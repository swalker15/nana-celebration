import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Quotes from './Components/Quotes';
import Pictures from './Components/Pictures';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={App} exact/>
             <Route path="/quotes" component={Quotes}/>
             <Route path="/pictures" component={Pictures}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
