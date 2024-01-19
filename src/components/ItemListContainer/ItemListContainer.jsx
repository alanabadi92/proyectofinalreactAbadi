import { Box, Flex, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import LoaderComponent from '../LoaderComponent/LoaderComponent'
import { collection, where, query, getDocs } from 'firebase/firestore'
import { db } from '../../config/Firebase'

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState (true);
  const {category} = useParams ();

  
  useEffect(() => {
    setIsLoading(true)
    const getData = async () => {

        const queryRef = !category ? collection(db, 'productos') : 
        query(collection(db, 'productos'), where('categoria', '==', category))
        
        const response = await getDocs(queryRef)

        const products = response.docs.map((doc) => {
            const newProduct = {
                ...doc.data(),
                id: doc.id
            }
            return newProduct
        })
        setTimeout(() => {
            setData(products)
            setIsLoading(false)
        },1000)
    }
    getData()
}, [category])
  
  //Forma vieja con asyncMock
  /* useEffect(()=>{
    
    const getData = async () =>{
      try {
        setIsLoading (true)
        let datosObtenidos
        
        if (category) {
          datosObtenidos = await getProductsByCategory(category) 
        } else {
          datosObtenidos = await getProducts()
        }
        
        setData(datosObtenidos)

      } catch (error) {
        console.error("Error al cargar los datos",error)
      }

      finally {
        setIsLoading(false)
      }
    }

    getData()
    
  },[category]) */

  return (
    
    
    <Flex direction="column" justify="center" align="center" m={4}>
      <LoaderComponent loading={isLoading}/>
      
      {!isLoading &&(
      <>
        <Heading>{category}</Heading>
        <ItemList data={data} />
      </>)}

    </Flex>
  );
};

export default ItemListContainer;