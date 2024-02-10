import styles from './ImageListWrap.module.scss'
import { ImagesCarousel } from '../ImagesCarousel/ImagesCarousel'

export const ImageListWrap = () => {
  return (
    <div className={styles.imageListWrap}>
      <ImagesCarousel />
    </div>
  )
}
