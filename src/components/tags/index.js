import React from 'react';
import { Button } from 'reactstrap';

export default class Tags extends React.Component {
  render() {
    return (
      <div className="Interesses">
        <Button id="tag" outline color="primary">primary</Button>{' '}
        <Button id="tag" outline color="secondary">secondary</Button>{' '}
        <Button id="tag" outline color="success">success</Button>{' '}
        <Button id="tag" outline color="info">info</Button>{' '}
        <Button id="tag" outline color="warning">warning</Button>{' '}
        <Button id="tag" outline color="danger">danger</Button>
      </div>
    );
  }
}