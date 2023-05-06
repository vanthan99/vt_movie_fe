import { ICatalogInfo } from "@/commons/common";
import { pageStyles } from "@/styles/styles.config";
import { Col, Row, Space } from "antd";
import React from "react";
import styled from "styled-components";
import Container from "../Container";



const CatalogInfo: React.FC<ICatalogInfo> = (props:ICatalogInfo ) => {
    const {description, title, nextOnClick, prevOnClick} = props;
    return (
        <CatalogInfoWrapper>
            <Container>
                <StyledRow>
                    <Col span={20}>
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                    </Col>
                    <StyledCol span={4}>
                        <Space>
                            <Prev onClick={prevOnClick}>
                               ←
                            </Prev>
                            <Next onClick={nextOnClick}>
                                →
                            </Next>
                        </Space>
                    </StyledCol>
                </StyledRow>
            </Container>
        </CatalogInfoWrapper>
    );
}

const StyledCol = styled(Col)`
    display: flex;
    justify-content: end;
    align-items: center;
`

const StyledRow = styled(Row)`
    border-left: 2px solid ${pageStyles.activeColor};
    padding-left: 1rem;
    margin-top: 1rem;
    border-bottom: 1px solid ${pageStyles.textColor2};
    padding-bottom: 1rem;
`

const Title = styled.div`
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
`

const Description = styled.div`

`

const Prev = styled.div`
width: 1.75rem;
height: 1.75rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 1rem;
cursor: pointer;
border: 1px solid ${pageStyles.textColor2};
-webkit-text-stroke: 1px;

&:hover {
    color: ${pageStyles.activeColor};
}
`
const Next = styled.div`
width: 1.75rem;
height: 1.75rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 1rem;
-webkit-text-stroke: 1px;

border: 1px solid ${pageStyles.textColor2};
cursor: pointer;
&:hover {
    color: ${pageStyles.activeColor};
}
`

const CatalogInfoWrapper = styled.div`
`

export default CatalogInfo;