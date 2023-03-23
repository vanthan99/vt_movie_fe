import { Carousel } from "antd";
import React, { useRef } from "react";
import styled from "styled-components";
import CatalogInfo, { ICatalogInfo } from "../CatalogInfo";
import Container from "../Container";

const MovieCarousel = () => {

    const carouselSettings = {
        centerMode: true,
        slidesToShow:5,
        slidesToScroll:1,
        autoplay:true,
        dots:false,
    }
    
    const carouselRef = useRef(null);
    const iCatalogInfo : ICatalogInfo = {
        nextOnClick: () => carouselRef.current?.next(),
        prevOnClick: () => carouselRef.current?.prev(),
    }
    return (
        
        <MovieCarouselWrapper>
            <CatalogInfo {...iCatalogInfo} />
            <Container>
                <Carousel {...carouselSettings} ref={carouselRef}>
                    <Item>1</Item>
                    <Item>2</Item>
                    <Item>3</Item>
                    <Item>4</Item>
                    <Item>5</Item>
                    <Item>6</Item>
                </Carousel>
            </Container>
        </MovieCarouselWrapper>
    );
}

const Item = styled.div`
    color: white;
    background-color: green;
    border-radius: 0.5rem;
    height: 30rem;

    display: flex !important;
    justify-content: center;
    align-items: center;
}
`

const MovieCarouselWrapper = styled.div`
    .slick-center, slick-current {
        transition: 0.5s;
        ${Item} {
            height: 35rem;
            transition: 0.5s;
        }
    }

    .slick-track {
        display: flex;
        align-items: center;
        height: 37rem;

        .slick-slide {
            height: fit-content;
        }
    }
`

export default MovieCarousel;
