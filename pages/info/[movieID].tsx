import { useRouter } from "next/router";
import { NextPageWithLayout } from "../_app";
import { IMovieCarousel } from "@/commons/common";
import Comments from "@/components/Comments"
import Container from "@/components/Container"
import MovieCarousel from "@/components/MovieCarousel"
import DetailLayout from '@/layouts/DetailLayout'
import { pagesInfo } from "@/pagesInfo"
import { pageStyles } from "@/styles/styles.config"
import { FacebookOutlined, InstagramOutlined, PlayCircleOutlined, TwitterOutlined } from "@ant-design/icons"
import { Rate, Space } from "antd"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { ReactElement } from "react"
import styled from "styled-components"

const DetailPage: NextPageWithLayout = () => {
    const iMovieCarousel: IMovieCarousel = {
        centerMode: false,
        slidesToShow: 4,
        iCatalogInfo: {
            title: 'movie category',
            description: 'lorem ipsum is sunoly dummy text of printing and ypesettings'
        }
    }
    const router = useRouter();
    const {movieID} = router.query;
    console.log("movieID = ",movieID);
    
    return (
        <>
            <Head>
                <title>{pagesInfo.title}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <WatchWrapper>
                    <StyledRate disabled defaultValue={2} />
                    <StyledPlayIcon />
                </WatchWrapper>
                <CommonInfoWrapper>
                    <AvatarWrapper>
                        <Avatar src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80' alt="123" width={50} height={70} />
                    </AvatarWrapper>
                    <InfoWrapper>
                        <Title>Hury Animate Blue strack new moive (2018)</Title>
                        <InfoItem>
                            <Rate disabled defaultValue={2} />
                        </InfoItem>
                        <InfoItem><b>Cateogry : </b><span>Enligsh Animaion movie</span></InfoItem>
                        <InfoItem><b>Actor: </b><span>Prit Kapel, Justin orjun</span></InfoItem>
                        <InfoItem><b>Genre: </b><span>Drama, Action</span></InfoItem>
                        <InfoItem><b>Release: </b><span>Jun, 02, 2018</span></InfoItem>
                        <InfoItem><b>Langualge: </b><span>English</span></InfoItem>
                        <Shared>
                            <SharedTile>Share:</SharedTile>
                            <Space>
                                <SharedItem href='/'><FacebookOutlined style={{ fontSize: '20px', color: pageStyles.activeColor }} /></SharedItem>
                                <SharedItem href='/'><TwitterOutlined style={{ fontSize: '20px', color: '#0abaef' }} /></SharedItem>
                                <SharedItem href='/'><InstagramOutlined style={{ fontSize: '20px', color: '#b60fd5' }} /></SharedItem>
                                <SharedItem href='/'><FacebookOutlined style={{ fontSize: '20px', color: '#dbac29' }} /></SharedItem>
                            </Space>

                        </Shared>
                    </InfoWrapper>
                </CommonInfoWrapper>
                <StoryWrapper>
                    <StoryTitle>Movie Story</StoryTitle>
                    <StoryContent>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel sed eum culpa ut repellat velit quibusdam facere ratione nam repellendus rem nobis soluta, eaque quisquam ipsa atque. Saepe, nostrum esse.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos id ducimus similique ipsam dicta, et soluta enim? Ab amet beatae voluptatem aspernatur et nisi dicta alias, libero quaerat dolores. Blanditiis.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde aliquam doloremque voluptatibus vitae adipisci harum enim eveniet quisquam necessitatibus voluptates! Architecto sed magni alias necessitatibus optio saepe odio rem beatae!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ad nostrum illo, nam libero quo odio magnam labore aut assumenda inventore sit temporibus delectus? Perspiciatis eveniet amet dolore atque ipsa?
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero culpa corporis quae illo ipsum aperiam dicta, facilis sit mollitia quaerat fugit molestias velit harum! Reprehenderit voluptate excepturi et odit veritatis?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas fugiat facilis omnis reprehenderit, dicta quod id recusandae repellat officiis magni enim ut et cumque ipsam alias laudantium aspernatur obcaecati praesentium.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio facere exercitationem molestias voluptatum tempora mollitia debitis eos, voluptatem, incidunt delectus doloribus! Quasi ab animi beatae, facilis esse aliquam alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic tenetur eos modi, et autem quia voluptas a qui iure perferendis quo ea officia ut neque dolores deleniti architecto at.
                    </StoryContent>
                </StoryWrapper>
                <CommentWrapper>
                    <Comments />
                </CommentWrapper>

            </Container>
            <MovieCarousel {...iMovieCarousel} />
        </>
    );
}

const CommentWrapper = styled.div`
// margin-left: 4rem;
//     background-color: ${pageStyles.textColor2};
//     padding-left: 4rem;

    
`;

const StoryTitle = styled.p`
font-size: 2rem;
`

const StoryContent = styled.p`
font-size: 1rem;
`

const StoryWrapper = styled.div`
margin-left: 4rem;
`

const InfoItem = styled.div`
margin-bottom: 1rem;
`

const SharedTile = styled.span`
        font-size: 1rem;
        text-transform: uppercase;
        color: ${pageStyles.activeColor};
        margin-right: 1rem;
`

const SharedItem = styled(Link)`
    

`

const Shared = styled.div`

`

const InfoWrapper = styled.div`
width: 75%;
margin-top: 3rem;
padding-left: 2rem;
`
const AvatarWrapper = styled.div`
background-color: red;

width: 20rem;
height: 30rem;

position: relative;
    top: -12rem;
    border-radius: 1rem;
`
const Avatar = styled(Image)`

`

const StyledPlayIcon = styled(PlayCircleOutlined)`
    font-size: 4rem;
`

const WatchWrapper = styled.div`
    height: 35rem;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${pageStyles.activeColor};
`


const CommonInfoWrapper = styled.div`
display: flex;
    margin-left: 4rem;

        justify-content: space-between;
        height: 22rem;
`

const Title = styled.h3`
color: green;
    font-size: 2rem;

`

const StyledRate = styled(Rate)`
position: absolute;
top: 1rem;
right: 1rem;
`

DetailPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <DetailLayout>
            {page}
        </DetailLayout>
    )
}

export default DetailPage;