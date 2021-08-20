// Modules
import { motion } from 'framer-motion'
// Components
import { PageHead } from './pageHead'
import { Header } from './header'
import { Footer } from './footer'
// Interfaces
import { LayoutType } from '../interfaces/molecules/molecules'

export const Layout = ({ children, className, title, flex }: LayoutType) => {
  // *************** JSX *************** //
  return (
    <div className="flex flex-col justify-between h-full">
      <PageHead title={title} />
      <Header />
      <div
        className={`
        overflow-y-scroll ${className}
        ${flex ? 'flex flex-grow min-h-0 h-full w-full' : ''}
        `}
      >
        <motion.div
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
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
