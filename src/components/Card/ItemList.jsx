import Card from "./Card"

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
  
  const itens = [item1, item2, item3]

function ItemList() {
  return (
    <>
        {itens.map(function (item) {
            return <Card item = {item}  key={item.name} />
        })}
    </>
  )
}

export default ItemList;