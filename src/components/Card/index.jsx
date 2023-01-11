import styles from './Card.module.css'
import iconeFavoritar from './favorite_outline.png'
import iconeDesfavoritar from './favorite.png'

import React from 'react'
import { useFavoritoContext } from 'context/Favoritos'

export default function Card({id, titulo, capa}) {
  const { favorito, adicionarFavorito} = useFavoritoContext();

  const ehFavorito = favorito.some(fav => fav.id === id) 

  const icone = !ehFavorito ? iconeFavoritar : iconeDesfavoritar;

  return (
    <div className={styles.container}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
        <img 
          src={icone} 
          alt="Favoritar filme" 
          className={styles.favoritar}
          onClick={() => {
            adicionarFavorito({id, titulo, capa})
          }} />
    </div>
  )
}
