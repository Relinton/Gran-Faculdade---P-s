import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Pagina = (props) => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">Front-End</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Inicial</Nav.Link>
                        <Nav.Link href="/alertas">Alertas</Nav.Link>
                        <Nav.Link href="/botoes">Botões</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Container className='mt-3'>
                {props.children}
            </Container>
        </>
    )
}

export default Pagina