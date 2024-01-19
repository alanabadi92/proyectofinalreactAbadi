import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import { Box } from '@chakra-ui/react';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/Firebase'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  const { itemId } = useParams();

  useEffect(() => {
        setIsLoading(true)
        const getProduct = async() => {
          const queryRef = doc(db, 'productos', itemId)

          const response = await getDoc(queryRef)

          const newProduct = {
            id: response.id,
            ...response.data()
          }

          setTimeout(() => {
            setProduct(newProduct)
            setIsLoading(false)
          },500)
        } 
        getProduct()
    }, [itemId])

  //Forma vieja con asyncMock
  /* useEffect(() => {
    
    getProductById(itemId)
      .then((prod) => {setProduct(prod); setIsLoading(false)})
      .catch((error) => {console.error('Error al obtener el producto:', error)});
      
  }, [itemId]); */

  return (
    
    <Box>
      <LoaderComponent loading={isLoading}/>
      {!isLoading &&(
        <ItemDetail {...product} />
      )}
    </Box>
    
  )
};

export default ItemDetailContainer;
