/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import { createContext, useContext, useState } from 'react';
import { DEFAULT_STATE_BOAT_NAME, DEFAULT_STATE_WN_NUMBERS, DEFAULT_STATE_HAILING_PORT } from '../components/constants';

const StateContext = createContext(null);

const StateProvider = ({ children }) => {
    const [state, setState] = useState({
        'Boat Name': DEFAULT_STATE_BOAT_NAME,
        'Hailing Port': DEFAULT_STATE_HAILING_PORT,
        'WN Numbers': DEFAULT_STATE_WN_NUMBERS,
        costs: {
            'Boat Name': 3463,
            'Port & Starboard Graphics (x2)': 2445,
        },
    });

    // console.log(state, 'STATE!!!!!');

    const updateState = (graphicType, data) => {
        // if (graphicType === 'WN Numbers') {
        //     // add price here
        //     console.log(data, 'DATA!!!')
        //     if (data.text)
        // }

        setState({
            ...state,
            [graphicType]: { ...state[graphicType], ...data },
            // redraw: true,
        });
    };

    const updateHeight = (graphicType, value, key = 'imageSize') => {
        const isProportional = state[graphicType][key].maintainProportions;
        const widthInches = (state[graphicType].pixelSizes.pixelWidth / (state[graphicType].pixelSizes.pixelHeight / value)) || 0;
        console.log({ widthInches, isProportional });

        setState({
            ...state,
            [graphicType]: {
                ...state[graphicType],
                [key]: {
                    ...state[graphicType][key],
                    height: value,
                    width: isProportional ? widthInches.toFixed(2) : state[graphicType][key].width,
                },
            },
        });
    };


    const updateWidth = (graphicType, value, key = 'imageSize') => {
        const isProportional = state[graphicType][key].maintainProportions;
        const heightInches = (state[graphicType].pixelSizes.pixelHeight / (state[graphicType].pixelSizes.pixelWidth / value)) || 0;
        console.log({ heightInches, isProportional });

        setState({
            ...state,
            [graphicType]: {
                ...state[graphicType],
                [key]: {
                    ...state[graphicType][key],
                    height: isProportional ? heightInches.toFixed(2) : state[graphicType][key].height,
                    width: value,
                },
            },
        });
    };

    const value = {
        // val: 'myVal',
        updateState,
        updateHeight,
        updateWidth,
        ...state,
    };

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;

export const useGlobalState = () => useContext(StateContext);
