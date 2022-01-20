import Link from "next/link";
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
                                    src="cobra-colored.svg"
                                    width="200"
                                    height="200"
                                />
                            </Col>
                        </Row>
                        <Row className="justify-content-center text-center"><Col>
                            <h1 className="fw-bold display-2">MoreliaTalk</h1>
                        </Col></Row>
                        <Row className="justify-content-center text-center mb-2"><Col md={"4"}>
                            <p style={{fontSize: "1.5rem"}}>
                                Быстрый и безопасный мессенджер с открытым исходным кодом,
                                написанный на <span style={{fontWeight: "600"}}>Python</span>
                            </p>
                        </Col></Row>
                        <Row className="justify-content-center text-center"><Col md={"auto"}>
                            <Link href="/download" passHref><Button size="lg">Скачать</Button></Link>
                        </Col></Row>
                    </div>
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <h1>Безопасный</h1>
                            <p>Мы считаем, что ваши данные должны принадлежать вам, и только вам.</p>
                            <p>Благодаря полному шифрованию всех сообщений в чатах, доступ к вашим сообщениям имете лишь вы и те кому вы доверяете.
                                Все сообщения шифруются уникальным ключём, который генерируется при создании чата.</p>
                            <p>Если и этого мало, чтобы вы были уверенны в том, что ваши данные в безопасности,
                                то разверните собственный сервер у себя дома. Для этого достаточно иметь компьютер с доступом в сеть интернет.
                                Таким образом, вы будете иметь физический доступ к своим данным.
                            </p>
                        </Col>
                        <Col md={2}>
                            <h1>Быстрый</h1>
                            <p>
                                Благодаря использованию асинхронного протокола WebSocket, наш мессенджер очень быстрый.
                                Ваши сообщения мгновенно будут отправлены их адресатам. Минимум задержки и максимум скорости!
                            </p>
                        </Col>
                        <Col md={3}>
                            <h1>Открытый исходный код</h1>
                            <p>
                                Код нашего мессенджера полностью открыт. Это означает, что мы ничего не прячем от вас.
                                Ведь основной принцип защиты информации - это использование открытых алгоритмов защиты.
                                ЛЮБОЙ человек может изучить исходные тексты MoreliaTalk. Или, если захочет, даже поучавствовать
                                в его разработке или создать свой мессенджер на основа MoreliaTalk.
                                Сервер и часть библиотек лицензированы по LGPL v3.0, клиенты - по GPL v3.0.
                            </p>
                        </Col>
                        <Col md={3}>
                            <h1>Python</h1>
                            <p>
                                Наш сервер, а также основные клиенты написаны на Python,
                                самом гибком и удобном языке в мире. Использование этого языка даёт
                                возможность быстрого внедрения разнообразных фишек, которые отсутвуют в других мессенджерах.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default IndexPage