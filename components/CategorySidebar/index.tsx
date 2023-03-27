import styled from "styled-components";
import { AppstoreOutlined, MailOutlined, SettingOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { MenuProps, Space } from 'antd';
import { Menu } from 'antd';
import { pageStyles } from "@/styles/styles.config";
import { pagesInfo } from "@/pagesInfo";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem("Home",'home'),
    getItem('men fashion dress', 'sub2'),

    getItem('men fashion dress4', 'sub4', [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),

    getItem('men fashion dress5', 'sub5', [
        getItem('Option 9', '13'),
        getItem('Option 10', '14'),
        getItem('Option 11', '15'),
        getItem('Option 12', '16'),
    ]),

    getItem('men fashion dress6', 'sub6', [
        getItem('Option 9', '17'),
        getItem('Option 10', '18'),
        getItem('Option 11', '19'),
        getItem('Option 12', '20'),
    ]),

    getItem('men fashion dress7', 'sub7', [
        getItem('Option 9', '21'),
        getItem('Option 10', '22'),
        getItem('Option 11', '23'),
        getItem('Option 12', '2412'),
    ]),
];

const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
};

const CategorySidebar = () => {
    return (
        <CategorySidebarWrapper>
            <Title>
                <Space>
                    <UnorderedListOutlined />
                    <span>All Categories</span>
                </Space>
            </Title>
            <StyledMenu
                theme='dark'
                onClick={onClick}
                // style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </CategorySidebarWrapper>
    );
}

const StyledMenu = styled(Menu)`
    background-color: ${pageStyles.backgoundColor};
    color: ${pageStyles.textColor};
    .ant-menu-submenu, .ant-menu-item {
        color: ${pageStyles.textColor};

        &:active {
            background-color: ${pageStyles.textColor2} !important;
        }
    }

    .ant-menu-item-selected {
        color: ${pageStyles.activeColor};
        background-color: ${pageStyles.textColor2} !important;

        &:active {
            background-color: ${pageStyles.textColor2} !important;
        }
    }

    .ant-menu-submenu-selected {

        >.ant-menu-submenu-title {
            color: ${pageStyles.activeColor};
        }
    }

    .ant-menu-submenu-title {
        &:active {
            background-color: ${pageStyles.textColor2} !important;
        }
    }
`

const Title = styled.div`
height: 3rem;
display: flex;
align-items: center;
padding: 0 1.5rem;
background-color: ${pageStyles.textColor2};

span {
    font-size: 1.5rem;
}
`

const CategorySidebarWrapper = styled.div`
border-radius: 0.5rem;
    border: 1px solid ${pageStyles.textColor2};
`

export default CategorySidebar;