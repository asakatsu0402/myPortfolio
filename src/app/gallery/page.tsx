import { ImageListWrap } from '@/components/organism/gallery/ImageListWrap/ImageListWrap'

import styles from './Gallery.module.scss'

const Gallery = async (): Promise<JSX.Element> => {
  return (
    <main className={styles.main}>
      <ImageListWrap />
    </main>
  )
}

export default Gallery
