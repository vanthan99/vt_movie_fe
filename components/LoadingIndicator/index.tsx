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
    
`

export default LoadingIndicator;