import React from 'react';

const MyComponent = (props) => {
  const { name, message } = props;

  return (
    <div>
      <h2>Name: {name}</h2>
      <p>{message}</p>
    </div>
  );
};

export default MyComponent;
