import { IProductGridItem } from "@/commons/common";
import { pageStyles } from "@/styles/styles.config";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Col, Rate, Row } from "antd";
import Link from "next/link";
import React from "react";
import styled from "styled-components";


const ProductGridItem = () => {
    return (
        <ProductGridItemWrapper>
            <StyledLink href='/'>
            <Row style={{
                height: '3rem',
                alignItems: 'center'
            }}>
                <Col span={12}>
                    <Times>02:50:12</Times>
                </Col>
                <Col span={12}
                    style={{
                        textAlign: 'end'
                    }}
                >
                    <StyledRate disabled defaultValue={2} />
                </Col>
            </Row>
            <Row justify='center' align='middle' style={{height:'15rem'}}>
                <Col>
                <StyledLink href='/'>
                     <StyledPlayCircleOutlined/>
                </StyledLink>
                   
                </Col>
            </Row>

            <Row justify='center' style={{height:'10rem',padding:'0 1rem',marginTop:'3rem'}}>
                <Col span={24}>
                    <StyledLink href='/'>
                         <Title>
                        Hurry Animate Blue Stack
                    </Title>
                    </StyledLink>
                   

                    <ReleaseYear>
                        New movie (2018)
                    </ReleaseYear>

                    <Categorys>
                        Category: English movie
                    </Categorys>
                </Col>
            </Row>
            <Row style={{height:'3rem'}}>
                <Col span={12}>
                    <Details>Details</Details>
                </Col>
                <Col span={12}>
                    <ViewCount>115k Views</ViewCount>
                </Col>
            </Row>
            </StyledLink>
        </ProductGridItemWrapper>
    );
}

const StyledLink = styled(Link)`
    color: ${pageStyles.textColor};

    &:hover {
        color: ${pageStyles.textColor};
    }
`

const StyledPlayCircleOutlined = styled(PlayCircleOutlined)`
    opacity: 0;
    transition: 0.5s;
`

const StyledRate = styled(Rate)`
margin-right: 1rem;

`

const Times = styled.span`
background-color: ${pageStyles.activeColor};
padding: 5px 1rem;
font-size: 15px;
border-top-right-radius: 1rem;
border-bottom-right-radius: 1rem;
font-weight: 500;
width: 7rem;

transition: 0.5s;
opacity: 0;
`

const ViewCount = styled.div`
background-color: ${pageStyles.backgoundColor};
    padding: 0.5rem 1rem;
    width: 7rem;
    position: absolute;
    right: 0;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;

    opacity: 0;
    transition: 0.5s;
`

const Details = styled.div`
background-color: ${pageStyles.backgoundColor};
    width: 5rem;
    padding: 0.5rem 1rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    transition: 0.5s;
`

const ReleaseYear = styled.p`

`

const Categorys = styled.p`

`

const Title = styled.h3`
    transition: 0.5s;
`
const ProductGridItemWrapper = styled.div`
    height: 34rem;
    // background-color: ${pageStyles.activeColor};
    background-color: #ff00006b;
    
    &:hover {
        ${Times} {
            opacity: 1;
        }

        ${Details} {
            background-color: ${pageStyles.activeColor};
        }

        ${ViewCount} {
            opacity: 1;
        }

        ${StyledPlayCircleOutlined} {
            opacity: 1;
            font-size: 10rem;
        }

        ${Title} {
            color: ${pageStyles.activeColor};
        }
    }
`

export default ProductGridItem;