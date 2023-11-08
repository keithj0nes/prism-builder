import { Switch } from '@headlessui/react';
import CurrencyInput from 'react-currency-input-field';
import Icon from '../Icon';
import { useGlobalState } from '../../context/state';
import FontBook from '../FontBook';
import ColorPalette from '../ColorPalette';
import SizingDocumentModal from '../SizingDocumentModal';

const GRAPHIC_TYPE = 'WN Numbers';


const WNNumbers = ({ w }) => {
    const b = useGlobalState();
    const wn_numbers = b[GRAPHIC_TYPE];

    return (
        <div className="bg-white p-4 container">

            {/* <div>
                <p className="text-primary font-bold">City & State</p>
                <p className="block text-xs text-gray-500 italic">Provide the city and state where your boat is registered</p>

                <div className="flex gap-3 w-full mt-3">
                    <label htmlFor={`${GRAPHIC_TYPE}_city`} className="w-2/3">
                        <span className="block text-sm font-bold">City</span>
                        <input
                            type="text"
                            id={`${GRAPHIC_TYPE}_city`}
                            value={wn_numbers.city}
                            onChange={e => b.updateState(GRAPHIC_TYPE, { city: e.target.value })}
                            className="p-2 mt-1.5 border-2 bg-gray-50 w-full"
                        />
                    </label>

                    <label htmlFor={`${GRAPHIC_TYPE}_state`} className="w-1/3">
                        <span className="block text-sm font-bold">State</span>
                        <input
                            type="text"
                            id={`${GRAPHIC_TYPE}_state`}
                            value={wn_numbers.state}
                            onChange={e => b.updateState(GRAPHIC_TYPE, { state: e.target.value })}
                            className="p-2 mt-1.5 border-2 bg-gray-50 w-full"
                        />
                    </label>
                </div>
            </div> */}

            <label htmlFor={`${GRAPHIC_TYPE}_text`}>
                <span className="text-primary font-bold">Registration Numbers</span>
                <span className="block text-xs text-gray-500 italic">Provide the WN Numbers from your registration</span>
                <input
                    type="text"
                    id={`${GRAPHIC_TYPE}_text`}
                    // pattern="/^[a-z]{2}[-, ]\d{4}[-, ][a-z]{2}$/i"
                    value={wn_numbers.text}
                    onChange={e => b.updateState(GRAPHIC_TYPE, { text: e.target.value })}
                    className="p-2 mt-3 border-2 bg-gray-50 w-full"

                />
            </label>


            <div className="pt-8">
                <p className="text-primary font-bold">Font Style & Color</p>
                <p className="text-xs text-gray-500 italic">Open up our font book and color palette to choose your style of text</p>

                <div className="flex gap-5 mt-3">

                    <div>
                        <FontBook type={GRAPHIC_TYPE} />
                        <div className="flex items-center gap-2 pt-1">
                            <p className="text-sm">{wn_numbers.selectedFont}</p>
                            <button
                                type="button"
                                className="text-xs text-blue-700"
                            >
                                (Change)
                            </button>
                        </div>
                    </div>
                    <div>
                        <ColorPalette type={GRAPHIC_TYPE} />
                        <div className="flex items-center gap-2 pt-1">
                            <p className="text-sm">{wn_numbers.color.name}</p>
                            <button
                                type="button"
                                className="text-xs text-blue-700"
                            >
                                (Change)
                            </button>
                        </div>
                    </div>

                </div>
            </div>


            <div className="pt-8">
                <p className="text-primary font-bold">Slant</p>
                <p className="text-xs text-gray-500 italic">Try giving your boat name a look to see how it looks!</p>

                <div className="flex gap-5 mt-3">
                    <button
                        type="button"
                        // onClick={() => setIsEmbellishmentModalOpen(true)}
                        className="btn bg-gray-200 text-base font-semibold"
                    >
                        No Slant
                    </button>
                    <button
                        type="button"
                        // onClick={() => setIsEmbellishmentModalOpen(true)}
                        className="btn btn-primary text-base font-semibold"
                    >
                        {/* TODO: use this for slanting, need to figure out measuretext not reading set transform 
                        ctx.setTransform(1, 0, -0.15, 1, 0, 0); */}

                        Slant Left
                    </button>
                    <button
                        type="button"
                        // onClick={() => setIsEmbellishmentModalOpen(true)}
                        className="btn bg-gray-200 text-base font-semibold"
                    >
                        Slant Right
                    </button>
                </div>
            </div>


            <div className="pt-8">
                <div className="flex gap-2">
                    <p className="text-primary font-bold">Sizing</p>
                    <SizingDocumentModal />
                </div>
                <p className="text-xs text-gray-500 italic">Play around with the height and width to scale your boat name to your liking. Be sure to adjust the size in inches as this is what will be sent to our designers</p>

                <div className="flex gap-3 mt-3 g-green-100">
                    <label htmlFor="boatname_height">
                        <span className="block text-sm font-bold">Height</span>
                        <CurrencyInput
                            value={wn_numbers.imageSize.height}
                            suffix='"'
                            decimalScale={2}
                            allowNegativeValue={false}
                            onValueChange={value => {
                                b.updateHeight(GRAPHIC_TYPE, value);
                            }}
                            className="p-2 mt-1.5 border-2 bg-gray-50 w-full"
                        />
                    </label>

                    <label htmlFor="boatname_width">
                        <span className="block text-sm font-bold">Width</span>
                        <CurrencyInput
                            value={wn_numbers.imageSize.width}
                            suffix='"'
                            decimalScale={2}
                            allowNegativeValue={false}
                            onValueChange={value => {
                                b.updateWidth(GRAPHIC_TYPE, value);
                            }}
                            className="p-2 mt-1.5 border-2 bg-gray-50 w-full"
                        />
                    </label>

                    <label htmlFor="boatname_proportional">
                        <span className="block text-sm font-bold">Proportional</span>
                        <div className="mt-2.5">
                            <Switch
                                checked={wn_numbers.imageSize.maintainProportions}
                                onChange={() => b.updateState(GRAPHIC_TYPE, { imageSize: { ...wn_numbers.imageSize, maintainProportions: !wn_numbers.imageSize.maintainProportions } })}
                                className={`${wn_numbers.imageSize.maintainProportions ? 'bg-secondary' : 'bg-gray-200'} relative inline-flex h-9 w-[4.5rem] items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    // className={`${wn_numbers.imageSize.maintainProportions ? 'translate-x-[2.5rem]' : 'translate-x-[0.25rem]'} absolute inline-block h-7 w-7 transform rounded-full bg-white transition`}
                                    className={`${wn_numbers.imageSize.maintainProportions ? 'translate-x-10' : 'translate-x-1'} absolute inline-block h-7 w-7 transform rounded-full bg-white transition`}
                                />

                                <div className="flex item-center justify-between w-full px-2.5 text-sm">
                                    <span className="text-white font-semibold">On</span>
                                    <span className="font-semibold">Off</span>
                                </div>
                            </Switch>
                        </div>
                    </label>
                </div>

                <div className={`pt-2 transition-all ${wn_numbers.imageSize.maintainProportions ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <div className="flex gap-1 items-center">
                        <Icon name="warning" className=" stroke-orange-400 h-6" />
                        <p className="text-orange-400 text-xs">WARNING: Turning Proportional off will result in design looking skewed</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WNNumbers;
