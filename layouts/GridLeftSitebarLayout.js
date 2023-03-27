import Breadcrumb from "@/components/Breadcrumb";
import CategorySidebar from "@/components/CategorySidebar";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import PageStatus from "@/components/PageStatus";
import Pagination from "@/components/Pagination";
import { pageStyles } from '@/styles/styles.config';
import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
const GridLeftSitebarLayout = ({ children }) => {
    return (
        <StyledGridLeftSitebarLayout>
            <PageStatus />
            <Header />
            <Menu />
            <Breadcrumb />

            <Container style={{ marginTop: '5rem' }}>
                <Row gutter={8}>
                    <Col span={6}>
                        <CategorySidebar />
                    </Col>
                    <Col span={18}>
                        <Main>
                            <Row justify='center' align='middle'>
                                <Col>
                                    <Pagination />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                     {children}
                                </Col>
                            </Row>
                            <Row justify='center' align='middle'>
                                <Col>
                                    <Pagination />
                                </Col>
                            </Row>
                        </Main>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </StyledGridLeftSitebarLayout>
    );
}

const StyledGridLeftSitebarLayout = styled.div`
    background-color: ${pageStyles.backgoundColor};
    color: ${pageStyles.textColor};
`

const Main = styled.main`
    min-height: 30rem;
`

export default GridLeftSitebarLayout;