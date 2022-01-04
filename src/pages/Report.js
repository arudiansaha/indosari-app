import React from 'react';
import ReportReceived from '../components/ReportReceived';
import ReportSent from '../components/ReportSent'

export default class Report extends React.Component {
  render() {
    return (
      <div className="container mx-auto p-8">
        <div>
          <ReportReceived />
        </div>
        <br />
        <div>
          <ReportSent />
        </div>
      </div>
    );
  }
}
