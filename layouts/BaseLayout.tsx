import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingIndicator from "@/components/LoadingIndicator";
import Menu from "@/components/Menu";
import PageStatus from "@/components/PageStatus";
import { pageStyles } from '@/styles/styles.config';
import React, { Suspense } from "react";
import styled from "styled-components";

const BaseLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <StyledBaseLayout>
            <PageStatus />
            <Header />
            <Menu />
            <Breadcrumb />
            <Suspense fallback={<LoadingIndicator />}>
                <Main>{children}</Main>
            </Suspense>
            <Footer />
        </StyledBaseLayout>
    );
}

const StyledBaseLayout = styled.div`
    background-color: ${pageStyles.backgoundColor};
    color: ${pageStyles.textColor};
`

const Main = styled.main`
    min-height: 30rem;
`

export default BaseLayout;