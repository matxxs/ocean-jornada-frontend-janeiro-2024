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

  return (
    <>
      <Card />
      <Card />
    </>
  )
}

export default App
