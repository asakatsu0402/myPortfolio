// Modules
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

export const Top = () => {
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
      <h1 className="text-crimson absoluteCenter text-6xl">
        <Typewriter
          options={{
            strings: ['Hi! Everyone!', "I'm KATSUYA ASAKURA."],
            autoStart: true,
            loop: true
          }}
        />
      </h1>
    </div>
  )
}
