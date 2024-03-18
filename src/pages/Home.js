import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import styles from '../styles/Home.module.scss';
import { ReactComponent as ScheduleIcon } from '../media/icons/schedule.svg';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';
import Carousel from '../components/Carousel';
import HighlightCard from '../components/HighlightCard';
import { events, highlights } from '../data/data';
import { mainCoordinators, coordinators } from '../data/data';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const tags = [
  'Flashmob', 'fun', 'poetry', 'face painting', 'solo song', 'dance', 'essay', 'sketching',
  'concert', 'flash mob', 'film making', 'joy', 'concert', 'dj', 'poetry slam'
];

const renderTags = () => {
  return (
    <div className={styles['intro-bg']}>
      {[...Array(3)].map((_, index) => (
        <div className={styles.rail} key={index}>
          {tags.map((tag, i) => <span key={i}>{tag} </span>)}
        </div>
      ))}
    </div>
  );
};

const renderIntroContent = () => {
  return (
    <header className={cx(styles.introContent, styles.sectionHeader, 'container')}>
      <h2 className={styles.heading}>
        <span style={{ marginRight: '3ch' }}>Ciencia</span>
        <span className={styles._ar}>2k24</span>
      </h2>
      <p className={styles.subtitle} style={{ marginBottom: '-40px' }}> {/* Adjust margin bottom */}
        CIENCIA, a National-level technical symposium by CVR College of Engineering, 
        has transformed into a phenomenon, elevating CVRCE to fame and excellence. CIENCIA returns bigger, 
        showcasing innovative events for all branches. With programming, analytical, and technical quizzes, 
        it aims to transform attendees into active participants. Join CIENCIA for an unforgettable experience!
      </p>
      <div className={styles['header-btn-wrapper']}>
        <NavLink to='/gallery' className={cx('btn', styles['intro-header-btn'])}>
          <span className={cx('btn-subtitle', styles['intro-btn-subtitle'])}>Ciencia'24 in reels</span>
          <span className={cx('btn-text', styles['intro-btn-text'])}>Gallery</span>
          <LinkIcon />
        </NavLink>
      </div>
    </header>
  );
};

const Home = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <section className={cx(styles["intro-section"], styles['home-section'])}>
        {renderTags()}
        {renderIntroContent()}
      </section>

      <section className={cx(styles['home-section'], 'container', styles.highlights)}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.heading}>
            <span>Highlights</span>
          </h2>
        </header>
        <main>
          <div className={styles.hlgallery}>
            {highlights.map(id => <HighlightCard user={user} key={id} {...events[id]} />)}
            <div className={styles['btn-wrapper']}>
              <NavLink to='/events' className='btn'>
                <span className='btn-subtitle'>Events</span>
                <span className='btn-text'>Full Event<br />Schedule</span>
                <ScheduleIcon />
              </NavLink>
            </div>
          </div>
        </main>
      </section>

      <section className={cx(styles['home-section'], styles.coordinators)}>
        <header className={cx(styles.sectionHeader, 'container')}>
          <h2 className={styles.heading}>
            <span style={{ marginRight: '3ch' }}>Our</span>
            <span className={styles._ar}>Team</span>
          </h2>
          <div className={cx(styles.subtitle, 'container')} id='coordinatorsList'>
            {[...Array(2)].map((_, index) => (
              <ul key={index}>
                {coordinators.filter((val, i) => (index === 0 ? i <= 22 : i > 22)).map(val => (
                  <li key={val.name}> {val.name} </li>
                ))}
              </ul>
            ))}
          </div>
        </header>
        <main>
          <Carousel cardsList={mainCoordinators} />
        </main>
      </section>
    </motion.div>
  );
};

export default Home;
