'use client'

import clsx from 'clsx'
import { m } from 'framer-motion'

import { LanguagesModal } from '../molecules/LanguagesModal.molecule'

import { Footer } from './Footer/Footer'
import { Header } from './header'
import styles from './layout.module.scss'

import type { LayoutType } from '../../types/templateTypes'

export const Layout: React.FC<LayoutType> = ({ children, className, flex }: LayoutType) => (
  <div className={styles.layout}>
    <Header />

    <m.div
      className={clsx(['overflow-y-scroll', className, flex ? 'flex flex-grow' : ''])}
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
