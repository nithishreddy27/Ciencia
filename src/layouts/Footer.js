import styles from '../styles/Footer.module.scss';
import cx from 'classnames';
import { ReactComponent as MailIcon } from '../media/icons/mail.svg';
import { ReactComponent as WAIcon } from '../media/icons/wa.svg';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [devTeam, setDevTeam] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer className='container'>
      <div className={styles.MainFooterContent}>
        <div className={cx(styles.footerItems)} id="footerContent">
          <div className={styles.QuotesContainer}>
            {/* Conditionally render Ciencia 2k24 text */}
            {!isMobile && <div className={styles.quotes}>Ciencia 2k24</div>}
          </div>

          <div className={styles.LogoContainer}>
            {/* Apply inline CSS for centering text in mobile */}
            <div className={cx(styles.title, { [styles.centered]: isMobile })} style={{ textAlign: isMobile ? 'center' : 'left', marginLeft: isMobile ? '150px' : '110px' }}>
              Ciencia2k24
            </div>
          </div>
        </div>
        <div className={styles.footerItems}>
          <div>
            <p>Contact us</p>
            <ul className={styles.SocialHandles}>
              <li className={cx(styles['handle-wrapper'])}>
                <a className={styles.handle} target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/cvr-ciencia-8265152b7/ ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
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
  );
};

export default Footer;
