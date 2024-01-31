import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {

  const [itens, setItens] = useState([])

  // Carregamento de dados via API (Backend)
  async function loadApiData() {
    // Declarar a URL da API
    const apiUrl = 'https://rickandmortyapi.com/api/character/'

    // Preparar e Executar a Requisição
    const response = await fetch(apiUrl)

    //console.log(response)
    const body = await response.json()

    // Extrair a propriedade results do body
    // Essa propriedade contém a lista de itens
    const results = body.results

    // Atualiza o estado "itens" com os resultados da API
    setItens(results)
  }

  useEffect(function(){
    // Chamando a função que carrega dados da API
    loadApiData()
  }, [])

  return (
    <>
      <div className='cards'>
        {/* <Card item={item1} />
        <Card item={item2}  />
        <Card item={item3}  /> */}

        {itens.map((item, index) => <Card item={item} key={index} />)}

      </div>
    </>
  )
}

export default App