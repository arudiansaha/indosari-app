import React from 'react';
import Navigation from './components/Navigation'
import NavRoutes from './components/NavRoutes'

export default class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto flex relative">
        <div className="bg-gray-50">
          <Navigation />
        </div>
        <div className="bg-white">
          <NavRoutes />
        </div>
      </div>
    );
  }
}
