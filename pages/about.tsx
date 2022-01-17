import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

class AboutPage extends React.Component{
    render() {
        return (
            <Container fluid>
                <Row md={4}>
                    <Col>
                        <h1>О нас</h1>
                        <p>
                            Мы - сообщество независимых разработчиков со всего мира(хотя, конечно, по большей части из стран СНГ).
                            Наше сообщество, как собственно и проект, появилось в июне 2020 года.
                            После прохождения интенсива по разработке мессенджера на Python,
                            группа энтузиастов решила двигаться дальше, и продолжила разработку мессенджера.
                        </p>
                        <p>
                            <b>Основные разработчики:</b>
                        </p>
                        <Row>
                            <Col md={12}>
                                <h1>
                                    <a href={"https://github.com/NekrodNIK"}><Image
                                        className="rounded-circle"
                                        src="https://avatars.githubusercontent.com/u/60639354?v=4"
                                        width={100}
                                        height={100}/></a>
                                    &nbsp;
                                    NekrodNIK
                                </h1>
                            </Col>
                            <Col md={12}>
                                <h1>
                                    <a href="https://github.com/stepanskryabin"><Image
                                        className="rounded-circle"
                                        src="https://avatars.githubusercontent.com/u/47498917?v=4"
                                        width={100}
                                        height={100}/></a>
                                    &nbsp;
                                    Stepan Scriabin
                                </h1>
                            </Col>
                            <Col md={12}>
                                <h1>
                                    <a href="https://github.com/rus-ai"><Image
                                        className="rounded-circle"
                                        src="https://avatars.githubusercontent.com/u/67479455?v=4"
                                        width={100}
                                        height={100}/></a>
                                    &nbsp;
                                    rus-ai
                                </h1>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AboutPage;