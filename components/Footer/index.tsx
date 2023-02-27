import { footerStyles } from "@/styles/styles.config";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

type Items = {
    link?: string,
    title?: string
}

interface IBlockInfo {
    title?: string,
    items: Array<Items>
}

const newMovieData : IBlockInfo = {
    title: 'Phim Mới',
    items: [
        {
            title: 'phim chiếu rạp',
            link: '/1'
        },
        {
            title: 'phim lẻ',
            link: '/2'
        },
        {
            title: 'phim bộ',
            link: '/3'
        },
        {
            title: 'phim hành động',
            link: '/4'
        },
        {
            title: 'phim viễn tưởng',
            link: '/5'
        },
        {
            title: 'phim tâm lý',
            link: '/6'
        },
        {
            title: 'phim hài hước',
            link: '/7'
        },
    ]
}

const greatMovieData : IBlockInfo = {
    title: 'Phim Hay',
    items: [
        {
            title: 'phim mỹ',
            link: '/#'
        },
        {
            title: 'phim hàn quốc',
            link: '/#'
        },
        {
            title: 'phim trung quốc',
            link: '/#'
        },
        {
            title: 'phim thái lan',
            link: '/#'
        },
        {
            title: 'phim việt nam',
            link: '/#'
        },
        {
            title: 'phim ma kinh dị',
            link: '/#'
        },
        {
            title: 'phim hoạt hình',
            link: '/#'
        },
    ]
}

const hotMovieData : IBlockInfo = {
    title: 'Phim hot',
    items: [
        {
            title: 'phimmoi',
            link: '/#'
        },
        {
            title: 'sitemap',
            link: '/#'
        },
    ]
}

const helpData : IBlockInfo = {
    title: 'trợ giúp',
    items: [
        {
            title: 'hỏi đáp',
            link: '/#'
        },
        {
            title: 'liên hệ',
            link: '/#'
        },
        {
            title: 'tin tức',
            link: '/#'
        },
    ]
}

const informationData : IBlockInfo = {
    title: 'thông tin',
    items: [
        {
            title: 'điều khoản sử dụng',
            link: '/#'
        },
        {
            title: 'chính sách riêng tư',
            link: '/#'
        },
        {
            title: 'khiếu nại bản quyền',
            link: '/#'
        },
        {
            title: '© 2022 PhimChill.Netn',
        },
    ]
}

const Footer = () => {
    return (
        <StyledFooter>
           <Row justify='center'>
                <Col xs={18}>
                    <Row>
                        <Col xs={3}>
                            <Image
                                src='http://demo.amytheme.com/movie/demo/elementor-watch-online/wp-content/uploads/sites/10/2022/05/img_66.png'
                                alt=""
                                width={100}
                                height={50}
                            />
                        </Col>
                        <Col xs={3}>
                            {renderBlock(newMovieData)}
                        </Col>
                        <Col xs={3}>
                        {renderBlock(greatMovieData)}
                        </Col>
                        <Col xs={3}>
                        {renderBlock(hotMovieData)}
                        </Col>
                        <Col xs={3}>
                        {renderBlock(helpData)}
                        </Col>
                        <Col xs={3}>
                        {renderBlock(informationData)}
                        </Col>
                    </Row>
                </Col>
           </Row>
        </StyledFooter>
    );
}

const renderBlock = (blockInfo:IBlockInfo) => {
    const {title, items} = blockInfo;
    return <>
        <Title>{title}</Title>
        {
            items.map((item, index) => {
                return <Item key={index} href={item.link || '#'}>{item.title}</Item>
            }
            )
        }
    </>
}

const StyledFooter = styled.div`
    background-color: ${footerStyles.backgound_color};
    padding: ${footerStyles.padding};
`
const Title = styled.p`
    font-size: ${footerStyles.title_fontsize};
    text-transform: capitalize;
    font-weight: 500;
    color: ${footerStyles.title_color};
    transition: 0.2s;
    
    &:hover {
        color: ${footerStyles.title_active_color};
    }
`

const Item = styled(Link)`
    display: block;
    padding: 8px 0;
    font-size: ${footerStyles.item_fontsize};
    text-transform: capitalize;
    color: ${footerStyles.item_color};
    transition: 0.2s;

    &:hover {
        color: ${footerStyles.item_active_color};
    }
`

export default Footer;