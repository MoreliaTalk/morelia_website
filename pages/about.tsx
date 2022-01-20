import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

class AboutPage extends React.Component{
    render() {
        return (
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>О нас</h1>
                        <p>
                            Мы - сообщество независимых разработчиков со всего мира (хотя, конечно, по большей части из стран СНГ).
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
                                    Stepan Skriabin
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
                    <Col md={6}>
                        <h1>О MoreliaTalk</h1>
                        <p>
                            MoreliaTalk - это мессенджер с клиент-серверной архитектурой.
                            Сервер и клиенты можно использовать как встраиваемое решение для быстрого развёртывания функционала
                            современного чата (Slack, Telegram или WatsApp) в своём проекте, так и в личных целях.
                            Сервер написан на языке Python. Клиенты используют разные технологии для охвата как можно
                            большего количества платформ.
                        </p><p>
                            Основные принципы на которых строится разработка мессенджера MoreliaTalk:
                            <ul>
                                <li>исходный код проекта всегда открыт</li>
                                <li>дать пользователю право настраивать какими данными он хочет делится</li>
                                <li>вся информация передаваемая между клиентом и сервером зашифрована</li>
                                <li>не иметь встроенных инструментов слежения за пользователем</li>
                                <li>не собирать данные о пользователе</li>
                            </ul>
                        </p>
                        <p>
                            Вся разработка ведётся в репозиториях на <a href="https://github.com/MoreliaTalk">GitHub</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AboutPage;