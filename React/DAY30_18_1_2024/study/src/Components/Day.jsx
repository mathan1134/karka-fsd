import React, { createContext } from 'react';
import Dayc from './Dayc';

export const MyContext = createContext('Default Value');

const Day = () => {
    return (
        <div>
            <MyContext.Provider value="ideas">
                <Dayc />
            </MyContext.Provider>
        </div>
    );
}

export default Day