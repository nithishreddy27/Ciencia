import styles from '../styles/Gallery.module.scss';
import cx from 'classnames';
import 'react-html5video/dist/styles.css'
import { motion } from 'framer-motion';

const Gallery = ({ user }) => {

  const Video = ({ embedId }) => {

    return (
      <div style={{
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: 'relative',
        height: "50vh"
      }}>
        <iframe
          style={{
            left: "6%",
            top: "18%",
            height: "65%",
            width: "90%",
            position: "absolute"

          }}
          width="653"
          height="280"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope; pictures-in-picture"
          allowFullScreen
          title='Embeded Youtube'
        />
      </div>
    )

  }




  return (
    <motion.div className={cx(styles.events, 'page-transition', 'container')}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
    >
      <header className={cx('page-header', styles['page-header'])}>
        <h1 className='heading'>
          <span>Gallery</span>
        </h1>
        <div className={cx('subtitle', styles['header-subtitle'])}>
          <h2>March.21-22</h2>
          <div>Ciencia'24</div>
        </div>
      </header>
      <main className={cx(styles['main-content'])}>


        <div className={cx(styles['gallery'])}>
          
          <div className='Video'>
            <Video embedId={"lzpBQ1SjY4o?si=AEbAN0858K-YS1Y_"} />
          </div>



        </div>
        <br />
        <div className={cx(styles['gallery'])}>
          
          <div className='Video'>

            <Video embedId={'1GQC4bKlclY?si=idcs9QAISmVOi-li'} />
          </div>
        </div>
        <br />
        


      </main>
    </motion.div>
  )
}

export default Gallery;