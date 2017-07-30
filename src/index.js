import dva from 'dva';
import { Router, Route, IndexRoute, browserHistory } from 'dva/router';
import React from 'react';
// import ReactDOM from 'react-dom';

import Index from './containers/index.jsx';
import Admin from './containers/admin.jsx';

const app = dva({
  history: browserHistory,
});

// app.model();
app.model(require('./model/index'));
app.model(require('./model/admin'));

app.router(({ history }) =>
  <Router history={history}>
    <Route path="/">
      <IndexRoute component={Index} />
    </Route>
    <Route path="/admin" component={Admin} />
  </Router>
);

app.start('#root');
