import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <div>
        <h2>About Us</h2>
        <p>
          Do you like looking your best? wanna follow the latest trends? We
          bring you trending wears all over the world to spice up your
          appearance to boost your confidence everywhere you go
        </p>
        <p>
          There is something for everyone here. We have clothes, shoes, bags and
          jewelleries for men and women
        </p>
        <div>CONTINUE SHOPPING</div>
        <p>
          Built with love by lancer donnie <i className='fas fa-heart'></i>
        </p>
      </div>
    </div>
  );
};

export default About;
