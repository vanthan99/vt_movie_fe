import { pagesInfo } from "@/pagesInfo";
import { pageStyles } from "@/styles/styles.config";
import { Col, Row } from "antd";
import Image from "next/image";
import styled from "styled-components";
import Container from "../Container";

const Header = () => {
    return (
        <HeaderWrapper>
            <Container align='middle' style={{ height: '5rem' }}>
                <Row align='middle'>
                    <Col span={12}>
                        <Image src={pagesInfo.logo} alt="" height={51} width={155} />
                    </Col>
                    <Col span={12} style={{display:'flex', justifyContent:'flex-end'}}>
                        <SearchWrapper>
                            <StyledInputSearch placeholder="Search ..." />
                            <StyledButtonSearch>
                                Search
                            </StyledButtonSearch>
                        </SearchWrapper>
                    </Col>
                </Row>
            </Container>
        </HeaderWrapper>
    );
}

const SearchWrapper = styled.div`
    display: flex;
    width: 35rem;
    position: relative;
`

const StyledInputSearch = styled.input`
    outline: none;
    background: transparent;
    border: 1px solid ${pageStyles.textColor2};
    height: 2rem;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    width: 100%;

    padding: 1rem 0;
    margin-right: 1rem;
    padding: 0 1rem;
`

const StyledButtonSearch = styled.div`
    background-color: ${pageStyles.activeColor};
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 1rem;
    width: 5rem;

    cursor: pointer;
    font-weight: 500;

    position: absolute;
    right: 0;
}
`

const HeaderWrapper = styled.header`
    border-bottom: 1px solid ${pageStyles.textColor2};
`

export default Header;