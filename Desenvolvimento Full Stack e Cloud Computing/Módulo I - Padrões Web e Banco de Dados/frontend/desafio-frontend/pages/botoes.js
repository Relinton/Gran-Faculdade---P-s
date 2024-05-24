import Pagina from '@/components/Pagina'
import React from 'react'
import { Button } from 'react-bootstrap'

const botoes = () => {
    return (
        <Pagina>
            <div>botoes</div>

            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
        </Pagina>
    )
}

export default botoes