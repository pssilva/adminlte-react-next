import Image from 'next/image';
import React, { Component } from 'react';

class Preloader extends Component {
  render() {
    return (
      <div>
        <div className="preloader flex-column justify-content-center align-items-center">
          <Image className="animation__shake" src="/dist/img/AdminLTELogo.png" alt="AdminLTELogo" priority={true} height="60" width="60" />
        </div>
      </div>
    );
  }
}

export default Preloader;