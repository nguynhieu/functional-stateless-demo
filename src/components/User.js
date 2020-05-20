import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

function User(props) {
  const { title, description } = this.props;
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title={title} description={description} />
    </Card>
  )
}

export default User;