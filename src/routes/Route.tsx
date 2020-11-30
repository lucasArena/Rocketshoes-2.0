import React from 'react';

import {
  Route as ReactDomRoute,
  RouteProps as ReactDomProps,
} from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/Default';

interface RouteProps extends ReactDomProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => (
  <ReactDomRoute
    {...rest}
    render={() => (
      <DefaultLayout>
        <Component />
      </DefaultLayout>
    )}
  />
);

export default Route;
