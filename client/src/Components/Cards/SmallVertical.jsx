import React from 'react';

const SmallVertical = ({ img }) => {
    return (
        <div className='cursor-pointer h-80 w-60 p-px hover:outline hover:outline-2 hover:outline-violet-800'>
            <img className='object-cover h-80 w-60 p-px ' src={img} alt="" />
        </div>
    );
};

export default SmallVertical;