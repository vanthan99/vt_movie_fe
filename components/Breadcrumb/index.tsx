import { HomeOutlined, RightOutlined } from '@ant-design/icons';
import { Breadcrumb as AntdBreadcrumb, Space } from 'antd'
import Link from 'next/link';
import styled from 'styled-components';
import Container from '../Container';
import { useRouter } from 'next/router';
import React from 'react';
import { pageStyles } from '@/styles/styles.config';
const { Item } = AntdBreadcrumb;

const Breadcrumb = () => {
    const router = useRouter();
    return (
        <BreadcrumbWrapper>
            <Container align='middle' style={{ height: '5rem' }}>
                <Content>
                    <StyledAntdBreadcrumb
                        separator='>'
                    >
                        <Item>
                            <Space>
                                <StyledLink href='/'>
                                    <Space>
                                        <HomeOutlined />
                                        <span>Xem Phim</span>
                                    </Space>
                                </StyledLink>
                            </Space>
                        </Item>
                        <Item>
                            <StyledLink href='/'>Products</StyledLink>
                        </Item>
                        <Item>
                            <StyledLink href='/'>Movie List Page</StyledLink>
                        </Item>
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

const StyledLink = styled(Link)`
    color: ${pageStyles.textColor};

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