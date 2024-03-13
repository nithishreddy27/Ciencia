import styles from '../styles/Footer.module.scss';
import cx from 'classnames'
import { ReactComponent as MailIcon } from '../media/icons/mail.svg';
import { ReactComponent as WAIcon } from '../media/icons/wa.svg';
import { useState } from 'react';

const Footer = () => {
  const [devTeam, setDevTeam] = useState(false);

  return (
    <footer className='container'>
      <div className={styles.MainFooterContent}>
        <div className={cx(styles.footerItems)} id="footerContent">
          <div className={styles.QuotesContainer}>
            <div className={styles.quotes}>Ciencia 2k24</div>
          </div>

          <div>
            <div className={styles.LogoContainer}>
              
              <div className={styles.title}>Ciencia2k24</div>
            </div>
          </div>
        </div>
        <div className={styles.footerItems}>
          <div >
            <p>Contact us</p>
            <ul className={styles.SocialHandles}>
              <li className={cx(styles['handle-wrapper'])}>
                <a className={styles.handle} target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/cvr-ciencia-8265152b7/ ">
                  <svg role="presentation" aria-label="Linkedin" aria-hidden="true">
                    <use href="https://i.ibb.co/wcCf737/icons8-linkedin-120.png"></use>
                  </svg>
                </a>
              </li>
              <li className={cx(styles['handle-wrapper'])}>
                <a className={styles.handle} target='_blank' rel='noreferrer' href="https://www.instagram.com/cvrciencia2k24?igsh=MTlucWM2dnRyNXBpZw==">
                  <svg role="presentation" aria-label="Twitter" aria-hidden="true">
                    <use href="/media/icons/sprite.svg#social-instagram"></use>
                  </svg>
                </a>
              </li>
              {/* <li className={cx(styles['handle-wrapper'])}>
                <a className={styles.handle} target='_blank' rel='noreferrer' href="#">
                  <MailIcon />
                </a>
              </li> */}
             
            </ul>
          </div>

          <div className={styles.thanks}>
            <span>Thank you</span>
            <br />
            <span>for your support</span>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.team}>
        
          <span className={styles.sep}></span>
          <span>&copy; 2024 Ciencia CVR College of Engineering</span>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer