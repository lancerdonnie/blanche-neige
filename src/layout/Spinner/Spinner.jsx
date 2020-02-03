import Loader from 'react-loader-spinner';
import React from 'react';
import styles from "./Spinner.module.scss"

const Spinner = ({big}) => {
  
  return (
    <div className={big?styles.big:""}>
      <Loader type='Rings' color='#5662CA' height={100} width={100} />
    </div>
  );
};

export default Spinner;
