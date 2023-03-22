import { pageStyles } from "@/styles/styles.config";
import { RightOutlined } from "@ant-design/icons";
import { Carousel, Space } from "antd";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const titleSpanStyle :React.CSSProperties = {
    textTransform: 'uppercase',
    fontSize:'3rem',
    color: pageStyles.activeColor,
}
const BannerCarousel = () => {
    return (
        <BannerCarouselWrapper>
            <Carousel autoplay arrows dots={false}>
                <ItemWrapper>
                    <Item>
                        <Title>our special <span style={titleSpanStyle}>movie1</span></Title>
                        <Desciption>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam commodi tenetur nisi neque quos, eaque saepe, voluptatum, voluptatibus error magni architecto. Natus, ex. Fugiat voluptatum incidunt dolores id, non perferendis?</Desciption>
                        <StyledLink href='/'>
                            <Space>
                                <span>Read More</span>
                                <RightOutlined />
                            </Space>
                             </StyledLink>
                    </Item>
                </ItemWrapper>
                <ItemWrapper>
                    <Item>
                        <Title>our special <span style={titleSpanStyle}>movie2</span></Title>
                        <Desciption>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam commodi tenetur nisi neque quos, eaque saepe, voluptatum, voluptatibus error magni architecto. Natus, ex. Fugiat voluptatum incidunt dolores id, non perferendis?</Desciption>
                        <StyledLink href='/'>
                            <Space>
                                <span>Read More</span>
                                <RightOutlined />
                            </Space>
                             </StyledLink>
                    </Item>
                </ItemWrapper>
                <ItemWrapper>
                    <Item>
                        <Title>our special <span style={titleSpanStyle}>movie3</span></Title>
                        <Desciption>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam commodi tenetur nisi neque quos, eaque saepe, voluptatum, voluptatibus error magni architecto. Natus, ex. Fugiat voluptatum incidunt dolores id, non perferendis?</Desciption>
                        <StyledLink href='/'>
                            <Space>
                                <span>Read More</span>
                                <RightOutlined />
                            </Space>
                             </StyledLink>
                    </Item>
                </ItemWrapper>
            </Carousel>
        </BannerCarouselWrapper>
    );
}

const StyledLink = styled(Link)`
    background-color: ${pageStyles.activeColor};
    padding: 0.5rem 1rem;
    border-radius: 1.75rem;
    color: ${pageStyles.textColor};
    font-weight: 500;

    &:hover {
        color: ${pageStyles.textColor};
    }
`

const Title = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;
`

const Desciption = styled.div`
    font-size: 1.25rem;
    margin-bottom: 2rem;
`

const Item = styled.div`
    width: 40rem;
    margin-left: 14rem;
    text-align: center;
`

const ItemWrapper =styled.div`
    background-color: #29405ead;
    color: ${pageStyles.textColor};
    height: 35rem;

    display: flex !important;
    justify-content: center;
    align-items: center;
`

const BannerCarouselWrapper = styled.div`
    min-height: 35rem;
    
    .slick-arrow {
        color: ${pageStyles.textColor};
        position: absolute;
        top: 50%;
        z-index:1;

        &:before {
            font-size: 27px;
        }

        &:hover, &:focus {
            color: ${pageStyles.activeColor};
        }
    }

    .slick-prev {
        left: 1rem;
        &:before {
            content: "<";
        }
    }

    .slick-next {
        right: 1rem;
        &:before {
            content: ">";
        }
    }
`

export default BannerCarousel;