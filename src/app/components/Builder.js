'use client';

// import { useState, useEffect } from 'react';
import { useGlobalState } from '../context/state';
import CostBreakdown from './CostBreakdown';
import Canvas3 from './Canvas3';
import Tabs from './tabs';

// const useDebounce = (initialValue = '', delay = 1000) => {
//     const [actualValue, setActualValue] = useState(initialValue);
//     const [debounceValue, setDebounceValue] = useState(initialValue);
//     useEffect(() => {
//         const debounceId = setTimeout(() => setDebounceValue(actualValue), delay);
//         return () => clearTimeout(debounceId);
//     }, [actualValue, delay]);
//     return [debounceValue, setActualValue];
// };


// https://stackoverflow.com/questions/60347194/how-to-fit-text-to-a-precise-width-on-html-canvas

// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258


const Builder = () => {
    const b = useGlobalState();

    const onSubmitOrder = () => {
        console.log('... submitting order ...');
        console.log('........................');
        // console.log(state);
    };


    return (
        <div>
            <div className="bg-primary h-[100px] text-white flex items-center">
                <div className="container flex justify-between">
                    <p className="text-3xl">Prism</p>
                    <p className="text-3xl">Boat Name Builder</p>
                </div>
            </div>

            <div className="container py-4">
                <h1 className="text-4xl font-bold">
                    Design your custom boat name!
                </h1>

                <p className="pt-3">
                    Use this tool to help see what your boat name will look like before even working with one of our designers! Simply follow the steps and you will see a live preview from the font style you choose all the way to the sizing of your boat name. Once you have finalized your boat name style, you can send it off to our designers who will touch base with you within 48 hours.
                </p>
            </div>


            <div className="bg-teal-00 p-2 container flex gap-4 pt-6">
                <div className="w-full">
                    <Tabs />
                    <CostBreakdown />

                    <button
                        onClick={onSubmitOrder}
                        type="button"
                        className="btn btn-primary mt-6 w-full text-lg font-semibold"
                    >
                        Go To Quote
                    </button>
                </div>

                <div className="w-ful flex flex-col gap-7">

                    <div>
                        <Canvas3
                            name="Boat Name"
                            data={b['Boat Name']}
                            update={b.updateState}
                            w={600}
                        />
                    </div>

                    <div>
                        <Canvas3
                            name="Hailing Port"
                            data={b['Hailing Port']}
                            update={b.updateState}
                            w={600}
                        />
                    </div>

                    <div>
                        <Canvas3
                            name="WN Numbers"
                            data={b['WN Numbers']}
                            update={b.updateState}
                            w={600}
                        />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Builder;
