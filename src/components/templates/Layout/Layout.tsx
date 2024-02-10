'use client'

import type { ReactNode } from 'react'

import clsx from 'clsx'
import { m } from 'framer-motion'

import { LanguagesModal } from '../../molecules/LanguagesModal/LanguagesModal'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'

import styles from './Layout.module.scss'

type Props = {
  children?: ReactNode
  className?: string
  title?: string
  flex?: boolean
}

export const Layout: React.FC<Props> = ({ children, className, flex }: Props) => (
  <div className={styles.layout}>
    <Header />

    <m.div
      className={clsx([styles.mainWrap, className])}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={{
        hidden: { opacity: 0, x: 0, y: 50 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -50 }
      }}
      transition={{ type: 'spring', delay: 0.2, duration: 0.8 }}
    >
      {children}
    </m.div>

    <Footer />

    <LanguagesModal />
  </div>
)
