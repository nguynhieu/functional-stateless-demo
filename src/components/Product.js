import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

export default class Product extends Component {
  render() {
    const { title, description, coverImg } = this.props;

    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={coverImg} />}
      >
        <Meta title={title} description={description} />
      </Card>
    )
  }
} 