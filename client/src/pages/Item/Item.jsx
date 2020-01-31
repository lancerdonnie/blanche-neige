import React, { Fragment, useState } from 'react';
import styles from './Item.module.scss';
import { connect } from 'react-redux';
import { addCart } from '../../actions/itemActions';
import { befNext } from './Utils';
import Spinner from '../../layout/Spinner/Spinner';

const itemHOC = Component => {
  const NewComp = props => {
    return props.item ? <Component {...props} /> : <Spinner big />;
  };
  return connect(mapStateToProps, mapDispatchToProps)(NewComp);
};

const Item = props => {
  const [choice, setChoice] = useState('red');
  const [sizeValue, setSizeValue] = useState(5);
  const {
    item: { link, category, name, price, size },
    category: { next },
    addCart
  } = props;

  const handleClick = ind => {
    props.history.push({
      pathname: `${category.next[ind].id}`
    });
  };
  const handleColor = e => {
    if (e.currentTarget.getAttribute('name'))
      setChoice(e.currentTarget.getAttribute('name'));
  };
  const handleSize = e => {
    setSizeValue(e.target.value);
  };
  return (
    <Fragment>
      <div onClick={() => handleClick(0)} className={styles.previous}>
        <img src={next[0].link} alt='loading' />
        <div>
          <i className='fas fa-arrow-left'></i>
          <span>PREVIOUS</span>
        </div>
      </div>
      <div onClick={() => handleClick(1)} className={styles.next}>
        <img src={next[1].link} alt='loading' />
        <div>
          <span>NEXT</span>
          <i className='fas fa-arrow-right'></i>
        </div>
      </div>
      <div className={styles.product + ' card'}>
        <img src={link} alt='loading' />
        <div>
          <p>{category.toUpperCase()}</p>
          <p>{name.toUpperCase()}</p>
          <p>{price}$</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, totam dicta. Unde harum sint tenetur delectus debitis
            quaerat obcaecati deleniti eum? Amet deleniti consequatur nesciunt
            dolores exercitationem alias illum optio.Aliquam voluptas at
            incidunt id facere, esse odit impedit harum neque! Aliquid magni
          </p>
          <div className={styles.choice}>
            <div
              onClick={handleColor}
              name='red'
              className={choice === 'red' ? styles.red : ''}
            >
              <img src={link} alt='red' />
            </div>
            <div
              onClick={handleColor}
              name='green'
              className={choice === 'green' ? styles.green : ''}
            >
              <img src={link} alt='green' />
            </div>
            <div
              onClick={handleColor}
              name='blue'
              className={choice === 'blue' ? styles.blue : ''}
            >
              <img src={link} alt='blue' />
            </div>
          </div>
          <p>SELECT SIZE</p>
          <div className={styles.check}>
            <div>
              <select
                onChange={handleSize}
                name=''
                id=''
                className={styles.check1 + ' card'}
              >
                {size.map(s => {
                  return (
                    <option key={s} value={s}>
                      UK {s}
                    </option>
                  );
                })}
              </select>
              {/* <span>UK {size[0]}</span> */}
              {/* <i className='fas fa-chevron-down'></i> */}
            </div>
            <div className={styles.check2}>
              <i className='fas fa-cart-plus'></i>
              <span onClick={() => addCart(props.item.id, choice, sizeValue)}>
                Add to cart
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = ({ items: { featured } }, ownProps) => {
  const items = featured.filter(item => {
    return item.category === ownProps.match.params.cat;
  });
  const index = items.findIndex(x => {
    return x.id === ownProps.match.params.id;
  });
  return {
    item: items.find(e => {
      return e.id === ownProps.match.params.id;
    }),
    category: {
      cats: items,
      len: items.length,
      next: befNext(items, index)
    }
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addCart: (id, choice, size) => {
      dispatch(addCart(id, choice, size));
    }
  };
};
export default itemHOC(Item);
