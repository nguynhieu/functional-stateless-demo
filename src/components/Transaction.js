import React, { Component } from 'react';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Transaction(props) {
  const { firstName, lastName, product, date} = this.props;
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Product</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{product}</td>
          <td>{date}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Transaction;