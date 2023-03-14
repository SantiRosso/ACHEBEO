import React from 'react';
import SecundaryButton from './Buttons/SecundaryButton';
import PrimaryButton from './Buttons/PrimaryButton';

const LandingPage = () => {
    return (
        <div>
            <SecundaryButton name={"INICIAR SESIÓN"} />
            <PrimaryButton name={"INICIAR SESIÓN"} />
            <PrimaryButton name={"HOME"} route={"/home"} />
        </div>
    );
};

export default LandingPage;