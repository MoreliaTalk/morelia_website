import * as React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Image from "next/image"

class IndexPage extends React.Component{
    render(){
        return(
            <>
                <Container fluid className="mt-5">
                    <div style={{marginBottom: "100px"}}>
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
                    </div>
                    <Row className="">
                        <Col md={6}>
                            <h1>Безопасный мессенджер</h1>
                            <p>Мы считаем, что ваши данные должны принадлежать вам, и только вам.</p>
                            <p>Благодаря полному шифрованию всех сообщений в чатах, доступ к вашим сообщениям имете лишь вы и те, кто состоит в этом чате.
                                Все сообщения шифруются уникальным ключём, который генерируется при создании чата.</p>
                            <p>Если и этого мало, чтобы вы были уверенны в том, что ваши данные в безопасности,
                                то разверните собственный сервер у себя дома. Для этого достаточно иметь компьютер с доступом в сеть интернет.
                                Таким образом, вы будете иметь физический доступ к своим данным.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default IndexPage