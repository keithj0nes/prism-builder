'use client';

import { useState } from 'react';
import { FONTS } from './constants';

// const FONTS2 = [
//     { name: 'Inter', fontFamily: 'font-inter' },
//     { name: 'Roboto Mono', fontFamily: 'font-roboto-mono' },
//     { name: 'Pacifico', fontFamily: 'font-pacifico' },
//     { name: 'Sedgwick Ave', fontFamily: 'font-sedgwick-ave' },
//     { name: 'Broken Knight', fontFamily: 'font-broken-knight' },
// ];

// const FONTS3 = {
//     Inter: 'font-inter',
//     'Broken Knight': 'font-broken-knight',
//     'Luckiest Guy': 'font-luckiest-guy',
// };

// const FONTS32 = {
//     'Broken Knight': {
//         fontFamily: 'font-broken-knight',
//         allowed: ['registration', 'transom'],
//     },
//     'Luckiest Guy': 'font-luckiest-guy',
// };

const allowedFonts = ['Broken Knight', 'Inter']


const FontPicker = ({ state, setState }) => {
    const [textValue, setTextValue] = useState('');
    const [selectedFont, setSelectedFont] = useState(state.selectedFont);
    // const [submittedValue, setSubmittedValue] = useState('');

    const onInputSubmit = e => {
        e.preventDefault();
        // console.log(e.target.elements, e.target)
        // console.log(e.target[0].value, 'heh')

        setTextValue(e.target[0].value);
        setState({ ...state, text: e.target[0].value });

    };

    const onFontSubmit = () => {
        setState({ ...state, selectedFont, text: textValue });
    };


    return (
        <div className="bg-blue-50 p-4">
            <h2 className="text-6xl">Font Picker</h2>

            {/* <div className="flex gap-4 justify-center"> */}
            <div className="m-auto w-full text-center">

                <form onSubmit={onInputSubmit}>
                    {/* <input type="text" onChange={e => setTextValue(e.target.value)} /> */}
                    <input type="text" />
                    <button type="submit" className="btn btn-primary py-1 px-3">Submit</button>
                </form>
                <div>
                    <p>{textValue || 'No VALUE'}</p>
                    <p>{selectedFont.name || 'No SELECTED FONT'}</p>
                </div>
            </div>
            <div className="p-6">
                My Fonts!!

                {Object.keys(FONTS).map(fontName => {
                    const fontFamily = FONTS[fontName];

                    // console.log(selectedFont, fontName, selectedFont === fontName, 'selectedFont')

                    return (
                        <div key={fontFamily} className="my-3 ">
                            <div className="inline-block bg-red-100">
                                <p className="text-xs text-gray-500">{fontName}</p>
                                <label className="bg-green-5 p-2 flex gap-4 cursor-pointer" htmlFor={fontFamily}>
                                    <input
                                        type="radio"
                                        value={fontName}
                                        id={fontFamily}
                                        name="font-radio"
                                        // onChange={e => setSelectedFont(e.target.value)}
                                        onChange={e => setState({ ...state, selectedFont: e.target.value, text: textValue || state.text })}
                                        checked={state.selectedFont === fontName}
                                    />
                                    <p className={`text-5xl ${fontFamily}`}>{textValue || fontName}</p>
                                </label>
                            </div>

                        </div>
                    );
                })}

                {/* <div className="flex justify-center pt-4">

                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={onFontSubmit}
                    >
                        Submit Font
                    </button>
                </div> */}

            </div>
        </div>
    );
};

export default FontPicker;
