import { IProductGridItem } from "@/commons/common";
import { PlayIcon } from "@/icons";
import { pageStyles } from "@/styles/styles.config";
import Link from "next/link";
import styled from "styled-components";


const ProductGridItem = (iProductGridItem:IProductGridItem) => {
    const {
        link
    } = iProductGridItem;

    return (
        <ProductGridItemWrapper>
            <div className="chapter_tag_wrapper">
                <div className="item">
                    <Chapter>Tập 1</Chapter>
                </div>
                <div className="item">
                    <Tag>FHD</Tag>
                </div>
            </div>
            <PlayIconWrapper href={link}>
                <span className="styled_icon">
                    <PlayIcon />
                </span>
            </PlayIconWrapper>
                   
            <TitleWrapper href={link}>
                <VietnameseTitle>Sinh Tồn Nơi Hoang Đảo</VietnameseTitle>
                <EnglishTitle>Eden (2014)</EnglishTitle>
            </TitleWrapper>
            
        </ProductGridItemWrapper>
    );
}

const TitleWrapper = styled(Link)`
        padding: 15px;
        background-color: #000000a6;
        display: block;

        position: absolute;
        bottom: 0;
        width: 100%;

        &:hover {
            color: ${pageStyles.activeColor};
        }
`

const PlayIconWrapper = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${pageStyles.textColor};

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    .styled_icon {
        font-size: 1rem;
        height: fit-content;
        transition: .3s;
        opacity: 0;
    }

    &:hover {
        color: ${pageStyles.textColor};
    }
`

const VietnameseTitle = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
const EnglishTitle = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Chapter = styled.div`

`

const Tag = styled.div`
`

const ProductGridItemWrapper = styled.div`
    background-image: url(https://xemphim123.com/storage/images/biet-doi-cho-san/biet-doi-cho-san-thumb.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 15px;
    min-height: 20rem;
    position: relative;
    width: 100%;
    height: 100%;
    
    .chapter_tag_wrapper {
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
    }


    ${Chapter}, ${Tag} {
        width: fit-content;
        padding: 5px;

        background-color: #37c93cc7;
        border-radius: 5px;
    }

    &:hover {
        ${PlayIconWrapper} {
            .styled_icon {
                font-size: 3rem;
                opacity: 1;
            }
        }

        ${TitleWrapper} {
                color: ${pageStyles.activeColor};
        }
    }
`

export default ProductGridItem;