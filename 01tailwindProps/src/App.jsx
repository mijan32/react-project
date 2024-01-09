

import './App.css'
import Card from './components/card'
let myObj={
  neme:"Mijan",
  age:25,
  Gender:"M"
}
function App() {

  return (
    <>
    <Card userData= {myObj} name='Mijan' />
    <Card/>
    </>
  )
}

export default App
