import React from 'react';


import Home from './screens/Home'
import Flow from './screens/Flow'

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/flow', name: 'Home', component: Flow },
];

export default routes;
