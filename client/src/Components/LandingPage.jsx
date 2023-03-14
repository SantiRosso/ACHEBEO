import React from 'react';
import SecundaryButton from './Buttons/SecundaryButton';
import PrimaryButton from './Buttons/PrimaryButton';

const LandingPage = () => {
    return (
        <div className='bg-black h-screen'>
            <SecundaryButton name={"INICIAR SESIÓN"} />
            <PrimaryButton name={"INICIAR SESIÓN"} />
            <PrimaryButton name={"HOME"} route={"/home"} />
        </div>
    );
};

export default LandingPage;