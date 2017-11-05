'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Search from './containers/Search';
import Bars from './containers/Bars';
import Bar from './containers/Bar';
import Rounds from './containers/Rounds';
import Round from './containers/Round';
import Header from './components/Header';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Switch>
                <Route exact path='/' component={Search}/>
                <Route exact path='/bars' component={Bars}/>
                <Route exact path='/rounds' component={Rounds}/>
                <Route path='/bars/:id' component={Bar}/>
                <Route path='/rounds/:id' component={Round}/>
              </Switch>
            </div>
          </div>
        </div>
      </main>
    </div>
  </BrowserRouter>
, document.querySelector('#root'));


// if ('serviceWorker' in navigator && !navigator.standalone) {
//   // window.addEventListener('beforeinstallprompt', function(e) {
//   //   e.userChoice.then(function(choiceResult) {
//   //     if (choiceResult.outcome !== 'dismissed') {
//   //       // Track PWA being added to homescreen
//   //     }
//   //   });
//   // });
// 
//   navigator.serviceWorker.register('./js/sw.js').then(function(reg) {
//     // Track app install banner being shown
//   }).catch(function(err) {
//     alert(err);
//   });
// }
