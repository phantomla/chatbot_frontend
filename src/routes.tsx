import React from 'react';

const Home = React.lazy(() =>
  import('./screens/Home')
);

const Flow = React.lazy(() =>
  import('./screens/Flow')
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/flow', name: 'Home', component: Flow },
];

export default routes;
