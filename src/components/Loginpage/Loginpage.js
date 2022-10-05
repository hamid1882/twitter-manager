import React, { Component } from 'react'
import { Button, Input, Space, Divider, Card, Spin } from 'antd';
import "antd/dist/antd.css";
import Classes from "./Loginpage.module.css";

class Loginpage extends Component {
  render() {
    return (
      <div className={Classes.Container}>
        <Card size="small">
          <Divider>Login</Divider>
          <Space>
            <Input placeholder='Email' />
            <Input placeholder='Password' />
            <Button type="primary">Login</Button>
            OR
            <Button type="primary"><a href="https://backend-tweetmanager.herokuapp.com/authorization/twitter_login/">Login with Twitter</a></Button>
          </Space>
        </Card>
      </div>
    )
  }
}

export default Loginpage
