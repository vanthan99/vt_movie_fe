import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import PageStatus from "@/components/PageStatus";
import { pageStyles } from '@/styles/styles.config';
import styled from "styled-components";
const DetailLayout = ({ children }) => {
    return (
        <StyledDetailLayout>
            <PageStatus />
            <Header />
            <Menu />
            <Breadcrumb />
            <Main>{children}</Main>
            <Footer />
        </StyledDetailLayout>
    );
}

const StyledDetailLayout = styled.div`
    background-color: ${pageStyles.backgoundColor};
    color: ${pageStyles.textColor};
`

const Main = styled.main`
    min-height: 30rem;
`

export default DetailLayout;