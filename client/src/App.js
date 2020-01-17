import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard/components/dashboard';
import { LoginComponent } from './login-form/components';
import { SignUpComponent } from './sigup-form/components';
// Redux stuff
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
      <Fragment>
        <Route exact path='/' component={LoginComponent} />
        <section className='container'>
          <Switch>
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/register' component={SignUpComponent} />
          </Switch>
        </section>
      </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
