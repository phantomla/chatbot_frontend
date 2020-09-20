import React from 'react';

const Home = React.lazy(() =>
  import('./screens/Home')
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Home', component: Home },
];

export default routes;
