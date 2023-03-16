import React from 'react';

const FilterButton = ({ name }) => {
    return (
        <button className='py-1 px-4 rounded-full outline outline-2 outline-slate-600 hover:outline-violet-800 text-white font-bold'>
            {name}
        </button>
    );
};

export default FilterButton;