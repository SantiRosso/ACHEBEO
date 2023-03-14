import React from 'react';
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {
    return (
        <div className='bg-white bg-opacity-10 flex items-center py-3 px-5 gap-3 rounded-md'>
            <BiSearch size='30px' color='white' />
            <input className='bg-white bg-opacity-0 border-0 focus:outline-none text-xl text-slate-50 w-full' type="text" placeholder='¿Que estas buscando?' />
        </div>
    );
};

export default SearchBar;