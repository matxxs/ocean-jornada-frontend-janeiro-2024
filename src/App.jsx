import './App.css'
import Card from './components/Card/Card'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card item={item1} />
      <Card item={item2} />
    </>
  )
}

export default App
