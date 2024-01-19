import React from 'react'
import { Link as ChakraLink, Card, Stack, Text, CardBody, CardFooter, Image, Heading, Divider, Button } from '@chakra-ui/react'
import { Link as ReactRouterLink  } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'


const ItemDetail = ({id, nombre, precio, stock, descripcion, img}) => {

  const [quantity, setQuantity] = useState(0)
  const {addItem} = useContext (CartContext)

  const onAdd = (quantity) => {
      setQuantity(quantity)
      const newProduct = {
        id, nombre, precio,
      }
      addItem(newProduct, quantity)
      console.log(`Agregaste ${quantity} unidades del siguiente producto:`)
      console.log (newProduct)
      
  }

  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={img}
        alt={nombre}
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{nombre}</Heading>
          <Text py='2'>{descripcion}</Text>
          <Text py='2'>USD {precio}</Text>

        </CardBody>
        <Divider/>
        <CardFooter>
          
          {quantity > 0  ? <ChakraLink as={ReactRouterLink}  to={'/cart'} color='teal.500' mr={5}><Button variant='solid' colorScheme='orange'>Ver carrito</Button></ChakraLink> :
            <ItemCount initialValue={1} stock={stock} onAdd={onAdd}/>
          }
          <ReactRouterLink to={'/'}><Button variant='ghost' colorScheme='blue'>Volver</Button></ReactRouterLink>
          
        </CardFooter>
      </Stack>

    </Card>
  )
}

export default ItemDetail