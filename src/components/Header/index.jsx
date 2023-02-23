import React, { useState } from "react";

import { HeaderContainer } from './styles/index';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { useMediaQuery } from 'react-responsive';

import Logo from '../../assets/logo.png';

import { Link } from "react-router-dom";

export const Header = ({ itemActive }) => {
    const [showSubmenuSaibaMais, setShowSubmenuSaibaMais] = useState(false);
    const [showMenuMobile, setShowMenuMobile] = useState(false);

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1240px)'
    });

    return (
        <HeaderContainer>
            <Container>
                {
                    !isDesktopOrLaptop ? 
                    <Row>
                        <Col xs={4} className="d-flex align-items-center justify-content-start px-0">
                            <Link to="/">
                                <Image className="logo" src={Logo} alt="Seven Humanitary" fluid />
                            </Link>
                        </Col>
                        <Col xs={8} className="d-flex align-items-center justify-content-end px-0">
                            <Button variant="outline-light" className={`btn-menu ${showMenuMobile && 'active'}`} onClick={() => setShowMenuMobile(!showMenuMobile)}>
                                <span>MENU</span>
                                <div className="burguer"></div>
                            </Button>
                        </Col>
                    </Row>
                    :
                    <Row>
                        <Col md={2} className="d-flex align-items-center justify-content-start">
                            <Link to="/">
                                <Image className="logo" src={Logo} alt="Seven Humanitary" fluid />
                            </Link>
                        </Col>
                        <Col md={10} className="d-flex align-items-center justify-content-end">
                            <ul className="header-menu-list">
                                <li className={`item mx-2 ${itemActive == '/' && 'active'}`}>
                                    <Link to="/">HOME</Link>
                                </li>
                                <li className={`item mx-2 ${itemActive == 'sobre' && 'active'}`}>
                                    <Link to="/sobre">SOBRE</Link>
                                </li>
                                <li className={`item mx-2 ${itemActive == 'voluntarios' && 'active'}`}>
                                    <Link to="/voluntarios">VOLUNTÁRIOS</Link>
                                </li>
                                <li className={`item mx-2 ${itemActive == 'transparencia' && 'active'}`}>
                                    <Link to="/transparencia">TRANSPARÊNCIA</Link>
                                </li>
                                <li className={`item mx-2 ${itemActive == 'transforme-vidas' && 'active'}`}>
                                    <Link to="/transforme-vidas">TRANSFORME VIDAS</Link>
                                </li>
                                <li className={`item mx-2 position-relative ${itemActive == 'saiba-mais' && 'active'}`}>
                                    <a onClick={() => setShowSubmenuSaibaMais(!showSubmenuSaibaMais)}>SAIBA MAIS { showSubmenuSaibaMais ? <IoIosArrowUp fontSize="18px" /> : <IoIosArrowDown fontSize="18px" /> }</a>
                                    <ul className={`submenu-saiba-mais ${showSubmenuSaibaMais && 'active'}`}>
                                        <li className="item">
                                            <Link to="/saiba-mais/numeros">A 7 EM NÚMEROS</Link>
                                        </li>
                                        <li className="item">
                                            <Link to="/saiba-mais/noticias">NOTÍCIAS</Link>
                                        </li>
                                        <li className="item">
                                            <Link to="/saiba-mais/curiosidades">CURIOSIDADES</Link>
                                        </li>
                                        <li className="item">
                                            <Link to="/saiba-mais/finalidades">FINALIDADES</Link>
                                        </li>
                                        <li className="item">
                                            <Link to="/saiba-mais/politica-de-privacidade">PRIVACIDADE</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`item mx-2 ${itemActive == 'doe' && 'active'}`}>
                                    <Link to="/doe">DOE AMOR!</Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                }
                {
                    !isDesktopOrLaptop &&
                    <ul className={`header-menu-list mobile ${showMenuMobile && 'active'}`}>
                        <li className={`item mx-2 ${itemActive == '/' && 'active'}`}>
                            <Link to="/">HOME</Link>
                        </li>
                        <li className={`item mx-2 ${itemActive == 'sobre' && 'active'}`}>
                            <Link to="/sobre">SOBRE</Link>
                        </li>
                        <li className={`item mx-2 ${itemActive == 'voluntarios' && 'active'}`}>
                            <Link to="/voluntarios">VOLUNTÁRIOS</Link>
                        </li>
                        <li className={`item mx-2 ${itemActive == 'transparencia' && 'active'}`}>
                            <Link to="/transparencia">TRANSPARÊNCIA</Link>
                        </li>
                        <li className={`item mx-2 ${itemActive == 'transforme-vidas' && 'active'}`}>
                            <Link to="/transforme-vidas">TRANSFORME VIDAS</Link>
                        </li>
                        <li className={`item mx-2 position-relative ${itemActive == 'saiba-mais' && 'active'}`}>
                            <a onClick={() => setShowSubmenuSaibaMais(!showSubmenuSaibaMais)}>SAIBA MAIS { showSubmenuSaibaMais ? <IoIosArrowUp fontSize="18px" /> : <IoIosArrowDown fontSize="18px" /> }</a>
                            <ul className={`submenu-saiba-mais mt-3 ${showSubmenuSaibaMais && 'active'}`}>
                                <li className="item">
                                    <Link to="/saiba-mais/numeros">A 7 EM NÚMEROS</Link>
                                </li>
                                <li className="item">
                                    <Link to="/saiba-mais/noticias">NOTÍCIAS</Link>
                                </li>
                                <li className="item">
                                    <Link to="/saiba-mais/curiosidades">CURIOSIDADES</Link>
                                </li>
                                <li className="item">
                                    <Link to="/saiba-mais/finalidades">FINALIDADES</Link>
                                </li>
                                <li className="item">
                                    <Link to="/saiba-mais/politica-de-privacidade">PRIVACIDADE</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`item mx-2 ${itemActive == 'doe' && 'active'}`}>
                            <Link to="/doe">DOE AMOR!</Link>
                        </li>
                    </ul>
                }
            </Container>
        </HeaderContainer>
    )
}