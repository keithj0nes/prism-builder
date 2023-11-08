import { Fragment, useState, useMemo } from 'react';
import { Listbox, Transition } from '@headlessui/react';
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import Icon from './Icon';
// const people = [
//     { name: 'Wade Cooper' },
//     { name: 'Arlene Mccoy' },
//     { name: 'Devon Webb' },
//     { name: 'Tom Cook' },
//     { name: 'Tanya Fox' },
//     { name: 'Hellen Schmidt' },
// ];

// https://tallpad.com/series/headlessui/lessons/headless-ui-listbox-reusable-vue-component
// 8:07 timestamp

const Select = ({ options, onChange, value, placeholder = 'some placeholder' }) => {
    // const [selectedOption, setSelectedOption] = useState(null);
    const label = useMemo(() => options.find(opt => opt.value === value)?.label, [value]);

    return (
        <div className="fied op-16 w-72">
            <Listbox value={value} onChange={onChange}>
                <div className="relative">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        {label ? (
                            <span className="block truncate">{label}</span>
                        ) : (
                            <span className="block truncate text-gray-500">{placeholder}</span>
                        )}
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            {/* <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            /> */}

                            <Icon name="chevron-up" className="inline ml-2 rotate-180" />

                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full z-50 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {options.map((option, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    // className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'}`}
                                    className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-100 text-primary-200' : 'text-gray-900'}`}
                                    value={option.value}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                                            >
                                                {option.label}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                                                    {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                                                    <Icon name="check" className="inline" />

                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default Select;
