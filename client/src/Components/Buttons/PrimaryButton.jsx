import React from 'react';
import { useNavigate } from "react-router-dom"

const PrimaryButton = ({ name, onClick, route }) => {
    
    const navigate = useNavigate()
    const handleClick = () => {
        if(route){
            navigate(route)
        } else {
            onClick()
        }
    }

    return (
        <button className='py-2 px-7 bg-white bg-opacity-5 text-white rounded-md hover:bg-white hover:text-black font-bold' onClick={handleClick}  >
            {name}
        </button>
    );
};

export default PrimaryButton;