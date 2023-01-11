import styles from './Card.module.css'
import iconeFavoritar from './favorite_outline.png'

import React from 'react'

export default function Card({id, titulo, capa}) {
  return (
    <div className={styles.container}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
        <img src={iconeFavoritar} alt="Favoritar filme" className={styles.favoritar} />
    </div>
  )
}
