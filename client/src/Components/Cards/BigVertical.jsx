import React from 'react';

const BigVertical = ({ img }) => {
    return (
        <div className='cursor-pointer w-84 h-100 p-0.5 hover:outline hover:outline-2 hover:outline-violet-800'>
            <img className='object-cover  w-84 h-100' src={img} alt="" />
        </div>
    );
};

export default BigVertical;