import React from 'react';
import NavBar from "./NavBar"
import PrimaryButton from "./Buttons/PrimaryButton"

const Login = () => {
    return (
        <div>
            <NavBar/>
            <div className='flex flex-col items-center'>
                <h1 className='flex justify-center text-white font-bold text-3xl my-4'>Iniciar sesión</h1>
                <div className='flex flex-col justify-center items-start bg-white bg-opacity-5 h-11/12 w-4/6 p-10'>
                    <p className='text-white'>¿Tienes una cuenta de MovieLabs?</p>
                    <input type="email" placeholder='Dirección de e-mail' className='bg-white bg-opacity-5 text-white outline outline-2 outline-white rounded-sm h-12 w-11/12 mt-10'/>
                    <input type="password" placeholder='Contraseña' className='bg-white bg-opacity-5 text-white outline outline-2 outline-white rounded-sm h-12 w-11/12 mt-10'/>
                    <div className='flex items-center mt-10'>
                        <PrimaryButton name="Inisiar sesión"/>
                        <p className='text-purple-700 font-bold ml-5'>¿Olvidaste la contraseña?</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Login;