import Head from "next/head";
import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import GridLeftSitebarLayout from '@/layouts/GridLeftSitebarLayout'
import { Col, Row } from "antd";
import ProductGridItem from "@/components/ProductGridItem";
const gridleftsitebar : NextPageWithLayout = () => {
  const rowStyled :React.CSSProperties = {
    marginTop:'1.75rem',
    marginBottom:'1.75rem',
  }
    return (
        <>
          <Head>
            {/* <title>{pagesInfo.title}</title> */}
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <Row gutter={[16,16]} style={rowStyled}>
              <Col span={8}><ProductGridItem /></Col>
              <Col span={8}><ProductGridItem /></Col>
              <Col span={8}><ProductGridItem /></Col>
              <Col span={8}><ProductGridItem /></Col>
              <Col span={8}><ProductGridItem /></Col>
              <Col span={8}><ProductGridItem /></Col>
              <Col span={8}><ProductGridItem /></Col>
              <Col span={8}><ProductGridItem /></Col>
              <Col span={8}><ProductGridItem /></Col>
              <Col span={8}><ProductGridItem /></Col>
              <Col span={8}><ProductGridItem /></Col>
              <Col span={8}><ProductGridItem /></Col>
              <Col span={8}><ProductGridItem /></Col>
              <Col span={8}><ProductGridItem /></Col>
              <Col span={8}><ProductGridItem /></Col>
            </Row>
          </main>
        </>
      )
}

gridleftsitebar.getLayout = function getLayout(page: ReactElement) {
    return (
      <GridLeftSitebarLayout>
        {page}
      </GridLeftSitebarLayout>
    )
  }
   

export default gridleftsitebar;