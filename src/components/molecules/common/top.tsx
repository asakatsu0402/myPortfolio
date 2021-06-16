// Modules
import React from "react"
import Image from "next/image"
// Images
// import topImage from "./topImage.png"
// Styles
import styles from '../../../styles/Home.module.scss'

export const Top = () => {
  // *************** JSX *************** //
  return (
    <div className={styles.homeTop}>
      <h1 className="font-bold text-5xl">
        KATSUYA ASAKURA
      </h1>
      {/*<Image*/}
      {/*  src={topImage}*/}
      {/*  alt="test"*/}
      {/*  width="300"*/}
      {/*  height="333"*/}
      {/*/>*/}
    </div>
  )
}