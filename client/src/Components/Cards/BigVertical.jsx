import React from 'react';

const BigVertical = ({ img }) => {
    return (
        <div className='inline bg-black object-fill'>
            <img className='w-72 h-96' src={img} alt="" />
        </div>
    );
};

export default BigVertical;