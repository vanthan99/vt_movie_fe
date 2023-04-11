import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";
import { pageStyles } from '@/styles/styles.config'
import PageStatus from "@/components/PageStatus";
import Menu from "@/components/Menu";
import Breadcrumb from "@/components/Breadcrumb";
import BannerCarousel from "@/components/BannerCarousel";
import MovieCarousel from "@/components/MovieCarousel";
import { IMovieCarousel } from "@/commons/common";
import React from "react";

const HomeLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const iMovieCarousel: IMovieCarousel = {
        centerMode: true,
        slidesToShow: 5,
        iCatalogInfo: {
            title: 'movie category',
            description: 'lorem ipsum is sunoly dummy text of printing and ypesettings'
        }
    }
    return (
        <StyledHomeLayout>
            <PageStatus />
            <Header />
            <Menu />
            <Breadcrumb />
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