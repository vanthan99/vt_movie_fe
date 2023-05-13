import { IMenu } from "@/commons/common";
import { pageStyles } from "@/styles/styles.config";
import { CaretDownOutlined, FacebookOutlined, InstagramOutlined, SkypeOutlined, TwitterOutlined, YoutubeOutlined } from "@ant-design/icons";
import { Space } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Container from "../Container";
const Menu = () => {
    const MenuDatas: Array<IMenu> = [
        {
            item: {
                title: 'trang chủ',
                link: '/'
            }
        },
        {
            item: {
                title: 'thể loại',
                link: '/the-loai',
                parentLink: '/list',
            },
            subItems: [
                {
                    title: 'phim hình sự',
                    link: '/phim-hinh-su'
                },
                {
                    title: 'phim tình cảm',
                    link: 'phim-tinh-cam'
                },
                {
                    title: 'phim hành động',
                    link: '/phim-hanh-dong'
                },
                {
                    title: 'phim chiến tranh',
                    link: '/phim-chien-tranh'
                },
                {
                    title: 'phim cổ trang',
                    link: '/phim-co-trang'
                },
                {
                    title: 'phim bí ẩn',
                    link: '/phim-bi-an'
                },
                {
                    title: 'phim võ thuật',
                    link: '/phim-vo-thuat'
                },
                {
                    title: 'phim phiêu lưu',
                    link: '/phim-phieu-luu'
                },
                {
                    title: 'phim tâm lý',
                    link: 'phim-tma-ly'
                },
                {
                    title: 'phim kinh dị',
                    link: '/phim-kinh-di'
                },
                {
                    title: 'phim kịch tính',
                    link: '/phim-kich-tinh'
                },
                {
                    title: 'phim hài',
                    link: '/phim-hai'
                },
                {
                    title: 'phim viễn tưởng',
                    link: '/phim-vien-tuong'
                },
                {
                    title: 'phim thần thoại',
                    link: 'phim-than-thoai'
                },
                {
                    title: 'phim TV shows',
                    link: '/phim-tv-shows'
                },
                {
                    title: 'phim khoa học',
                    link: '/phim-hoa-hoc'
                },
                {
                    title: 'phim 18+',
                    link: '/phim-18'
                },
                {
                    title: 'phim gia đình',
                    link: '/phim-gia-dinh'
                },
            ]
        },
        {
            item: {
                title: 'quốc gia',
                link: '/quoc-gia',
                parentLink: '/list',
            },
            subItems: [
                {
                    title: 'phim hàn quốc',
                    link: '/phim-han-quoc'
                },
                {
                    title: 'phim mỹ',
                    link: '/phim-my'
                },
                {
                    title: 'phim nhật bản',
                    link: '/phim-nhat-ban'
                },
                {
                    title: 'phim thái lan',
                    link: '/phim-thai-lan'
                },
                {
                    title: 'phim việt nam',
                    link: '/phim-viet-nam'
                },
            ]
        },
        {
            item: {
                title: 'phim mới',
                link: '/phim-moi',
                parentLink: '/list',
            }
        },
        {
            item: {
                title: 'phim bộ',
                link: '/phim-bo',
                parentLink: '/list',
            }
        },
        {
            item: {
                title: 'phim lẻ',
                link: '/phim-le',
                parentLink: '/list',
            }
        },
        {
            item: {
                title: 'phim chiếu rạp 🔥🔥🔥',
                link: '/phim-chieu-rap',
                parentLink: '/list',
            }
        },
    ];
    const router = useRouter();
    return (
        <MenuWrapper>
            <Container align='middle' style={{ height: '4rem' }}>
                <Content>

                    <ul>
                        {
                            MenuDatas.map((value, index) => {
                                const { item, subItems } = value;
                                return (
                                    <li key={index}>
                                        <ParentItem>
                                            {subItems != undefined && subItems.length > 0 && <>{item.title} <CaretDownOutlined style={{ fontSize: '14px' }} /></> || <StyledLink className={router.asPath === (item.parentLink ? item.parentLink + item.link : item.link)?'active':''} href={item.parentLink ? item.parentLink + item.link : item.link}>{item.title}</StyledLink>}
                                        </ParentItem>
                                        {subItems != undefined && subItems.length > 0 && <SubItemsWrapper>
                                            {subItems?.map((value, i) => <SubItem className={router.asPath === (item.parentLink ? item.parentLink + value.link : value.link)?'active':'' } key={i} href={item.parentLink ? item.parentLink + value.link : value.link}>{value.title}</SubItem>)}
                                        </SubItemsWrapper>}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Shared>
                        <StyledSpace>
                            <StyledLink href='/'>
                                <FacebookOutlined style={{ fontSize: '20px' }} />
                            </StyledLink>
                            <StyledLink href='/'>
                                <SkypeOutlined style={{ fontSize: '20px' }} />
                            </StyledLink>
                            <StyledLink href='/'>
                                <TwitterOutlined style={{ fontSize: '20px' }} />
                            </StyledLink>
                            <StyledLink href='/'>
                                <YoutubeOutlined style={{ fontSize: '20px' }} />
                            </StyledLink>
                            <StyledLink href='/'>
                                <InstagramOutlined style={{ fontSize: '20px' }} />
                            </StyledLink>
                        </StyledSpace>
                    </Shared>
                </Content>
            </Container>
        </MenuWrapper>
    );
}

const StyledSpace = styled(Space)`
    transition: .5s;
`

const ParentItem = styled.div`
    color: ${pageStyles.textColor};
    font-weight: 400;
    font-size: 17px;
    text-transform: uppercase;

    &:hover {
        color: ${pageStyles.activeColor};
    }
`

const StyledLink = styled(Link)`
    color: ${pageStyles.textColor};
    font-weight: 400;
    font-size: 17px;

    &:hover {
        color: ${pageStyles.activeColor};
    }
    `

const SubItem = styled(Link)`
    width: 10rem;
    font-size: 17px;
    text-transform: capitalize;
    padding: 5px 0;

    &:hover {
        color: ${pageStyles.activeColor};
    }
`

const SubItemsWrapper = styled.div`
    position: absolute;
    display: none;
    width: 35rem;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: ${pageStyles.backgoundColor};
    transition: 0.5s;
    z-index: 1; 
    padding-top: 5px;
    padding-bottom: 5px;
    left: -1rem;
    padding-left: 1rem;
    padding-right: 1rem;

`

const Shared = styled.div`
    
    &:hover {
        ${StyledSpace} {
            gap: 15px !important;
        }
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
`

const MenuWrapper = styled.div`
    ${Content} {
        ul {
            list-style: none;
            display: flex;
            padding-left: 0;
            margin-bottom: 0;
            li {
                padding-right: 1rem;
                position: relative;
                
                .active {
                    color: ${pageStyles.activeColor};
                }

                &:hover {
                    ${SubItemsWrapper} {
                        display: flex;
                    }
                }
            }
        }
    }

    border-bottom: 1px solid ${pageStyles.textColor2};
`

export default Menu;