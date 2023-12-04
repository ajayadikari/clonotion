import React from 'react';

const Chunks = (props) => {
    const propNames = Object.keys(props);
    console.log(propNames, 'ckjdjjdjjjjdjd')
    return (
        <div className='drop-down'>
            {propNames.map((p) => (
                <div key={p}>
                    <p>{props[p].name}</p>
                </div>
            ))}
        </div>
    );
};

export default Chunks;
