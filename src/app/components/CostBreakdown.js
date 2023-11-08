import useFontFaceObserver from 'use-font-face-observer';
import { useGlobalState } from '../context/state';
import { currency } from '../helpers';

const CostBreakdown = () => {
    const { costs } = useGlobalState();

    const isFontListLoaded = useFontFaceObserver([
        // { family: 'Roboto' },
        { family: 'Arial' },
    ]);

    console.log(isFontListLoaded, 'isFontListLoaded')

    return (
        <div className="bg-white p-4 border-t-8 border-gray-200">
            <div className="flex flex-col gap-1">
                <p className="text-primary font-bold">Cost Breakdown</p>

                {Object.keys(costs).map(item => {
                    const a = '';
                    return (
                        <div className="flex justify-between bg-pink-100">
                            <p className="text-sm text-gray-500">{item}</p>
                            <p className="text-sm text-gray-500">{currency(costs[item])}</p>
                        </div>
                    );
                })}


                <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Boat Name</p>
                    <p className="text-sm text-gray-500">$27.08</p>
                </div>

                <div className="flex justify-between">
                    <p className="text-sm text-gray-500">Port & Starboard Graphics (x2)</p>
                    <p className="text-sm text-gray-500">$52.66</p>
                </div>
            </div>

            <div className="flex justify-between pt-5">
                <p className="text-primary font-bold">Estimated Quote</p>
                <p className="font-semibold">$79.74</p>
            </div>
        </div>
    );
};

export default CostBreakdown;
