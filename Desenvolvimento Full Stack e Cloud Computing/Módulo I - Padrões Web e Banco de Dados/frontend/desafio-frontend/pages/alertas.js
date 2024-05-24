import Pagina from '@/components/Pagina'
import React from 'react'
import { Alert } from 'react-bootstrap'

const alertas = () => {
    return (
        <Pagina>
            <h1>alertas</h1>
            <Alert>Mensagem de sucesso</Alert>
            <Alert variant='danger'>Mensagem de sucesso</Alert>
        </Pagina>
    )
}

export default alertas