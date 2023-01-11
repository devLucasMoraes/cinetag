import Banner from "components/Banner";
import Cabecalho from "components/Cabecalho";
import Card from "components/Card";
import Rodape from "components/Rodape";
import Titulo from "components/Titulo";


export default function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem="home"/>
      <Titulo><h1>Um lugar para guardar seus vídeos e filmes</h1></Titulo>
      <Card id='1' titulo='lucas' capa='https://avatars.githubusercontent.com/u/104109951?v=4' />
      <Rodape />
    </>
  )
}
