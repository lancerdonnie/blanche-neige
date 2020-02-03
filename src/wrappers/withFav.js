import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { storeUpdate } from '../actions/logActions';

const withFav = Component => {
  const NewComp = props => {
    useEffect(() => {
      if (props.auth === true) {
        props.storeUpdate(props.user.id);
      }
    }, [props.auth]);
    return <Component {...props} />;
  };
  return connect(mapStateToProps, mapDispatchToProps)(NewComp);
};

const mapStateToProps = ({ items: { featured }, log }, ownProps) => {
  const a =
    log.user !== null
      ? { id: log.user.id, favourites: log.user.favourites }
      : {};
  return {
    featured: featured.filter(x => {
      return x.category === ownProps.match.params.cat;
    }),
    user: a,
    auth: log.auth
  };
};
const mapDispatchToProps = dispatch => {
  return { storeUpdate: id => dispatch(storeUpdate(id)) };
};

export default withFav;
