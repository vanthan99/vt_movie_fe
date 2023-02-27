import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styled from "styled-components";

const HomeLayout = ({ children }) => {
    return (
        <StyledHomeLayout>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </StyledHomeLayout>
    );
}

const StyledHomeLayout = styled.div`

`

const Main = styled.main`
    min-height: 30rem;
`

export default HomeLayout;