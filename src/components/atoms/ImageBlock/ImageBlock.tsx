import Image from 'next/image'

import styles from './ImageBlock.module.scss'
import clsx from 'clsx'

type Props = {
  className?: string
  text?: string | number
  src: string
  title?: string
  width?: number
  height?: number
  loading?: 'eager' | 'lazy'
}

export const ImageBlock: React.FC<Props> = ({
  className,
  src,
  title,
  width = 1000,
  height = 1000,
  loading = 'lazy'
}: Props) => {
  return (
    <div className={clsx([className, styles.imageBlock])}>
      <Image
        className={styles.image}
        src={src}
        alt={title}
        title={title}
        width={width}
        height={height}
        loading={loading}
      />
    </div>
  )
}
