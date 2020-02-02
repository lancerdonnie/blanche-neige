import React from 'react';
import styles from './Contact.module.scss';
import { toast } from 'react-toastify';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div>
        <p>Get In Touch</p>
        <div className={`card ${styles.box}`}>
          <form
            onSubmit={e => {
              e.preventDefault();
              e.target.reset();
              toast.success('Message sent!');
            }}
          >
            <div>
              <span>Send a Message</span>
              <i className='fas fa-envelope'></i>
            </div>
            <div>
              <input placeholder='First Name' type='text' />
              <input placeholder='Last Name' type='text' />
            </div>
            <div>
              <input placeholder='Phone' type='text' />
              <input placeholder='Email' type='text' />
            </div>
            <input placeholder='Group or Company' type='text' />
            <textarea
              placeholder='How can we help'
              name=''
              id=''
              cols='30'
              rows='10'
            ></textarea>
            <div>
              <button type='submit'>
                <i className='fas fa-paper-plane'></i>
                <div>SUBMIT</div>
              </button>
            </div>
          </form>
          <div>
            <div>
              <p>Contact Info</p>
              <div>
                <i className='fas fa-mobile-alt'></i>{' '}
                <span>+2348118161237</span>
              </div>
              <div>
                <i className='fas fa-envelope'></i>{' '}
                <span>jideadedejifirst@gmail.com</span>
              </div>
              <div className='socials'>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='http://github.com/lancerdonnie'
                >
                  <i className='fab fa-github social'></i>
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='http://instagram.com/lancer_donnie'
                >
                  <i className='fab fa-instagram social'></i>
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='http://twitter.com/lancer_donnie'
                >
                  <i className='fab fa-twitter social'></i>
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='http://facebook.com/adedeji.ifeoluwa1'
                >
                  <i className='fab fa-facebook-f social'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
