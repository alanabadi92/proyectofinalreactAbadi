// Item.jsx
import React from 'react';
import { Card, Stack, Text, CardBody, CardFooter, Image, Heading, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, stock }) => {
  return (

        <Card maxW='sm'>
            <CardBody>
                <Image  borderRadius='lg' objectFit='cover'  h='400px' alt={nombre} src={img}/>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{nombre}</Heading>
                    <Text color='blue.600' fontSize='2xl'>USD {precio}</Text>
                    <Text color='orange' fontSize='sm' >Stock: {stock}</Text>
                </Stack>
            </CardBody>
            
            <Divider />
            
            <CardFooter >
                <ButtonGroup spacing='2'>
                    <Link to={`/product/${id}`}><Button variant='solid' colorScheme='orange'>Ver más</Button></Link>
                </ButtonGroup>
            </CardFooter>
        
        </Card>

  );
};

export default Item;


/* Item recibe las propiedades específicas de un producto (nombre, precio, img).
Renderiza la presentación visual del producto, que incluye una imagen, el nombre y el precio.
Cada producto individual se muestra como un componente Flex que contiene la imagen y la información del producto.
Al estructurar tu código de esta manera, logras una separación clara de responsabilidades. ItemList se encarga de cómo se muestra la lista de productos, mientras que Item se ocupa de cómo se presenta y muestra cada producto individualmente. Esto facilita la reutilización y el mantenimiento del código en el futuro. */