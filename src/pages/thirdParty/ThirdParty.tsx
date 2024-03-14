import React from 'react';
import { Outlet } from 'react-router-dom';

import { FormContextProvider } from './ThirdPartyProvider';

const ThirdParty = () => {
    return (
        <FormContextProvider>
            <Outlet />
        </FormContextProvider>
    );
};

export default ThirdParty;