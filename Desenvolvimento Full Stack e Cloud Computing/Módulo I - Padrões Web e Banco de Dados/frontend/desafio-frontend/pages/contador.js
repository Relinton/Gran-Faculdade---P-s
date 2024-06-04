import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const contador = () => {

    const [quantidade, setQuantidade] = useState(1)

    function adicionar() {
        setQuantidade(quantidade + 1)
    }

  return (
    <Pagina>
        <h1>Contador = {quantidade}</h1>

        <Button onClick={adicionar}> + </Button>

        <h2 className='mt-3'>{quantidade}</h2>    
    </Pagina>
  )
}

export default contador