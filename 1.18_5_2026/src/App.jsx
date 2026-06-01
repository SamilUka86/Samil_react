import App2 from "./App2"
import App3 from "./App3"
import App4 from "./App4"

import './App.css' 
import hero from './assets/hero.png'

function App() {
  var name='Samil'
  return (
    <>
      <h1>Welcome {name}!</h1>
      <App2/>
      <App3 />
      <App4 />
      <img src="image.png" alt="" style={{ marginInline: 'auto' }} />
      <img src={hero} alt="" />
    </>
  )
}
export default App