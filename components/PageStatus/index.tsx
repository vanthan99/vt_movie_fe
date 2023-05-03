import { pageStyles } from "@/styles/styles.config";
import { EyeOutlined, LoginOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Row, Space } from "antd";
import Link from "next/link";
import styled from "styled-components";
import Container from "../Container";

const PageStatus = () => {
    return (
        <PageStatusWrapper>
            <Container align='middle' style={{ height: '2rem' }}>
                <Row>
                    <Col span={8}>
                        <Auth>
                            <AuthItem href='/'>
                                <Space>
                                    <UserOutlined />
                                    <span>Register</span>
                                </Space>
                            </AuthItem>
                            <AuthItem isactive={1} href='/'>
                                <Space>
                                    <LoginOutlined />
                                    <span>Login</span>
                                </Space>

                            </AuthItem>
                        </Auth>
                    </Col>
                    <Col span={8} style={{ justifyContent: 'center', display: 'flex' }}>
                        <MailOutlined />&nbsp; Superhit Top Movie <span style={{ color: pageStyles.activeColor }}> ** KING STAR **</span>
                    </Col>
                    <Col span={8} style={{ justifyContent: 'end', display: 'flex' }}>
                        <EyeOutlined />&nbsp;Day Visitor 32155
                    </Col>
                </Row>
            </Container>
        </PageStatusWrapper>
    );
}

const Auth = styled.div`
    
`
const AuthItem = styled(Link) <{ isactive?: number }>`
    color: ${props => props.isactive == 1 ? pageStyles.activeColor : pageStyles.textColor};
        padding-right: 1rem;

    &:hover {
        color: ${pageStyles.activeColor};
    }
`

const PageStatusWrapper = styled.div`
    border-bottom: 1px solid ${pageStyles.textColor2};
`

export default PageStatus;