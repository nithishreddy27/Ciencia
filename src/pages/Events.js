import { NavLink } from 'react-router-dom';
import styles from '../styles/Events.module.scss';
import cx from 'classnames';
import { events } from '../data/data';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SupportLink from '../components/SupportLink';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';

const timeCompare = (a, b) => {
  if (events[a].time < events[b].time) {
    return -1;
  } else if (events[a].time === events[b].time) {
    return 0;
  } else {
    return 1;
  }
}

const Events = ({ user }) => {
  const eventFigureWrapper = useRef(null);
  const [currentDay, setCurrentDay] = useState(0);
  const [activeEventId, setActiveEventId] = useState(null);

  useEffect(() => {
    const stickEventFigure = () => {
      const wrapper = eventFigureWrapper.current;
      const figures = document.querySelectorAll(`.${styles['current-figure']}`);

      const stickFigure = (el, figure) => {
        if (el.getBoundingClientRect().top > (window.innerHeight - figure.getBoundingClientRect().width)) {
          figure.style.position = 'absolute';
          figure.style.top = '0';
        } else if (el.getBoundingClientRect().bottom > window.innerHeight) {
          figure.style.position = 'fixed';
          figure.style.bottom = '0';
          figure.style.top = 'unset';
        } else {
          figure.style.position = 'absolute';
          figure.style.bottom = '0';
          figure.style.top = 'unset';
        }
      }

      figures.forEach(figure => {
        stickFigure(wrapper, figure);
      })
    }

    window.addEventListener('scroll', stickEventFigure)

    return () => {
      window.removeEventListener('scroll', stickEventFigure);
    }
  }, [currentDay])

  return (
    <motion.div className={cx(styles.events, 'page-transition', 'container')}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <header className={cx('page-header', styles['page-header'])}>
        <h1 className='heading'>
          <span>Event</span>
          <span>Schedule</span>
        </h1>
        <div className={cx(styles['header-btn-wrapper'])}>
          <NavLink to='/gallery' className={cx('btn', styles['intro-header-btn'])}>
            <span className={cx('btn-subtitle', styles['intro-btn-subtitle'])}>Ciencia2k22 in reels</span>
            <span className={cx('btn-text', styles['intro-btn-text'])}>Gallery</span>
            <LinkIcon />
          </NavLink>
        </div>
        <div className={cx('subtitle', styles['header-subtitle'])}>
          <h2>March.21-22</h2>
          <div>2024</div>
        </div>
      </header>
      <main className={cx(styles['main-content'])}>
        <nav className={styles['schedule-nav']}>
          <ul className={styles.tabs}>
            {['Technical Events', 'Non-Technical Events', 'Special Events'].map((day, i) => (
              <ScheduleNavBtn key={day}
                currentDay={currentDay} day={i}
                label={day} handleDayChange={setCurrentDay} />
            ))}
          </ul>
        </nav>
        <section ref={eventFigureWrapper} className={styles['event-list-wrapper']}>
          <ul className={styles['event-list']}>
            {Object.keys(events).filter(id => events[id].day === currentDay)
              .sort(timeCompare)
              .map(id => <EventCard key={id} {...events[id]} handleHover={setActiveEventId} />)}
          </ul>
          <div className={styles['event-figures']}>
            <div className={styles.figures}>
              {Object.keys(events).filter(id => events[id].day === currentDay)
                .map(id => <EventFigure key={id} {...events[id]} isActive={activeEventId === id} />)}
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  )
}

const ScheduleNavBtn = ({ day, currentDay, handleDayChange, label }) => (
  <li className={cx(styles.tab, { [styles.active]: currentDay === day })}>
    <button
      onClick={(e) => { e.preventDefault(); handleDayChange(day) }}
      className={styles['tab-btn']}
      type='button'
    >{label}</button>
  </li>
)

const EventCard = ({ id, title, isRegistrationOpen, venue, time, handleHover, registrationLink, KnowMoreLink, popupContent }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleKnowMoreClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <li className={cx(styles['event-li'])}>
      <article
        className={styles['event-li-inner']}
        onMouseOut={(e) => {
          handleHover(null);
        }}
        onMouseOver={(e) => {
          handleHover(id);
        }}
      >
        <div className={styles.title}>
          {isRegistrationOpen ? (
            <button
  className={cx(styles['register-now-button'], 'button-23')}
  style={{
    backgroundColor: '#FFFFFF',
    border: '1px solid #222222',
    borderRadius: '8px',
    boxSizing: 'border-box',
    color: '#222222',
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '20px',
    margin: '0',
    outline: 'none',
    padding: '13px 23px',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    touchAction: 'manipulation',
    transition: 'box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    width: 'auto'
  }}
>
  Register Now
</button>

          ) : (
            <p>Registrations closed!</p>
          )}
          <h4>{time}</h4>
        </div>
        <div className={styles.time}>
  <p style={{ marginRight: '1rem' , marginTop: '1rem'}}>{title}</p>
  <button
  onClick={handleKnowMoreClick}
  className={cx('button', 'button-23')}
  style={{
    backgroundColor: '#FFFFFF',
    marginRight: '1rem' , 
    marginTop: '1rem',
    border: '1px solid #222222',
    borderRadius: '8px',
    boxSizing: 'border-box',
    color: '#222222',
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '20px',
    //margin: '0',
    outline: 'none',
    padding: '13px 23px',
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    touchAction: 'manipulation',
    transition: 'box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    width: 'auto'
  }}
>
  Know More
</button>

</div>

      </article>
      {/* Existing popup rendering */}
    </li>
  );
};

const EventFigure = ({ id, title, figureSrc, isActive = false }) => (
  figureSrc && (
    <article key={id} className={cx(styles['current-figure'], { [styles.active]: isActive })}>
      <figure className={styles['img-wrapper']}>
        <img alt={title} src={figureSrc} className={`${styles['event-image']} ${styles['original-size']}`} />
      </figure>
    </article>
  )
);

export default Events;
