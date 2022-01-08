import React from 'react';
import Navigation from './components/Navigation'
import NavRoutes from './components/NavRoutes'

export default class App extends React.Component {
  render() {
    return (
      <div className="relative flex">
        <div className="bg-gray-50 border-r w-80">
          <Navigation />
        </div>
        <div className="container mx-auto bg-white">
          <NavRoutes />
        </div>
      </div>
    );
  }
}
