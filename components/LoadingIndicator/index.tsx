import { Spin } from "antd";
import styled from "styled-components";

const LoadingIndicator = () => {
    return (
        <StyledLoadingIndicator>
            <Spin />
        </StyledLoadingIndicator>
    );
}

const StyledLoadingIndicator = styled.div`
    width: 100%;
    min-height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default LoadingIndicator;