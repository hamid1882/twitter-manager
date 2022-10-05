import { Button, Card, Divider, Input, Space } from 'antd'
import React, { Component } from 'react'
import Classes from "./Homepage.module.css"

export class Homepage extends Component {
  render() {
    return (
      <div className={Classes.Container}>
        <Card size="medium">
          <Divider>Tweet</Divider>
          <Space>
            <Input placeholder='Write Here' />
            <Button type="primary">Tweet</Button>
          </Space>
        </Card>
      </div>
    )
  }
}

export default Homepage
