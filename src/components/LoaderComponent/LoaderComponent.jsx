import React from 'react'
import { Spinner, Box, Text } from '@chakra-ui/react'

const LoaderComponent = ({loading}) => {
  
  if (loading) {
        return (
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="70vh"
            >
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
            <Text ml={2}>Cargando...</Text>
        </Box>
        )
    }
    
}

export default LoaderComponent