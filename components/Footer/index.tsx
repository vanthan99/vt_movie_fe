import { pagesInfo } from "@/pagesInfo";
import { pageStyles } from "@/styles/styles.config";
import { SendOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Container from "../Container";

interface IFooterProps { }
const Footer: React.FC<IFooterProps> = () => {
    return (
        <FooterWrapper>
            <Footer1>
                <Container align='middle' style={{ height: '26rem' }}>
                    <Row gutter={16}>
                        <Col span={6}>
                            <Image style={{ paddingBottom: '15px' }} src={pagesInfo.logo} alt='' width={151} height={55} />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ratione reiciendis aspernatur error porro ab accusantium corporis minus cumque omnis. Dignissimos quibusdam maxime explicabo, culpa libero aut veniam sapiente dolores.
                            </p>
                            <div>Social Share</div>
                        </Col>
                        <Col span={6}>
                            <Title>movies cateogory</Title>
                            <ul >
                                <li>
                                    <StyledLink href='/'>Movie</StyledLink>
                                </li>
                                <li>
                                    <StyledLink active={1} href='/'>Videos</StyledLink>
                                </li>
                                <li>
                                    <StyledLink href='/'>English Movie</StyledLink>
                                </li>
                                <li>
                                    <StyledLink href='/'>China Movie</StyledLink>
                                </li>
                                <li>
                                    <StyledLink href='/'>Tailor</StyledLink>
                                </li>
                                <li>
                                    <StyledLink href='/'>Upcoming movies</StyledLink>
                                </li>
                                <li>
                                    <StyledLink href='/'>Contact Us</StyledLink>
                                </li>
                            </ul>
                        </Col>
                        <Col span={6}>
                            <Title></Title>
                            <ul >
                                <li>
                                    <StyledLink href='/'>About Us</StyledLink>
                                </li>
                                <li>
                                    <StyledLink href='/'>Song</StyledLink>
                                </li>
                                <li>
                                    <StyledLink href='/'>Forums</StyledLink>
                                </li>
                                <li>
                                    <StyledLink href='/'>Place</StyledLink>
                                </li>
                                <li>
                                    <StyledLink href='/'>Hot Collection</StyledLink>
                                </li>
                                <li>
                                    <StyledLink href='/'>Upcoming Events</StyledLink>
                                </li>
                                <li>
                                    <StyledLink href='/'>All Movies</StyledLink>
                                </li>
                            </ul>

                        </Col>
                        <Col span={6}>
                            <Title>twitter</Title>
                            <div style={{ paddingBottom: '3rem' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error nulla architecto officia, commodi illo, distinctio placeat, voluptates unde provident rerum ipsum alias nemo eveniet quam asperiores odit quia quas?
                            </div>
                            <Title>newsletter</Title>
                            <div className="sendEmail">
                                <StyledEmail placeholder="Email Address" />
                                <StyledSendButton>
                                    <SendOutlined style={{ fontSize: '16px' }} rotate={-45} />
                                </StyledSendButton>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Footer1>
            <Footer2>
                <Container align='middle' style={{ height: '4rem' }}>
                    <Row>
                        <Col span={12}>
                            <StyledLink active={1} href='/'>About Us</StyledLink>
                            <StyledLink href='/'>Celebrities</StyledLink>
                            <StyledLink href='/'>News</StyledLink>
                            <StyledLink href='/'>Contact</StyledLink>
                        </Col>
                        <Col span={12} style={{ textAlign: 'end' }}>
                            <>
                                CopyRight© {new Date().getFullYear()} Design by 
                                <span style={{ color: pageStyles.activeColor }}>ThanTruong</span>
                                . All Rights ReServed
                            </>
                        </Col>
                    </Row>
                </Container>
            </Footer2>
        </FooterWrapper>
    );
}

const StyledEmail = styled.input`
    height: 2rem;
    background: transparent;
    border: 1px solid ${pageStyles.textColor};
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;

 
`
const StyledSendButton = styled.div`
    background: transparent;
    cursor: pointer;

    border-color: ${pageStyles.textColor};
    width: 2.5rem;

    border-top: 1px solid ${pageStyles.textColor};
    border-right: 1px solid ${pageStyles.textColor};
    border-bottom: 1px solid ${pageStyles.textColor};
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h3`
    text-transform: uppercase;
    position: relative;

    &:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 3rem;
        border-bottom: 1px solid ${pageStyles.textColor};
    }
`

const StyledLink = styled(Link) <{ active?: 1|0 }>`
    color: ${props => props.active ? pageStyles.activeColor : pageStyles.textColor};
    margin-right: 10px;
    min-height: 19px;
    &:hover {
        color: ${pageStyles.activeColor};
    }
`

const Footer1 = styled.div`
    background-image: url(http://demo.amytheme.com/movie/demo/elementor-watch-online/wp-content/themes/amy-movie/images/frontend/footer_bg.png);
    background-size: cover;
    background-repeat:no-repeat;
`

const Footer2 = styled.div`

`

const FooterWrapper = styled.footer`
    ${Footer1} {
        ul {
            list-style: none;
            padding-left: 0;

            li {
                padding: 0.5rem 0;
            }
        }

        .sendEmail {
            padding: 1rem 0px;
            display: flex;
        }

    } 
`

export default Footer;