import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>The AppName</h1>
      {/* Even after using a .btn style here we are not colliding with .btn class of Button.jsx */}
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header