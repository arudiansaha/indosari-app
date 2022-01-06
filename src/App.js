import React from 'react';
import Navigation from './components/Navigation'
import NavRoutes from './components/NavRoutes'

export default class App extends React.Component {
  render() {
    return (
      <div className="relative flex">
        <div className="bg-sky-900 shadow shadow w-64">
          <Navigation />
        </div>
        <div className="container mx-auto bg-white">
          <NavRoutes />
        </div>
      </div>
    );
  }
}
