import React from 'react';
import { Route } from 'react-router-dom';
import Categories from '../Categories/Categories';

const Cat = props => {
  return <Route path={`${props.match.path}/:cat`} component={Categories} />;
};

export default Cat;
