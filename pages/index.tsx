import * as React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Image from "next/image"

class IndexPage extends React.Component{
    render(){
        return(
            <>
                <Container fluid className="mt-5">
                    <Row className="justify-content-center text-center mb-2">
                        <Col md="auto">
                            <Image
                                src="/cobra-colored.svg"
                                width="200"
                                height="200"
                            />
                        </Col>
                    </Row>
                    <Row className="justify-content-center text-center"><Col>
                        <h1 style={{fontSize: "5rem", fontWeight: "600"}}>MoreliaTalk</h1>
                    </Col></Row>
                    <Row className="justify-content-center text-center mb-2"><Col md={"4"}>
                        <p style={{fontSize: "1.5rem"}}>
                            Быстрый и безопасный мессенджер с открытым исходным кодом,
                            написанный на <span style={{fontWeight: "600"}}>Python</span>
                        </p>
                    </Col></Row>
                    <Row className="justify-content-center text-center"><Col md={"auto"}>
                        <Button size="lg" href="/download">Скачать</Button>
                    </Col></Row>
                </Container>
            </>
        )
    }
}

export default IndexPage