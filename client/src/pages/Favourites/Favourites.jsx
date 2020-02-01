import React, { useEffect } from 'react';
import styles from './Favourites.module.scss';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner/Spinner';
import withFav from '../../wrappers/withFav';
import { db } from '../../config/fbConfig';
import { toast } from 'react-toastify';
const Favourites = props => {
  useEffect(() => {
    if (props.auth === false) {
      props.history.push('/');
      toast.warn('Please sign in to view that');
    }
  }, []);
  const noFav = () => {
    return <div>please add favourites</div>;
  };
  const handleFav = async (e, id) => {
    e.stopPropagation();
    if (props.auth) {
      await db
        .collection('users')
        .doc(props.user.id)
        .update({
          favourites: [...props.user.favourites, id]
        });
      // }
    } else {
      toast.warn('You must be logged in to do this');
    }
  };
  return props.favourites !== null ? (
    <div className={styles.favourites}>
      <p className='head1'>FAVOURITES</p>
      <div className={styles.fav}>
        {props.favourites.map(item => {
          return (
            <div
              onClick={() => {
                props.history.push(`/categories/${item.category}/${item.id}`);
              }}
              className={styles.favitem}
              key={item.id}
            >
              <div className='dummydiv'></div>
              <div className={styles.favimg}>
                <img src={item.link} alt='loading' />
              </div>
              <div className={styles.desc}>
                <div>
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
                <p>{item.category}</p>
              </div>
              <i
                onClick={e => handleFav(e, item.id)}
                className={`fas fa-heart `}
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <Spinner big />
  );
};

const mapStateToProps = state => {
  return {
    favourites:
      state.log.auth === true
        ? state.log.user.favourites
            .map(x => {
              const match = state.items.featured.filter(y => {
                return y.id === x;
              });
              return match;
            })
            .flat()
        : null
  };
};

export default connect(mapStateToProps)(withFav(Favourites));
