import React from 'react';
import ReactDOM from 'react-dom';
import BaseCounter from './BaseCounter';
import Button from './Button';
import Header from './Header';

function App() {
  return (
    <div>
      <BaseCounter />
      <Button/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
