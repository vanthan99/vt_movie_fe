import { pagesInfo } from "@/pagesInfo";
import { footerStyles } from "@/styles/styles.config";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface IFooterProps {}

const Footer:React.FC<IFooterProps> = () => {
    return (
        <FooterWrapper>
            
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
    background: url('http://demo.amytheme.com/movie/demo/elementor-watch-online/wp-content/themes/amy-movie/images/frontend/footer_bg.png') no-repeat;
    background-size: cover;
    min-height: 514px;
    padding-top: 100px;
    color: #bdbdbd;
    font-size: 15px;

    display: block;
`
export default Footer;