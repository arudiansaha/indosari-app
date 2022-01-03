import React from 'react';
import InputReceived from '../components/InputReceived';
import InputSent from '../components/InputSent';

export default class Input extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-8">
        <div>
          <InputReceived />
        </div>
        <br />
        <div>
          <InputSent />
        </div>
      </div>
    );
  }
}
