import styles from './Favoritos.module.css'

import React from 'react'
import Banner from 'components/Banner'
import Titulo from 'components/Titulo'

import videos from 'json/db.json'
import Card from 'components/Card'

export default function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo><h1>Meus favoritos</h1></Titulo>
      <section className={styles.container}>
        {videos.map(video => {
          return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  )
}
