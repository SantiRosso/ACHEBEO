import React from 'react';

const PrimaryButton = ({ name, onClick, route }) => {
    const handleClick = () => {

    }
    return (
        <button className='flex py-2 px-7 bg-white bg-opacity-5 text-white rounded-md hover:bg-white hover:text-black font-bold' onClick={handleClick}  >
            {name}
        </button>
    );
};

export default PrimaryButton;