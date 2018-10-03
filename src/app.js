import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Browser, Route, Switch } from 'react-router-dom';

import 'bulma';

import Register from './components/Register';
import Login from './components/Login';
import UserShow from './components/users/UserShow';

class App extends React.Component {
  render() {
    return (
      <Browser>

        <div>
          <h1>Art Mapper</h1>
          <main className="section">
            <div className="container">
              <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/user/:id" component={UserShow} />
              </Switch>
            </div>
          </main>
        </div>
      </Browser>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
