import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard/components/dashboard';
import { SignIn } from './login-form';

const App = () => {
  return (
    <Router>
    <Fragment>
      <Route exact path='/' component={SignIn} />
      <section className='container'>
        <Switch>
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </section>
    </Fragment>
    </Router>
  );
}

export default App;
