'use client'

import { AnimatePresence, m } from 'framer-motion'
import { useCallback, useState } from 'react'
import { wrap } from 'popmotion'

import styles from './ImagesCarousel.module.scss'
import { FontAwesome } from '@/components/atoms/FontAwesome'
import { Button } from '@/components/atoms/Button'
import { Body } from '@/components/fonts/Body'

type ImageListType = Array<{
  id: number
  title: string
  description: string
  src: string
  information?: string
}>

// TODO ファイル分割する？
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const dammyList: ImageListType = [
  {
    id: 0,
    title: 'test',
    description: 'test',
    src: '/dammy1.jpg',
    information: 'Mt.Fuji, 2023'
  },
  {
    id: 1,
    title: 'test',
    description: 'test',
    src: '/dammy2.jpg'
  }
]

const variants = {
  enter: () => {
    return {
      opacity: 0
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: () => {
    return {
      zIndex: 0,
      opacity: 0
    }
  }
}

export const ImagesCarousel = () => {
  const [images, setImages] = useState<ImageListType>(dammyList)
  const [[page, direction], setPage] = useState<Array<number>>([0, 0])
  const [isShowInfo, setIsShowInfo] = useState<boolean>(false)

  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x)

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1)
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1)
    }
  }

  const handleToggleInfo = useCallback(() => {
    setIsShowInfo(!isShowInfo)
  }, [isShowInfo])

  // TODO アニメーションのふわっと感を出す
  return (
    <div className={styles.imageCarouselWrap}>
      {images[imageIndex].information && (
        <div className={styles.informationBlock}>
          <Button className={styles.infoButton} functions={handleToggleInfo}>
            {isShowInfo ? (
              <FontAwesome icon={['fas', 'circle-xmark']} size="lg" />
            ) : (
              <FontAwesome icon={['fas', 'circle-info']} size="lg" />
            )}
          </Button>

          {isShowInfo && (
            <Body bold className={styles.imageInformation}>
              {images[imageIndex].information}
            </Body>
          )}
        </div>
      )}

      <AnimatePresence initial={false} custom={direction}>
        <m.img
          key={page}
          src={images[imageIndex].src}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30, delay: 0.2, duration: 0.5 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
        />
      </AnimatePresence>

      <div>
        <div className={styles.prev} onClick={() => paginate(-1)}>
          <FontAwesome icon={['fas', 'chevron-right']} size="lg" />
        </div>

        <div className={styles.next} onClick={() => paginate(1)}>
          <FontAwesome icon={['fas', 'chevron-right']} size="lg" />
        </div>
      </div>
    </div>
  )
}
