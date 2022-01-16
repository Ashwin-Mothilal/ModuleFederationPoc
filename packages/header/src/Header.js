import React, { Fragment } from 'react';
import BaseCounter from './BaseCounter';

console.log("The React in Header app is ", React)

const Header = (props) => {
  console.log("The props in Header app is ", props)
  return (
    <>
      <div style={{ height: 50, backgroundColor: 'red', padding:24,  }}>
        <span>This is a the Header App</span>
      </div>
      <BaseCounter/>
    </>
  );
}

export default Header;
