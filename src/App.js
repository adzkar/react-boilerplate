import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';
import routes from './config/routes';
import { AuthenticationService } from './services';
import { AppWrapper } from './App.style';
import './config/color.css';
import 'antd/dist/antd.css';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        AuthenticationService.isUserAuthenticated() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

function App() {
  return (
    <React.Fragment>
      <AppWrapper>
        <Router>
          <Switch>
            {routes.map((route, idx) => {
              if (route.isPublic)
                return (
                  <Route
                    path={route.path}
                    component={route.component}
                    key={idx}
                  />
                );
              else
                return (
                  <PrivateRoute
                    path={route.path}
                    component={route.component}
                    key={idx}
                  />
                );
            })}
          </Switch>
        </Router>
      </AppWrapper>
    </React.Fragment>
  );
}

export default App;
