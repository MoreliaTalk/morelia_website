import * as React from "react";
import {Button, Col, Container, Image, Row} from "react-bootstrap";

class IndexPage extends React.Component{
    render(){
        return(
            <>
                <Container fluid className="mt-5">
                    <div className="mb-5">
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
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <h1>Безопасный</h1>
                            <p>Мы считаем, что ваши данные должны принадлежать вам, и только вам.</p>
                            <p>Благодаря полному шифрованию всех сообщений в чатах, доступ к вашим сообщениям имете лишь вы и те, кто состоит в этом чате.
                                Все сообщения шифруются уникальным ключём, который генерируется при создании чата.</p>
                            <p>Если и этого мало, чтобы вы были уверенны в том, что ваши данные в безопасности,
                                то разверните собственный сервер у себя дома. Для этого достаточно иметь компьютер с доступом в сеть интернет.
                                Таким образом, вы будете иметь физический доступ к своим данным.
                            </p>
                        </Col>
                        <Col md={2}>
                            <h1>Быстрый</h1>
                            <p>
                                Благодаря использованию протокола связи WebSocket, а также ассинхронности, наш мессенджер очень быстрый.
                                Ваши сообщения мгновенно будут отправлены их адресатам. Минимум задержки и максимум скорости!
                            </p>
                        </Col>
                        <Col md={3}>
                            <h1>Открытый исходный код</h1>
                            <p>
                                Код нашего мессенджера полностью открыт. Это означает, что мы ничего не прячем от вас,
                                и ЛЮБОЙ человек может помочь нам в разработке MoreliaTalk. Или, если захочет,
                                то сможет создать на его основе свой мессенджер. Наш сервер,
                                а также некоторые библиотеки лицензированы по LGPL v3.0,
                                а клиенты - по GPL v3.0
                            </p>
                        </Col>
                        <Col md={3}>
                            <h1>Python</h1>
                            <p>
                                Наш сервер, а также основные клиенты написаны на Python,
                                самом гибком и удобном языке в мире. Использование этого языка даёт
                                безграничные возможности для внедрения разнообразных фишек,
                                которые отсутвуют в других мессенджерах.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default IndexPage