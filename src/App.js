import React from 'react';
import Navigation from './components/Navigation'
import Routes from './components/Routes'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <div>
          <Routes />
        </div>
      </div>
    );
  }
}
