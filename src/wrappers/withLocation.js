import React from 'react';
import { withRouter } from 'react-router-dom';

//This HOC passes only the location pathname and leaves out the rest
const Location = Component => {
  const NewComp = props => {
    const { history, location, match, staticContext, ...rest } = props;
    return <Component data={history.location.pathname} {...rest} />;
  };
  return withRouter(NewComp);
};

export default Location;
