import './App.css'
import Card from './components/Card/Card'

function App() {

  const item1 = {
    name: 'Rick Sanchez',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' 
  }

  const item2 = {
    name: 'Morty Smith',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' 
  }

  const item3 = {
    name: 'Summer Smith',
    imageUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg' 
  }
  
  const itens = [item1,item2,item3]

  // Carregamento de dados via API (Backend)
  async function loadApiData (){
    //Declarar a URL da API
  const apiUrl = 'https://rickandmortyapi.com/api/character/'

    // Preparar e Executar a Requisição
  const response = await fetch(apiUrl)

  const body = await response.json()
  console.log(body)

  const results = body.results
  }

  // Chamando a função que carrega dados da API
  loadApiData ()

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
