import { useState, useContext } from 'react'
import './App.css'
import Title from './components/Title/Title'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ChakraProvider} from '@chakra-ui/react'
import { CartContextProvider } from './context/CartContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartContextProvider>
    <ChakraProvider>

     

      <BrowserRouter>
        
        <Title/>
        <NavBar/>
        
        <Routes>
          <Route path='/' element={<ItemListContainer title="Bienvenide"/>}/>
          <Route path={'/product/:itemId'} element ={<ItemDetailContainer/>}/>
          <Route path={'/category/:category'} element ={<ItemListContainer/>}/>
          <Route path={'/cart'} element ={<Cart/>}/>
          <Route path={'/checkout'} element ={<Checkout/>}/>
        </Routes>
      </BrowserRouter>

      
      
    </ChakraProvider>
    </CartContextProvider>
  )
}

export default App
