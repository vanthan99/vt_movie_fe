import { pageStyles } from "@/styles/styles.config";
import { Carousel, Space } from "antd";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const titleSpanStyle :React.CSSProperties = {
    // textTransform: 'uppercase',
    // fontSize:'3rem',
    color: pageStyles.activeColor,
}

const imageList : Array<string> = [
    'https://firebasestorage.googleapis.com/v0/b/vt-movie.appspot.com/o/banner%2Fbanner1.jpg?alt=media&token=db3a6f3c-c4ae-4c18-8824-6a7bb21dc200',
    'https://firebasestorage.googleapis.com/v0/b/vt-movie.appspot.com/o/banner%2Fbanner2.png?alt=media&token=f8084dd4-7a11-4290-8b3e-f529596f175b',
    'https://firebasestorage.googleapis.com/v0/b/vt-movie.appspot.com/o/banner%2Fbanner3.jpg?alt=media&token=65f95c31-2414-49a9-81fa-b14e4583c6be',
    'https://firebasestorage.googleapis.com/v0/b/vt-movie.appspot.com/o/banner%2Fbanner4.jpg?alt=media&token=13dd8f24-b0db-4b5f-b51c-19e60e525128',
]

const BannerCarousel = () => {
    return (
        <BannerCarouselWrapper>
            <Carousel arrows dots={false}>
                {
                    imageList.map((item, index) =>
                        <ItemWrapper image={item} key={index}>
                            <Item>
                                <Title>our special <span style={titleSpanStyle}>movie1</span></Title>
                                <Desciption>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam commodi tenetur nisi neque quos, eaque saepe, voluptatum, voluptatibus error magni architecto. Natus, ex. Fugiat voluptatum incidunt dolores id, non perferendis?</Desciption>
                                <StyledLink href='/'>
                                    <Space>
                                        <span>Read More</span>
                                        <span style={{WebkitTextStroke:1}}>
                                            →
                                        </span>
                                    </Space>
                                </StyledLink>
                            </Item>
                        </ItemWrapper>)
                }
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
    font-size: 4rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: lighter;
`

const Desciption = styled.div`
    font-size: 1.25rem;
    margin-bottom: 2rem;
    font-weight: 100;
`

const Item = styled.div`
    width: 40rem;
    margin-left: 14rem;
    text-align: center;
`

const ItemWrapper =styled.div<{image?:string}>`
    background-color: #29405ead;
    color: ${pageStyles.textColor};
    height: 35rem;

    display: flex !important;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.image || ''});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
            -webkit-text-stroke: 1px;
        }
    }

    .slick-next {
        right: 1rem;
        &:before {
            -webkit-text-stroke: 1px;
        }
    }
`

export default BannerCarousel;