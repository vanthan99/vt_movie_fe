import { headerStyles } from "@/styles/styles.config";
import { Col, Row } from 'antd';
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import Search from "../Search";

interface IItem {
    title: string,
    link: string,
}

interface ICategoryData {
    title: IItem,
    items?:Array<IItem>,
    active?:boolean
}

const categoryData : Array<ICategoryData> = [
    {
        title: {
            title:'Home',
            link:'/#',
        },
    },
    {
        title: {
            title:'phim lẻ',
            link:'/',
        },
    },
    {
        title: {
            title:'phim bộ',
            link:'/',
        },
    },
    {
        title: {
            title:'thể loại',
            link:'/',
        },
        items: [
            {
                title:'phim hành động',
                link:'/',
            },
            {
                title:'phim hài hước',
                link:'/',
            },
            {
                title:'phim tình cảm',
                link:'/',
            },
            {
                title:'phim cổ trang',
                link:'/',
            },
            {
                title:'phim tâm lý',
                link:'/',
            },
            {
                title:'phim hình sự',
                link:'/',
            },
            {
                title:'phim chiến tranh',
                link:'/',
            },
            {
                title:'phim thể thao',
                link:'/',
            },
            {
                title:'game show',
                link:'/',
            },
            {
                title:'phim chiếu rạp',
                link:'/',
            },
            {
                title:'phim sắp chiếu',
                link:'/',
            },
            {
                title:'phim võ thuật',
                link:'/',
            },
            {
                title:'phim hoạt hình',
                link:'/',
            },
            {
                title:'phim viễn tưởng',
                link:'/',
            },
            {
                title:'phim phiêu lưu',
                link:'/',
            },
            {
                title:'phim khoa học',
                link:'/',
            },
            {
                title:'phim ma - kinh dị',
                link:'/',
            },
            {
                title:'phim âm nhạc',
                link:'/',
            },
            {
                title:'phim thần thoại',
                link:'/',
            },
            {
                title:'phim truyền hình',
                link:'/',
            },
            {
                title:'phim anime',
                link:'/',
            },
            {
                title:'phim thuyết minh',
                link:'/',
            },
        ]
    },
    {
        title: {
            title:'quốc gia',
            link:'/',
        },
        items: [
            {
                title:'trung quốc',
                link:'/',
            },
            {
                title:'nhật bản',
                link:'/',
            },
            {
                title:'thái lan',
                link:'/',
            },
            {
                title:'tổng hợp',
                link:'/',
            },
            {
                title:'ấn độ',
                link:'/',
            },
            {
                title:'hàn quốc',
                link:'/',
            },
            {
                title:'âu mỹ',
                link:'/',
            },
            {
                title:'đài loan',
                link:'/',
            },
            {
                title:'hông kông',
                link:'/',
            },
        ]
    },
    {
        title: {
            title:'năm phát hành',
            link:'/',
        },
    },
    {
        title: {
            title:'phim chiếu rạp',
            link:'/',
        },
    },
    {
        title: {
            title:'trailer',
            link:'/',
        },
    },
    {
        title: {
            title:'top phim',
            link:'/',
        },
        active:true,
      
    },
]

const renderCategory = () => {
    return categoryData.map((item, index) => {
        const { title, items, active } = item;
        return (<TitleWrapper key={index}>
            <Title active={active} href={title.link}>{title.title}</Title>
            {items && <ItemWrapper>
                {
                    items.map((i, index) => <Item key={index} href={i.link}>{i.title}</Item>)
                }
            </ItemWrapper>}
        </TitleWrapper>)
    })
}

const Header = () => {
    return (
        <StyledHeader>
            <Row justify='center'>
                <Col xs={18}>
                    <Row align='middle'>
                        <ColWrapper>
                            <StyledLogo
                                src='http://demo.amytheme.com/movie/demo/elementor-watch-online/wp-content/uploads/sites/10/2022/05/img_66.png'
                                alt=""
                                width={100}
                                height={50}
                            />
                            <Search />
                            <CategoryWrapper>
                               {renderCategory()}
                            </CategoryWrapper>
                        </ColWrapper>
                    </Row>
                </Col>
            </Row>
        </StyledHeader>
    );
}

const ColWrapper = styled(Col)`
    display: flex;
`

const CategoryWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

const ItemWrapper = styled.div`
    position: absolute;
    top: 3rem;
    left: 0;
    width: 333px;
    flex-wrap: wrap;
    display: flex;
    gap: 5%;
    background: ${headerStyles.item_background};
    padding: 10px;
    opacity: 0;
    border-radius: 5px;
    z-index: 1;
`

const Item = styled(Link)`
    width: 47%;
    height: fit-content;
    padding: 8px 0;

    color: ${headerStyles.item_color};
    text-transform: capitalize;

    &:hover {
        color: ${headerStyles.item_active_color};
    }
`

const TitleWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    transition: 0.2s;

    &:hover {
        ${ItemWrapper} {
            opacity: 1;
        }
    }
`

const Title = styled(Link) <{ active?: boolean }>`
    font-size: 1rem;
    text-transform: uppercase;
    color: ${(props) => props.active ? headerStyles.title_active_color : headerStyles.title_color};
    padding: 0.75rem;

    &:hover {
        color: ${headerStyles.title_active_color};
    }
`

const StyledLogo = styled(Image)`

`

const StyledHeader = styled.div`
    background: ${headerStyles.backgound_color};
    padding: ${headerStyles.padding};
    font-size: ${headerStyles.fontSize}
`

export default Header;