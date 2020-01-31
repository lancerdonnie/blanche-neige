import React from 'react';
import styles from './Categories.module.scss';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner/Spinner';

const Categories = props => {
  const style = props.match.params.cat;
  const handle = cat => {
    props.history.push(`/categories/${cat}`);
  };

  return (
    <div className={styles.catig}>
      <div className={styles.nav}>
        <ul>
          <li
            className={style === 'clothes' ? styles.bg : null}
            onClick={() => handle('clothes')}
          >
            Clothes
          </li>
          <li
            className={style === 'bags' ? styles.bg : null}
            onClick={() => handle('bags')}
          >
            Bags
          </li>
          <li
            className={style === 'shoes' ? styles.bg : null}
            onClick={() => handle('shoes')}
          >
            Shoes
          </li>
          <li
            className={style === 'jewellery' ? styles.bg : null}
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
const mapStateToProps = ({ items: { featured } }, ownProps) => {
  return {
    featured: featured.filter(x => {
      return x.category === ownProps.match.params.cat;
    })
  };
};
export default connect(mapStateToProps)(Categories);
