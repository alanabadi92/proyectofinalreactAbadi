import React, { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import { Box, Button, Heading, Input, Stack, Text, Link } from '@chakra-ui/react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/Firebase';

const Checkout = () => {
  const [user, setUser] = useState({
    nombre: '',
    telefono: '',
    email: '',
  });


  const { cart, getTotal, clearCart } = useContext(CartContext);

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const getOrder = () => {
    const order = {
        buyer: user,
        items: cart,
        total: getTotal(),
      };

      console.log(order)

      clearCart(); 

      const ordersCollection = collection(db, 'orders');

      addDoc(ordersCollection, order)
        .then(({ id }) => {
          console.log(`Orden de compra generada con el Nº ${id}`);
        })
        .catch((error) => {
          console.error('Error al generar la orden de compra:', error);
        });
  };

  return (
    <>
      <Box>
        <Heading>Resumen de compra:</Heading>
        <Text fontSize={'2rem'} mt={5} mb={5}>Precio Total USD {getTotal()}</Text>
      </Box>
      <form>
        <Stack spacing={3}>
          <Input
            placeholder="Nombre"
            size="lg"
            name="nombre"
            onChange={updateUser}
          />
          <Input
            placeholder="Telefono"
            size="lg"
            name="telefono"
            onChange={updateUser}
          />
          <Input
            placeholder="Email"
            size="lg"
            name="email"
            onChange={updateUser}
          />
          
          <Button onClick={getOrder}>Comprar</Button>
        </Stack>
      </form>
    </>
  );
};

export default Checkout;
