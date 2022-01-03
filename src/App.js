import React from 'react';
import Navigation from './components/Navigation'
import NavRoutes from './components/NavRoutes'

export default class App extends React.Component {
  render() {
    return (
      <div className="relative flex">
        <div className="static bg-gray-50 border-r border-gray-200 w-64">
          <Navigation />
        </div>
        <div className="container mx-auto bg-white">
          <NavRoutes />
        </div>
      </div>
    );
  }
}
