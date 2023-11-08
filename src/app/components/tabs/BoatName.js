import { Switch } from '@headlessui/react';
import CurrencyInput from 'react-currency-input-field';
import Icon from '../Icon';
import { useGlobalState } from '../../context/state';
import FontBook from '../FontBook';
import ColorPalette from '../ColorPalette';
import SizingDocumentModal from '../SizingDocumentModal';

const GRAPHIC_TYPE = 'Boat Name';


const BoatName = ({ w }) => {
    const b = useGlobalState();

    const boat_name = b[GRAPHIC_TYPE];

    return (
        <div className="bg-white p-4 container">

            <label htmlFor={`${GRAPHIC_TYPE}_text`} className="w-full">
                <span className="block text-primary font-bold">Boat Name</span>
                <span className="block text-xs text-gray-500 italic">What&apos;s the name of your boat?</span>
                <input
                    type="text"
                    id={`${GRAPHIC_TYPE}_text`}
                    value={boat_name.text}
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
                            <p className="text-sm">{boat_name.selectedFont}</p>
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
                            <p className="text-sm">{boat_name.color.name}</p>
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
                            value={boat_name.imageSize.height}
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
                            value={boat_name.imageSize.width}
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
                                checked={boat_name.imageSize.maintainProportions}
                                onChange={() => b.updateState(GRAPHIC_TYPE, { imageSize: { ...boat_name.imageSize, maintainProportions: !boat_name.imageSize.maintainProportions } })}
                                className={`${boat_name.imageSize.maintainProportions ? 'bg-secondary' : 'bg-gray-200'} relative inline-flex h-9 w-[4.5rem] items-center rounded-full`}
                            >
                                <span className="sr-only">Enable notifications</span>
                                <span
                                    // className={`${boat_name.imageSize.maintainProportions ? 'translate-x-[2.5rem]' : 'translate-x-[0.25rem]'} absolute inline-block h-7 w-7 transform rounded-full bg-white transition`}
                                    className={`${boat_name.imageSize.maintainProportions ? 'translate-x-10' : 'translate-x-1'} absolute inline-block h-7 w-7 transform rounded-full bg-white transition`}
                                />

                                <div className="flex item-center justify-between w-full px-2.5 text-sm">
                                    <span className="text-white font-semibold">On</span>
                                    <span className="font-semibold">Off</span>
                                </div>
                            </Switch>
                        </div>
                    </label>
                </div>

                <div className={`pt-2 transition-all ${boat_name.imageSize.maintainProportions ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <div className="flex gap-1 items-center">
                        <Icon name="warning" className=" stroke-orange-400 h-6" />
                        <p className="text-orange-400 text-xs">WARNING: Turning Proportional off will result in design looking skewed</p>
                    </div>
                </div>
            </div>


            <div className="pt-6">
                <p className="text-primary font-bold">Port & Starboard Graphics</p>
                <p className="text-xs text-gray-500 italic">Are you wanting to add port side and starboard side graphics to your quote? If so, check the box below and adjust the height and width of the graphics to fit your vessel.</p>

                <div className="mt-3">
                    <label htmlFor="n" className="cursor-pointer">
                        <input
                            type="checkbox"
                            name="n"
                            id="n"
                            className="mr-2"
                            checked={boat_name.portStarboard.active}
                            onChange={() => b.updateState(GRAPHIC_TYPE, { portStarboard: { ...boat_name.portStarboard, active: !boat_name.portStarboard.active } })}
                        />
                        Yes, add 2 side graphics
                    </label>

                    {boat_name.portStarboard.active && (
                        <div className="flex gap-3 mt-3 bg-green-100">
                            <label htmlFor="boatname_height">
                                <span className="block text-sm font-bold">Height</span>
                                <CurrencyInput
                                    value={boat_name.portStarboard.height}
                                    suffix='"'
                                    decimalScale={2}
                                    allowNegativeValue={false}
                                    onValueChange={value => b.updateHeight(GRAPHIC_TYPE, value, 'portStarboard')}
                                    className="p-2 mt-1.5 border-2 bg-gray-50 w-full"
                                />
                            </label>

                            <label htmlFor="boatname_width">
                                <span className="block text-sm font-bold">Width</span>
                                <CurrencyInput
                                    value={boat_name.portStarboard.width}
                                    suffix='"'
                                    decimalScale={2}
                                    allowNegativeValue={false}
                                    onValueChange={value => b.updateWidth(GRAPHIC_TYPE, value, 'portStarboard')}
                                    className="p-2 mt-1.5 border-2 bg-gray-50 w-full"
                                />
                            </label>

                            <label htmlFor="boatname_proportional">
                                <span className="block text-sm font-bold">Proportional</span>
                                <div className="mt-2.5">
                                    <Switch
                                        checked={boat_name.portStarboard.maintainProportions}
                                        onChange={() => b.updateState(GRAPHIC_TYPE, { portStarboard: { ...boat_name.portStarboard, maintainProportions: !boat_name.portStarboard.maintainProportions } })}
                                        className={`${boat_name.portStarboard.maintainProportions ? 'bg-secondary' : 'bg-gray-200'} relative inline-flex h-9 w-[4.5rem] items-center rounded-full`}
                                    >
                                        <span className="sr-only">Enable notifications</span>
                                        <span className={`${boat_name.portStarboard.maintainProportions ? 'translate-x-[2.5rem]' : 'translate-x-[0.25rem]'} absolute inline-block h-7 w-7 transform rounded-full bg-white transition`} />

                                        <div className="flex item-center justify-between w-full px-2.5 text-sm">
                                            <span className="text-white font-semibold">On</span>
                                            <span className="font-semibold">Off</span>
                                        </div>
                                    </Switch>
                                </div>
                            </label>
                        </div>
                    )}

                </div>

                <div className={`pt-2 transition-all ${boat_name.portStarboard.maintainProportions ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                    <div className="flex gap-1 items-center">
                        <Icon name="warning" className=" stroke-orange-400 h-6" />
                        <p className="text-orange-400 text-xs">WARNING: Turning Proportional off will result in design looking skewed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoatName;
