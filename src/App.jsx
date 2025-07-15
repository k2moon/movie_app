import { useState } from 'react'
import Movie from './tempcomponent/Movie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello, World!</h1>
      <Movie mname="tomato" />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </>
  )
}

export default App
