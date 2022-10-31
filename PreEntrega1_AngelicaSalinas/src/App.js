import './App.css'
import NavBar from './components/Navbar.js'
import SectionContainer from './components/itemListContainer.js'

// Componente App en terminos de React, en terminos de js es una función
// Función JS, si devuelve un jsx, es un comoponete de react, sino, no es un componete React
const App = () => {
  return (
    <>
    <NavBar logo="images/logo_maitri_white.png" menu1="tienda" menu2="talleres" menu3="noticias" menu4="tribu" />
    <SectionContainer greeting='Reconécta con la magia del corazón, escucha tu intuición y camina con maitri.' />
    </>
  )
}

export default App;