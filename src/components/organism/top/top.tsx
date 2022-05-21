// Modules
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Typewriter from 'typewriter-effect'
// Components
import { H1 } from '../../fonts/H1.font'

export const Top: React.VFC = () => {
  // *************** Const *************** //
  const { t } = useTranslation()

  // *************** JSX *************** //
  return (
    <div className="mx-auto">
      <div className="relative">
        <Image
          className="object-contain"
          src="/topImage.png"
          alt="test"
          width="1500"
          height="1000"
        />
      </div>
      <H1 bold className="text-crimson absoluteCenter text-6xl">
        <Typewriter
          options={{
            strings: [t('top:helloUser'), t('top:introduce')],
            autoStart: true,
            loop: true
          }}
        />
      </H1>
    </div>
  )
}
