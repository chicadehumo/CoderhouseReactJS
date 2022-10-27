import './App.css'
import Header from './components/header.js'
import Body from './components/body.js'

// Componente App en terminos de React, en terminos de js es una función
// Función JS, si devuelve un jsx, es un comoponete de react, sino, no es un componete React
const App = () => {
  return (
    <>
    <Header logo="images/logo_maitri_white.png" menu1="tienda" menu2="talleres" menu3="noticias" menu4="tribu" />
    <Body />
    </>
  )
}

export default App;