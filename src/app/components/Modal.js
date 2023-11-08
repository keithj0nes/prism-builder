import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';

const Modal = ({ open, onClose, title, children, closeOnBackdrop, panelClassName, light }) => (
    <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeOnBackdrop ? onClose : () => {}}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                {/* <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-25" /> */}
                <div className={`fixed inset-0 backdrop-blur-sm bg-opacity-25 ${light ? 'bg-white' : 'bg-black'}`} />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {/* <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-3 md:p-6 text-left align-middle shadow-xl transition-all"> */}
                        {/* <Dialog.Panel className={classNames("w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-3 md:p-6 text-left align-middle shadow-xl transition-all"> */}
                        <Dialog.Panel className={`w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-3 md:p-6 text-left align-middle shadow-xl transition-all ${panelClassName}`}>
                            {title && (
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    {title}
                                </Dialog.Title>
                            )}
                            {children}
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
);

export default Modal;

Modal.defaultProps = {
    title: '',
    closeOnBackdrop: true,
    panelClassName: '',
    light: false,
};

// Modal.propTypes = {
//     open: PropTypes.bool.isRequired,
//     onClose: PropTypes.func.isRequired,
//     children: PropTypes.node.isRequired,
//     title: PropTypes.string,
//     closeOnBackdrop: PropTypes.bool,
//     panelClassName: PropTypes.string,
//     light: PropTypes.bool,
// };
