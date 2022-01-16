import React, { Fragment } from 'react';
import BaseCounter from './BaseCounter';

console.log("The React in Header app is ", React)

const Header = () => {
  return (
    <>
      <div style={{ height: 50, width: '100%', backgroundColor: 'red' }}>
        <span>This is a the Header App</span>
        <BaseCounter/>
      </div>
    </>
  );
}

export default Header;
