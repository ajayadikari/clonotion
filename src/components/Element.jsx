import React from 'react';

const Element = ({ name, desc}) => {
    return (
        <div className='ele'>
            <h5 className='label'>{name}</h5>
            {desc && <h6 className='desc'>{desc}</h6>}
        </div>
    );
};

export default Element;
