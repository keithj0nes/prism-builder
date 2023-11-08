import { useState } from 'react';
import Modal from './Modal';
import Icon from './Icon';


const SizingDocumentModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button type="button" onClick={() => setIsOpen(true)}>
                <Icon name="info" className="h-6" />
            </button>

            <Modal title="" open={isOpen} onClose={setIsOpen} panelClassName="!max-w-3xl">
                <div className="pt- bg-red-20">
                    <p className="text-xl font-semibold pb-1">
                        Coast Guard Documented
                    </p>
                    <p>

                        Most vessels greater than 25ft. and on coastal waters owned by US Citizens are Documented with the
                        US Coast Guard. Documented vessels in the United States must have the registered name and hailing
                        port marked on the boat. Typically, this will be a name and hailing port on the transom of the boat. In
                        some cases, typically with sailboats, we&apos;ll put the name on the sides and the hailing port on the transom.
                        The Coast Guard requires the lettering be no smaller than <span className="font-bold underline">4” tall</span>.
                    </p>
                    <p className="mt-2">
                        You will be assigned registration numbers; however, they <span className="font-bold underline">do not need to be displayed</span> on your boat.
                    </p>

                    <p className="text-xl font-semibold pb-1 mt-6">
                        Registered with the State
                    </p>
                    <p>
                        In the State of Washington, most boats require a title, a registration card and registration decals to be
                        legally navigated, operated, employed or moored. You must display your boat registration numbers on
                        both sides of your bow, and they must be in block numbers at least <span className="font-bold underline">3” tall</span>. If you are Coast Guard
                        documented, you do not need to display your registration numbers.
                    </p>
                    <p className="mt-6">
                        Have further questions? Give us a call at <a href="tel:2062821801" className="font-bold italic hover:underline">206.282.1801</a>
                    </p>

                    <div className="flex justify-end">
                        <button type="button" className="btn" onClick={() => setIsOpen(false)}>
                            Close
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default SizingDocumentModal;
