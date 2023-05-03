import { pageStyles } from '@/styles/styles.config';
import { HomeOutlined, RightOutlined } from '@ant-design/icons';
import { Breadcrumb as AntdBreadcrumb, Space } from 'antd'
import Link from 'next/link';
import styled from 'styled-components';
import Container from '../Container';

const Breadcrumb = () => {
    return (
        <BreadcrumbWrapper>
            <Container align='middle' style={{ height: '5rem' }}>
                <Content>
                    <StyledAntdBreadcrumb
                        separator='>'
                    >
                        <AntdBreadcrumb.Item>
                            <Space>
                                <StyledLink href='/'>
                                    <Space>
                                        <HomeOutlined />
                                        <span>Home</span>
                                    </Space>
                                </StyledLink>
                            </Space>
                        </AntdBreadcrumb.Item>
                        <AntdBreadcrumb.Item>
                            <StyledLink href='/'>Products</StyledLink>
                        </AntdBreadcrumb.Item>
                        <AntdBreadcrumb.Item>
                            <StyledLink active={1} href='/'>Movie List Page</StyledLink>
                        </AntdBreadcrumb.Item>
                    </StyledAntdBreadcrumb>
                    <StyledLink href='/'>
                        <Space>
                            <span>Go back</span>
                            <RightOutlined />
                        </Space>
                    </StyledLink>
                </Content>
            </Container>
        </BreadcrumbWrapper>
    );
}

const StyledAntdBreadcrumb = styled(AntdBreadcrumb)`
    color: ${pageStyles.textColor};
    a {
        color: ${pageStyles.textColor};

        &:hover {
            color: ${pageStyles.activeColor};
            background-color: none;
        }
    }

    .ant-breadcrumb-separator {
        color: ${pageStyles.textColor};
    }
`

const StyledLink = styled(Link) <{ active?: 1|0 }>`
    color: ${props => props.active==1 ? pageStyles.activeColor : pageStyles.textColor};

    &:hover {
        color: ${pageStyles.activeColor};
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
`

const BreadcrumbWrapper = styled.div`
    background-color: ${pageStyles.textColor2};
`

export default Breadcrumb;