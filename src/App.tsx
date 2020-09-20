import React from 'react';
import {
  HashRouter,
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
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          {
            routes.map((item) => {
              return <Route exact path="/" component={item.component} />
              
            })
          }
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
