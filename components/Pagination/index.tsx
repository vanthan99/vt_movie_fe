import styled from "styled-components";
import {Pagination as AntdPagination} from 'antd'
import { pageStyles } from "@/styles/styles.config";
const Pagination = () => {
    return (
        <PaginationWrapper>
            <StyledAntdPagination defaultCurrent={6} total={500} showSizeChanger={false} />
        </PaginationWrapper>
    );
}
const StyledAntdPagination = styled(AntdPagination)`
    .ant-pagination-prev, .ant-pagination-next {
        .ant-pagination-item-link {
        background-color: ${pageStyles.textColor2} !important;

        .anticon {
            color: ${pageStyles.textColor};
        } 
        }
    }

    .ant-pagination-item {
        background-color: ${pageStyles.textColor2};

        a{
            color: ${pageStyles.textColor};
        }
    }

    .ant-pagination-item-active {
        background-color: ${pageStyles.activeColor};
        border-color: ${pageStyles.activeColor};

        &:hover {
            border-color: ${pageStyles.activeColor};
        }

        a{
            color: ${pageStyles.textColor};

            &:hover {
                color: ${pageStyles.textColor};
            }
        }
    }
    
    .ant-pagination-jump-prev, .ant-pagination-jump-next {
        
        .ant-pagination-item-ellipsis {
            color: ${pageStyles.textColor} !important;
        }

        .ant-pagination-item-link-icon {
            color: ${pageStyles.textColor} !important;
        }
    }
    
`
const PaginationWrapper = styled.div`
    
`

export default Pagination;