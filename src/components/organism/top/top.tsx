'use client'

import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

import { H1 } from '../../fonts/H1'

export const Top: React.FC = () => {
  const { t } = useTranslation()

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
