import { pageStyles } from "@/styles/styles.config";
import { FacebookOutlined, InstagramOutlined, SkypeOutlined, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Space } from "antd";
import Link from "next/link";
import styled from "styled-components";
import Container from "../Container";

const Menu = () => {
    return (
        <MenuWrapper>
            <Container align='middle' style={{ height: '4rem' }}>
                <Content>
                    <ul>
                        <li><StyledLink isActive href='/'>Home</StyledLink></li>
                        <li><StyledLink href='/gridleftsitebar'>Movie layout</StyledLink></li>
                        <li><StyledLink href='/odd'>Celebrities</StyledLink></li>
                        <li><StyledLink href='/odd/abc'>Showtime</StyledLink></li>
                        <li><StyledLink href='/'>News</StyledLink></li>
                        <li><StyledLink href='/'>Contact</StyledLink></li>
                    </ul>

                    <Shared>
                        <Space>
                            <StyledLink isActive href='/'>
                                <FacebookOutlined style={{fontSize:'20px'}} />
                            </StyledLink>
                            <StyledLink href='/'>
                                <SkypeOutlined style={{fontSize:'20px'}}  />
                            </StyledLink>
                            <StyledLink href='/'>
                                <TwitterOutlined style={{fontSize:'20px'}}  />
                            </StyledLink>
                            <StyledLink href='/'>
                                <YoutubeOutlined style={{fontSize:'20px'}}  />
                            </StyledLink>
                            <StyledLink href='/'>
                                <InstagramOutlined style={{fontSize:'20px'}}  />
                            </StyledLink>
                        </Space>
                    </Shared>
                    
                </Content>
            </Container>
        </MenuWrapper>
    );
}

const Shared = styled.div`
    
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
`


const StyledLink = styled(Link)<{isActive?:boolean}>`
    color: ${props => props.isActive?pageStyles.activeColor:pageStyles.textColor};

    &:hover {
        color: ${pageStyles.activeColor};
    }
`

const MenuWrapper = styled.div`
    ${Content} {
        ul {
            list-style: none;
            display: flex;
            padding-left: 0;
            margin-bottom: 0;
            li {
                padding-right: 1rem;
            }
        }
    }

    border-bottom: 1px solid ${pageStyles.textColor2};
`

export default Menu;