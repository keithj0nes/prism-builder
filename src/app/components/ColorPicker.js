import { COLORS } from './constants';


const ColorPicker = ({ state, setState }) => {
    const b = '';
    return (
        <div className="bg-teal-50 p-4">
            <h2 className="text-6xl">Color Picker</h2>


            <div className="flex flex-wrap gap-x-6">
                {COLORS.map(color => (
                    <div key={color.name} className="my-3">
                        <p className="text-xs text-gray-500">{color.name}</p>
                        {/* <div className={`h-10 w-20 border ${color.className}`} style={{ background: color.hex }} /> */}

                        <label className="bg-green-5 p-2 flex gap-4 cursor-pointer" htmlFor={color.name}>
                            <input
                                type="radio"
                                value={JSON.stringify(color)}
                                id={color.name}
                                name="color-radio"
                                onChange={e => setState({ ...state, color: JSON.parse(e.target.value) })}
                                checked={JSON.stringify(state.color) === JSON.stringify(color)}
                            />
                            <div className={`h-10 w-20 border ${color.className}`} style={{ background: color.hex }} />
                        </label>
                    </div>
                ))}
            </div>


            {/* <div className="bg-teal-200 hidden">
                <div className="flex flex-wrap gap-x-6">
                    {COLORS.map(color => (
                        <div key={color.name} className="my-3">
                            <p className="text-xs text-gray-500">{color.name}</p>
                            <div className={`h-10 w-20 border ${color.className}`} style={{ background: color.hex }} />
                        </div>
                    ))}
                </div>


                <div className="flex flex-wrap gap-x-6">
                    {COLORS.map((color, ind) => (
                        <div key={color.name} className="my-3 cursor-pointer">
                            <div className="h-10 w-20 border-4 border-transparent flex items-center justify-center" style={{ background: color.hex, borderColor: ind === 1 && 'red' }}>
                                <p className="text-xs" style={{ color: color.color || '#fff' }}>{color.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default ColorPicker;
