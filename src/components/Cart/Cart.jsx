import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button, Heading, Flex, Link as ChakraLink, Divider } from '@chakra-ui/react'
import { Link as ReactRouterLink} from 'react-router-dom'

const Cart = () => {
    const { cart, getTotal, deleteItem, clearCart} = useContext(CartContext)

    if(cart.length === 0) {
        return (
            <Flex justify={'center'} align={'center'} direction={'column'} mt={10}>
                <Text fontSize={'2rem'}>No hay productos en el Carrito</Text>
                <ChakraLink as={ReactRouterLink} fontSize={'rem'} to='/'>Ver productos</ChakraLink>
            </Flex>
        )
    }else{

        return (
          <>
            <TableContainer>
              <Table variant='striped' colorScheme='skyblue'>
                <Thead>
                  <Tr>
                    <Th>Producto</Th>
                    <Th>Cantidad</Th>
                    <Th>Precio unitario</Th>
                    <Th>Subtotal</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                {
                  cart.map((prod) => (
                      <Tbody key={prod.id}>
                        <Tr>
                            <Td>{prod.nombre}</Td>
                            <Td>{prod.quantity}</Td>
                            <Td>{prod.precio}</Td>
                            <Td>{prod.quantity * prod.precio}</Td>
                            <Td><Button onClick={() => deleteItem(prod.id)}>Eliminar</Button></Td>
                        </Tr>
                      </Tbody>
                ))
                }
              </Table>

            </TableContainer>

            <Flex justify={'space-around'} align={'center'} width={'70%'} mx="auto" mt={5}>
              <Text fontSize={'2rem'} >Precio total: USD {getTotal()}</Text>
              <Button onClick={()=>clearCart()}>Vaciar carrito</Button>
              <ChakraLink as={ReactRouterLink} to={'/checkout'}>Finalizar la compra</ChakraLink>
            </Flex>

            <Divider mt={5} border={'solid'} />
          </>
  )
}
}

export default Cart
