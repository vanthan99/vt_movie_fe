import { IMovieCarousel } from "@/commons/common";
import BannerCarousel from "@/components/BannerCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import MovieCarousel from "@/components/MovieCarousel";
import PageStatus from "@/components/PageStatus";
import { pageStyles } from '@/styles/styles.config';
import React from "react";
import styled from "styled-components";

const HomeLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const iMovieCarousel: IMovieCarousel = {
        centerMode: true,
        slidesToShow: 3,
        iCatalogInfo: {
            title: 'phim chiếu rạp',
            description: 'lorem ipsum is sunoly dummy text of printing and ypesettings'
        }
    }
    return (
        <StyledHomeLayout>
            <PageStatus />
            <Header />
            <Menu />
            <BannerCarousel />
            <MovieCarousel {...iMovieCarousel} />
            <Main>{children}</Main>
            <Footer />
        </StyledHomeLayout>
    );
}

const StyledHomeLayout = styled.div`
    background-color: ${pageStyles.backgoundColor};
    color: ${pageStyles.textColor};
`

const Main = styled.main`
    min-height: 30rem;
`

export default HomeLayout;