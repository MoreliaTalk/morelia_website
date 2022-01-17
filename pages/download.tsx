import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Image} from "react-bootstrap";

class DownloadPage extends React.Component{
    render() {
        return (
            <Container fluid className="p-3">
                <Row className="justify-content-center g-3">
                    <Col md={"6"}>
                        <Card.Img src="./desktop_client.png" variant="top"/>
                        <Card><Card.Body>
                            <Card.Title>Клиент для ПК</Card.Title>
                            <Card.Text>
                                <p>Клиент для ПК, написан на Python и QT</p>
                                <p>
                                    Поддерживаемые ОС:<br/>
                                    Windows, MacOS, Linux
                                </p>
                            </Card.Text>
                            <Card.Link>
                                <Button href="https://github.com/MoreliaTalk/morelia_client_qt/releases/">Скачать</Button>
                            </Card.Link>
                        </Card.Body></Card>
                    </Col>
                    <Col md={"6"}>
                        <Card className="mb-3"><Card.Body>
                            <Card.Title>Сервер</Card.Title>
                            <Card.Text>
                                Если вы хотите развернуть свой собственный сервер MoreliaTalk
                                - то переходите по ссылке и следуйте инструкциям. Поверьте, это проще,
                                чем кажется на первый взгляд!
                            </Card.Text>
                            <Card.Link>
                                <Button href="https://github.com/MoreliaTalk/morelia_server/releases/">Перейти</Button>
                            </Card.Link>
                        </Card.Body></Card>
                        <Card className="mb-3"><Card.Body>
                            <Card.Title>Клиент для мобильных устройств</Card.Title>
                            <Card.Text>
                                В разработке
                            </Card.Text>
                        </Card.Body></Card>
                        <Card><Card.Body>
                            <Card.Title>Web-клиент</Card.Title>
                            <Card.Text>
                                В разработке
                            </Card.Text>
                        </Card.Body></Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DownloadPage;