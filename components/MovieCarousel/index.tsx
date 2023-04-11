import { IMovieCarousel } from "@/commons/common";
import { Carousel, Menu, MenuProps } from "antd";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import CatalogInfo from "../CatalogInfo";
import Container from "../Container";
import { pageStyles } from "@/styles/styles.config";

const MovieCarousel: React.FC<IMovieCarousel> = (iMovieCarousel: IMovieCarousel) => {
    const { centerMode, slidesToShow, iCatalogInfo } = iMovieCarousel;
    const carouselSettings = {
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        centerMode: centerMode || false,
        slidesToShow: slidesToShow == undefined ? 5 : slidesToShow,
    }
    const iCatalogInfoFinal = {
        ...iCatalogInfo,
        nextOnClick: () => carouselRef.current?.next(),
        prevOnClick: () => carouselRef.current?.prev(),
    }

    const carouselRef = useRef<any>(null);

    // ant menu

    const items: MenuProps['items'] = [
        {
            label: 'Latest movie',
            key: '1',
        },
        {
            label: 'Top Ratting',
            key: '2',
        },
        {
            label: 'Comming Soon',
            key: '3',
        },
        {
            label: 'TV Series',
            key: '4',
        },
    ];
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e.key);
        setCurrent(e.key);
    };
    // end ant menu


    return (
        <MovieCarouselWrapper {...iMovieCarousel}>
            <CatalogInfo {...iCatalogInfoFinal} />
            <Container>
                <StyledMenu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </Container>
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

const StyledMenu = styled(Menu)`
background: transparent;
color: ${pageStyles.textColor};
margin-bottom: 1rem;
margin-left: -1rem;

.ant-menu-item {
    &:hover {
        color: ${pageStyles.activeColor}!important;

        &:after {
            border-bottom-color: ${pageStyles.activeColor}!important;
        }
    }
    &:after {
        bottom: 11px!important;
    }
}

.ant-menu-item-selected {
    color: ${pageStyles.activeColor} !important;

    &:after {
        border-bottom-color: ${pageStyles.activeColor}!important;
    }
}

.ant-menu-item-active {
    
}
`

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

const MovieCarouselWrapper = styled.div<IMovieCarousel>`
    .slick-center, .slick-current {
        transition: 0.5s;
        ${Item} {
            height: ${props => props.centerMode ? '35rem' : '30rem'};
            transition: 0.5s;
        }
    }

    
    .slick-list {
        margin: ${props => props.centerMode ? '0' : '0 -5px'};

        .slick-track {
            display: flex;
            align-items: center;
            height: ${props => props.centerMode ? '37rem' : '30rem'};

            .slick-slide {
                height: fit-content;

                & > div {
                    padding: ${props => props.centerMode ? '0' : '0 5px'};
                }
            }
        } 
    }
`

export default MovieCarousel;
