import { pageStyles } from "@/styles/styles.config";
import { Carousel } from "antd";
import React from "react";
import styled from "styled-components";
import ProductGridItem from "../ProductGridItem";

interface IMovieCarousel {
    title: string,
}

const MovieCarouselV2: React.FC<IMovieCarousel> = ({title}) => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
    };
    return (
        <MovieCarouselV2Wrapper>
            <Title>{title}</Title>
            <Carousel {...settings}>
                <Item>
                    <ProductGridItem link='/info/abc123' />
                </Item>
                <Item>
                    <ProductGridItem link='/info/abc123' />
                </Item>
                <Item>
                    <ProductGridItem link='/info/abc123' />
                </Item>
                <Item>
                    <ProductGridItem link='/info/abc123' />
                </Item>
                <Item>
                    <ProductGridItem link='/info/abc123' />
                </Item>
                <Item>
                    <ProductGridItem link='/info/abc123' />
                </Item>
                <Item>
                    <ProductGridItem link='/info/abc123' />
                </Item>
                <Item>
                    <ProductGridItem link='/info/abc123' />
                </Item>
                <Item>
                    <ProductGridItem link='/info/abc123' />
                </Item>
                <Item>
                    <ProductGridItem link='/info/abc123' />
                </Item>
            </Carousel>
        </MovieCarouselV2Wrapper>
    );
}

const MovieCarouselV2Wrapper = styled.div`
    min-height: 20rem;
    margin: 2rem 0;

    .slick-arrow {
        color: ${pageStyles.textColor};
        position: absolute;
        top: 50%;
        z-index:1;
        background-color: ${pageStyles.textColor2};
        border-radius: 1rem;
        height: 2rem;
        width: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;

        &:before {
            font-size: 20px;
            line-height: 2rem;
        }

        &:hover, &:focus {
            color: ${pageStyles.activeColor};
            // background-color: ${pageStyles.textColor2};
            background-color: #1b2832;
        }
    }

    .slick-list {
        margin: 0 -5px;

        .slick-track {
            display: flex;
            align-items: center;
            height: 20rem;

            .slick-slide {
                height: fit-content;

                & > div {
                    padding: 0 5px;
                }
            }
        } 
    }

    .slick-prev {
        left: -1rem;
        // &:before {
        //     -webkit-text-stroke: 1px;
        // }
    }

    .slick-next {
        right: -1rem;
        // &:before {
        //     -webkit-text-stroke: 1px;
        // }
    }
`

const Title = styled.h3`
    margin-bottom: 1rem;
    font-weight: 400;
`

const Item = styled.div`
    color: white;
    height: 20rem;
    overflow: hidden;
    display: flex !important;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
`

export default MovieCarouselV2;