import React from 'react'
import useCounter from '../../hooks/useCounter'
import { Button, Heading,Flex } from '@chakra-ui/react'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, increment, decrement } = useCounter(initialValue, stock)

  return (
    <Flex justify={'space-around'} align={'center'} ml={2} w={'100%'}>
          <Button colorScheme='blue' onClick={decrement}>-</Button>
          <Heading>{count}</Heading>
          <Button colorScheme='blue' onClick={increment}>+</Button>
          <Button colorScheme='orange'onClick={()=> onAdd(count)}>Agregar al carrito</Button>
    </Flex>
  )
}

export default ItemCount
