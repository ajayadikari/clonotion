import React from 'react';

const DropDownBox = (props) => {
  const propNames = Object.keys(props);
  return (
    <div className='drop-down'>
      {propNames.map((p) => (
        <div key={p}>
          <p>{props[p].name}</p>
          <p>{props[p].desc}</p>
        </div>
      ))}
    </div>
  );
};

export default DropDownBox;
