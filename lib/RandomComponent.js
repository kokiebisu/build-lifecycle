import React from 'react'
import styles from './styles.css'

export const RandomComponent = () => {
  return (
    <>
      <style>{`${styles}`}</style>
      <div className="bg">
        <h2 className="text">Hi I am a random component</h2>
      </div>
    </>
  )
}
