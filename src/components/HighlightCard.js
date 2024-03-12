import styles from './HighlightCard.module.scss';

const HighlightCard = ({ figureSrc, title, desc, type, isRegistrationOpen, user, venue, coordinator, time }) => (
  <article className={styles.card}>
    <figure>
      <img alt='' src={figureSrc} />
    </figure>
    <main>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardSubtitle}>
        <div className={styles.desc}>{desc}</div>
        {type === 'Contest' && isRegistrationOpen ? (
          <div className={styles.type}>Registrations open</div>
        ) : <div className={styles.type}>{type}</div>}
        <div className={styles.details}>
          <p><strong>Location :</strong> {venue}</p>
          <p><strong>Time :</strong> {time}</p>
        </div>
      </div>
    </main>
  </article>
)

export default HighlightCard;
