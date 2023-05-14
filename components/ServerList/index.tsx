import { pageStyles } from "@/styles/styles.config";
import { MenuProps, Space } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ServerList: React.FC = () => {
    const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

useEffect(() => {
    console.log("test",current)
},[])
    return (
        <ServerListWrapper>
            <h3>Server: </h3>
            <List>
                <Space>
                    <ServerItem onClick={() => {setCurrent('1')}}>Server 1</ServerItem>
                    <ServerItem onClick={() => {setCurrent('2')}}>Server 2</ServerItem>
                    <ServerItem onClick={() => {setCurrent('3')}}>Server 3</ServerItem>
                    <ServerItem onClick={() => {setCurrent('4')}}>Server 4</ServerItem>
                </Space>
            </List>
        </ServerListWrapper>
    );
}
const ServerListWrapper = styled.div`
    display: flex;
    margin-top: 2rem;

    h3 {
        margin-bottom: 0;
        margin-right: 1rem;
        display: flex;
        align-items: center;
    }
`

const ServerItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    padding: 7px 6px;
    border-radius: 8px;
    background-color: ${pageStyles.activeColor};
    cursor: pointer;
`

const List = styled.div`

`
export default ServerList;