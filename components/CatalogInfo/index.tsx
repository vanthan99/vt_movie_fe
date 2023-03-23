import { pageStyles } from "@/styles/styles.config";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row, Space } from "antd";
import React from "react";
import styled from "styled-components";
import Container from "../Container";

export interface ICatalogInfo {
    prevOnClick?:any,
    nextOnClick?:any,
}

const CatalogInfo: React.FC = (props:ICatalogInfo ) => {
    return (
        <CatalogInfoWrapper>
            <Container>
                <StyledRow>
                    <Col span={20}>
                        <Title>Movie Category</Title>
                        <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Description>
                    </Col>
                    <StyledCol span={4}>
                        <Space>
                            <Prev onClick={props.prevOnClick}>
                                <LeftOutlined />
                            </Prev>
                            <Next  onClick={props.nextOnClick}>
                                <RightOutlined />
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
    margin: 2rem 0;
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

border: 1px solid ${pageStyles.textColor2};
cursor: pointer;
&:hover {
    color: ${pageStyles.activeColor};
}
`

const CatalogInfoWrapper = styled.div`
`

export default CatalogInfo;