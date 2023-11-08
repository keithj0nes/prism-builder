import { useState } from 'react';
import { FONTS } from './constants';
import { useGlobalState } from '../context/state';
import Modal from './Modal';

const FontBook = ({ type }) => {
    const [isEmbellishmentModalOpen, setIsEmbellishmentModalOpen] = useState(false);
    const b = useGlobalState();
    const type_name = b[type];
    const [localSelected, setLocalSelected] = useState(type_name.selectedFont);

    const handleSubmit = () => {
        console.log('submitting');
        b.updateState(type, { selectedFont: localSelected });
        setIsEmbellishmentModalOpen(false);
    };

    return (
        <div className="">
            <button
                type="button"
                onClick={() => setIsEmbellishmentModalOpen(true)}
                className="btn btn-primary"
            >
                Font Book
            </button>


            <Modal title="Font Book" open={isEmbellishmentModalOpen} onClose={setIsEmbellishmentModalOpen} panelClassName="!max-w-3xl">
                <div className="pt-5 bg-red-20">
                    <div className="grid grid-cols-3 gap-3">

                        {Object.keys(FONTS).map(fontName => {
                            const fontFamily = FONTS[fontName];

                            // console.log(fontName, boat_name.selectedFont, boat_name.selectedFont === fontName, 'ahhaha')
                            // console.log(selectedFont, fontName, selectedFont === fontName, 'selectedFont')

                            return (
                                <div key={fontFamily} className="my-3 ">
                                    <div className="inline-block bg-red-100">
                                        <p className="text-xs text-gray-500">{fontName}</p>
                                        <label className="bg-green-5 p-2 flex gap-4 cursor-pointer" htmlFor={`${fontFamily}-1`}>
                                            <input
                                                type="radio"
                                                value={fontName}
                                                // id={fontFamily}
                                                id={`${fontFamily}-1`}
                                                name="font-radio-1"
                                                className="hiden"
                                                onChange={e => setLocalSelected(e.target.value)}
                                                checked={localSelected === fontName}
                                            // onChange={e => b.updateState(type, { selectedFont: e.target.value })}
                                            // checked={type_name.selectedFont === fontName}
                                            />
                                            <p className={`text-2xl ${fontFamily}`}>{type_name.text || fontName}</p>
                                        </label>
                                    </div>

                                </div>
                            );
                        })}
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
                            // onClick={() => setIsEmbellishmentModalOpen(true)}
                            onClick={handleSubmit}
                            className="btn btn-primary"
                        >
                            Select Font
                        </button>
                    </div>

                </div>
            </Modal>
        </div>
    );
};

export default FontBook;
