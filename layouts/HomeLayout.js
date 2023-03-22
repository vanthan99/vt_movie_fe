import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";
import {pageStyles} from '@/styles/styles.config'
import PageStatus from "@/components/PageStatus";
import Menu from "@/components/Menu";
import Breadcrumb from "@/components/Breadcrumb";
import BannerCarousel from "@/components/BannerCarousel";
const HomeLayout = ({ children }) => {
    return (
        <StyledHomeLayout>
            <PageStatus />
            <Header />
            <Menu />
            <Breadcrumb />
            <BannerCarousel />
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