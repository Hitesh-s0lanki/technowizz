import { Button, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { arr } from '../question/app'

const Question = (props) => {
    
    let index = 0

  return (
    <div className='rounded-lg drop-shadow-2xl mx-20 bg-white p-3'>
        <div className="main p-3">
            <Heading padding={1}>{arr[index].question[0]}</Heading>
            <Text fontSize='md' padding={1}>{arr[index].question[1]}</Text>
        </div>
        <div className="changeQuestion flex justify-between">
            <Button colorScheme='teal' size='lg' variant='outline' disabled={index === 0}>Prev</Button>
            <Button colorScheme='green' alignContent='right' size='lg'>Next</Button>
        </div>
    </div>
  )
}

export default Question
