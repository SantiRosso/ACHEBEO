import React from 'react';

const SmallHorizontal = ({ img }) => {
    return (
        <div>
            <div className='cursor-pointer h-44 w-72 p-px hover:outline hover:outline-2 hover:outline-violet-800'>
                <img className='object-cover h-44 w-72 p-px ' src={img} alt="" />
            </div>
        </div>
    );
};

export default SmallHorizontal;