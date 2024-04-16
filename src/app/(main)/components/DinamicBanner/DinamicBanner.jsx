import Image from 'next/image';
import styles from './DinamicBanner.module.css';

function DinamicBanner({ imageSrc, title, message, customStyles }) {
    return (
        <div className={`${styles.desktopContainer} ${customStyles.desktopContainer}`}>
            <section className={`${styles.banner} ${customStyles.banner}`} role='banner'>
            <Image
  width={100}
  height={100}
  alt='banner image'
  src={imageSrc}
  layout='responsive' // Asegura que la imagen sea responsive
  objectFit='cover' // Mantiene la relación de aspecto y cubre el área del contenedor
  className={`${styles.bannerImg} ${customStyles.bannerImg}`}
/>


            </section>

            <div className={`${styles.bannerTextBox} ${customStyles.bannerTextBox}`}>
   
                    <h1 className={`${styles.bannerTitle} ${customStyles.bannerTitle}`}>{title}</h1>
                    <span className={`${styles.bannerMessage} ${customStyles.bannerMessage}`}>{message}</span>
               
            </div>
        </div>
    );
}

export default DinamicBanner;
