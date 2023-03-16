import React from 'react';
import NavBar from "./NavBar"

const Login = () => {
    return (
        <div className='h-screen flex flex-col items-center'>
            <NavBar/>
            <h1 className='flex justify-center text-white font-bold text-3xl my-4'>Iniciar sesión</h1>
            <div className='flex flex-col justify-center items-start bg-white bg-opacity-5 h-11/12 w-4/6 p-10'>
                <p className='text-white'>¿Tienes una cuenta de MovieLabs?</p>
                <input type="email" placeholder='Dirección de e-mail' className='bg-white bg-opacity-5 text-white outline outline-2 outline-white rounded-sm h-12 w-11/12 mt-10'/>
                <input type="password" placeholder='Contraseña' className='bg-white bg-opacity-5 text-white outline outline-2 outline-white rounded-sm h-12 w-11/12 mt-10'/>
            </div>
        </div>
    );
};

export default Login;