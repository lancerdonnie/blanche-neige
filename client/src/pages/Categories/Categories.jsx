import React, { useEffect } from 'react';
import styles from './Categories.module.scss';
import Spinner from '../../layout/Spinner/Spinner';
import { db } from '../../config/fbConfig';
import { toast } from 'react-toastify';
import withFav from '../../wrappers/withFav';

const Categories = props => {
  const style = props.match.params.cat;
  const handle = cat => {
    props.history.push(`/categories/${cat}`);
  };

  const checkFav = id => {
    if (props.auth) {
      return props.user.favourites.some(x => {
        return x === id;
      });
    }
    // return true;
  };

  const handleFav = async (e, id) => {
    e.stopPropagation();
    if (props.auth) {
      const w = props.user.favourites.some(x => {
        return x === id;
      });
      if (w) {
        const w = props.user.favourites.filter(x => {
          return x !== id;
        });
        await db
          .collection('users')
          .doc(props.user.id)
          .update({
            favourites: w
          });
        toast.success('Removed Successfully');
      } else {
        await db
          .collection('users')
          .doc(props.user.id)
          .update({
            favourites: [...props.user.favourites, id]
          });
        toast.success('Added Successfully');
      }
    } else {
      toast.warn('You must be logged in to do this');
    }
  };
  return (
    <div className={styles.catig}>
      <div className={styles.nav}>
        <ul>
          <li
            id={style === 'clothes' ? styles.bg : null}
            onClick={() => handle('clothes')}
          >
            Clothes
          </li>
          <li
            id={style === 'bags' ? styles.bg : null}
            onClick={() => handle('bags')}
          >
            Bags
          </li>
          <li
            id={style === 'shoes' ? styles.bg : null}
            onClick={() => handle('shoes')}
          >
            Shoes
          </li>
          <li
            id={style === 'jewellery' ? styles.bg : null}
            onClick={() => handle('jewellery')}
          >
            Jewellery
          </li>
        </ul>
      </div>
      {props.featured.length > 1 ? (
        <div className={styles.category}>
          <div className={styles.catitem1}>
            <div className={styles.catitem11}>
              <div></div>
            </div>
            <div className={styles.catitem12}>
              <span>
                SUPER <br /> SALE
              </span>
              <span>Extra 50% OFF</span>
              <span>GO CRAZY</span>
            </div>
          </div>
          {props.featured.map(item => {
            return (
              <div
                onClick={() => {
                  props.history.push(`/categories/${item.category}/${item.id}`);
                }}
                key={item.id}
                className={styles.catitem}
              >
                <div className='dummydiv'></div>
                <div className={styles.catimg}>
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
                  id={checkFav(item.id) ? styles.heart : ''}
                ></i>
              </div>
            );
          })}
        </div>
      ) : (
        <Spinner big />
      )}
    </div>
  );
};
export default withFav(Categories);
