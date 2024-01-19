// ItemList.jsx
import React from 'react';
import Item from '../Item/Item'; // Importa el componente Item
import { Box, Flex } from '@chakra-ui/react';

const ItemList = ({ data }) => {
  return (
    <Flex flexWrap="wrap" justifyContent="space-around">
      {data.map((product) => (
        <Box key={product.id} boxShadow="lg" m={2} maxW="sm" minW="sm">
          {/* Renderiza el componente Item con las propiedades del producto */}
            <Item
                id={product.id}
                nombre={product.nombre}
                precio={product.precio}
                img={product.img}
                stock={product.stock}
            />
        </Box>
      ))}
    </Flex>
  );
};

export default ItemList;

/* ItemList recibe un prop llamado data que contiene el array de productos.
Utiliza map para iterar sobre cada producto en data y renderiza un componente Item para cada producto.
La estructura visual de cada producto (caja, sombra, etc.) se maneja aquí, mientras que la presentación específica de cada producto se delega a Item. */