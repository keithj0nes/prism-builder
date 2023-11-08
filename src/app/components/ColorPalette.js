import { useState } from 'react';
import { COLORS } from './constants';
import { useGlobalState } from '../context/state';
import Modal from './Modal';


const ColorPalette = ({ type }) => {
    const [isEmbellishmentModalOpen, setIsEmbellishmentModalOpen] = useState(false);
    const b = useGlobalState();
    const type_name = b[type];
    const [localSelected, setLocalSelected] = useState(type_name.color);

    const handleSubmit = () => {
        console.log('submitting');
        console.log(localSelected, 'localSelected');
        b.updateState(type, { color: localSelected });
        setIsEmbellishmentModalOpen(false);
    };

    return (
        <div className="">
            <button
                type="button"
                onClick={() => setIsEmbellishmentModalOpen(true)}
                className="btn btn-primary"
            >
                Color Palette
            </button>

            <Modal title="Font Book" open={isEmbellishmentModalOpen} onClose={setIsEmbellishmentModalOpen} panelClassName="!max-w-2xl">
                <div className="pt-5 bg-red-20">
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
                                        // onChange={e => setState({ ...state, color: JSON.parse(e.target.value) })}
                                        onChange={e => setLocalSelected(JSON.parse(e.target.value))}
                                        checked={JSON.stringify(localSelected) === JSON.stringify(color)}
                                    />
                                    <div className={`h-10 w-20 border ${color.className}`} style={{ background: color.hex }} />
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => setIsEmbellishmentModalOpen(false)}
                            className="btn"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="btn btn-primary"
                        >
                            Select Color
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};


export default ColorPalette;
