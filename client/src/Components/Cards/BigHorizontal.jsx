import React from 'react';

const BigHorizontal = ({ img }) => {
    return (
        <div className='cursor-pointer w-106 h-82 p-0.5 hover:outline hover:outline-2 hover:outline-violet-800'>
            <img className='w-106 h-82' src={img} alt="" />
        </div>
    );
};

export default BigHorizontal;