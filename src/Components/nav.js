import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';
import { Menu } from 'antd';
import { HomeOutlined, CommentOutlined, PictureOutlined } from '@ant-design/icons';

function NavBar() {
  
    const { SubMenu } = Menu;
    return (
        <Menu mode="horizontal" theme = "dark">
          <Menu.Item key="mail" icon={<HomeOutlined />}>
          <a target="_self" href="/">
             Home 
            </a>
          </Menu.Item>
          <Menu.Item key="app"  icon={<CommentOutlined />}>
          <a target="_self" href="/quotes">
             Quotes
            </a>
          </Menu.Item>
          <Menu.Item key="app"  icon={<PictureOutlined />}>
          <a target="_self" href="/pictures">
             Pictures
            </a>
          </Menu.Item>
        </Menu>
    );
  }
  
  export default NavBar;
  