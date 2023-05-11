import { BreadcrumbsProps } from '@/commons/common';
import { pageStyles } from '@/styles/styles.config';
import { RightOutlined } from '@ant-design/icons';
import { Breadcrumb as AntdBreadcrumb, Space } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import Container from '../Container';
const { Item } = AntdBreadcrumb;

const Breadcrumb = ({items}:BreadcrumbsProps) => {
    return (
        <BreadcrumbWrapper>
            <Container align='middle' style={{ height: '5rem' }}>
                <Content>
                    <StyledAntdBreadcrumb
                        separator='>'
                    >
                        {items?.map((item,index)=> <Item key={index}>{item}</Item>)}
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

    text-transform: capitalize;

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

    span {
        color: ${pageStyles.textColor};
    }
`

export default Breadcrumb;