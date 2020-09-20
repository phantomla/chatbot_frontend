import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import routes from './routes'

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);


function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          {
            routes.map((item, index) => {
              return <Route key={`route${index}`} exact path={item.path} component={item.component} />
            })
          }
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
