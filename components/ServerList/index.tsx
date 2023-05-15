import { pageStyles } from "@/styles/styles.config";
import { Space } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

export type ItemType = {
    label: string,
    itemCurrentKey: string,
    itemKey: string,
    itemOnClick: any
}

const Item = ({ label, itemCurrentKey, itemKey, itemOnClick }: ItemType) => {
    return <ServerItem onClick={() => itemOnClick(itemKey)} style={itemCurrentKey === itemKey ? { backgroundColor: pageStyles.activeColor } : {}}>{label}</ServerItem>
}

const ServerList: React.FC = () => {
    const [currentKey, setCurrentKey] = useState('server1');

    const onClick = (e: string) => {
        setCurrentKey(e);
    }

    const data: Array<ItemType> = [
        {
            label: 'Server 1',
            itemCurrentKey: currentKey,
            itemKey: 'server1',
            itemOnClick: onClick,
        },
        {
            label: 'Server 2',
            itemCurrentKey: currentKey,
            itemKey: 'server2',
            itemOnClick: onClick,
        },
        {
            label: 'Server 3',
            itemCurrentKey: currentKey,
            itemKey: 'server3',
            itemOnClick: onClick,
        }
    ]
    return (
        <ServerListWrapper>
            <h3>Server: </h3>
            <List>
                <Space>
                    {data.map((item, index) => <Item {...item} key={index} />)}
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
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: ${pageStyles.activeColor};
    }
`

const List = styled.div`

`
export default ServerList;