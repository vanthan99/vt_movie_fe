import React from "react";
import styled from "styled-components";

const Title: React.FC<{children?:React.ReactNode}> = ({children}) => {
    return (
        <TitleWrapper>
            {children}
        </TitleWrapper>
    );
}

const TitleWrapper = styled.div`
    border-left: 2px solid #12BE12;
    padding-left: 1rem;
    margin-top: 1rem;
    border-bottom: 1px solid #182128;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 17px;
`

export default Title;