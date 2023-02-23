import React from "react";
import { FooterContainer } from "./styles/index";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { BiMap } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { MdLocalPhone } from "react-icons/md";
import { CiMicrophoneOn } from "react-icons/ci";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { SlSocialTwitter } from "react-icons/sl";

import Logo from "../../assets/logo_seven_humanitarian.svg";

import { useMediaQuery } from 'react-responsive';

export const Footer = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1240px)'
    });

    return (
        <FooterContainer>
            <Row className={`py-4 d-flex align-items-center justify-content-center ${!isDesktopOrLaptop && 'm-0'}`}>
                <Col xs="5" lg="2">
                    <Image className="logo" src={Logo} alt="Seven Humanitary" fluid />
                </Col>
                <Col xs="7" lg="3" className={`${!isDesktopOrLaptop && 'm-0 px-0'}`}>
                    <div className="footer-infos-wrapper w-100">
                        <Row>
                            <Col xs="12">
                                <div className="footer-infos-title">CONTATO</div>
                            </Col>
                            <Col xs="12" className="mt-2">
                                <div className="footer-infos-text">
                                    <BiMap fontSize={isDesktopOrLaptop ? 22 : 18} /> Porto Alegre, RS
                                </div>
                            </Col>
                            <Col xs="12" className="mt-2">
                                <div className="footer-infos-text">
                                    <a href="mailto: contato@seven.com.br">
                                        <GoMail fontSize={isDesktopOrLaptop ? 22 : 18} /> contato@seven.com.br
                                    </a>
                                </div>
                            </Col>
                            <Col xs="12" className="mt-2">
                                <div className="footer-infos-text">
                                    <a href="tel: +55 51 98185.8155">
                                        <MdLocalPhone fontSize={isDesktopOrLaptop ? 22 : 18} /> +55 51 98185.8155
                                    </a>
                                </div>
                            </Col>
                            <Col xs="12" className="my-2">
                                <div className="footer-infos-title d-flex align-items-start justify-content-start">
                                    <div className="icon-wrapper">
                                        <CiMicrophoneOn fontSize={isDesktopOrLaptop ? 60 : 40} />
                                    </div>
                                    <div className="text-wrapper d-flex flex-column">
                                        <span style={{ fontSize: isDesktopOrLaptop ? "20px" : "16px" }}>ÚLTIMAS</span>
                                        <span style={{ fontSize: isDesktopOrLaptop ? "20px" : "16px" }}>NOTÍCIAS</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" className="d-flex align-items-end">
                                <div className="footer-infos-title ">
                                    <div className="text-wrapper d-flex flex-column">
                                        <span style={{ fontSize: isDesktopOrLaptop ? "20px" : "16px" }}>REDES</span>
                                        <span style={{ fontSize: isDesktopOrLaptop ? "20px" : "16px" }}>SOCIAIS</span>
                                    </div>
                                </div>
                                <ul className="social-list-footer mb-1">
                                    <li className="social-item">
                                        <a href="https://www.facebook.com/sevenhumanitarian/" target="_blank" rel="noreferrer">
                                            <BsInstagram fontSize={20} />
                                        </a>
                                    </li>
                                    <li className="social-item">
                                        <a href="https://www.facebook.com/sevenhumanitarian/" target="_blank" rel="noreferrer">
                                            <BsFacebook fontSize={20} />
                                        </a>
                                    </li>
                                    <li className="social-item">
                                        <a href="https://www.facebook.com/sevenhumanitarian/" target="_blank" rel="noreferrer">
                                            <SlSocialTwitter fontSize={20} />
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </FooterContainer>
    );
};