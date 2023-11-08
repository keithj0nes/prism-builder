/* eslint-disable no-return-assign */
import { useState, useRef, useEffect } from 'react';
import BoatName from './BoatName';
import HailingPort from './HailingPort';
import WNNumbers from './WNNumbers';


const tabsData = [
    {
        label: 'Boat Name',
        content: (
            <BoatName w={600} />
        ),
    },
    {
        label: 'Hailing Port',
        content: (
            <HailingPort w={600} />
        ),
    },
    {
        label: 'WN Numbers',
        content: (
            <WNNumbers w={600} />
        ),
    },
];

const Tabs = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

    const tabsRef = useRef([]);

    useEffect(() => {
        function setTabPosition() {
            const currentTab = tabsRef.current[activeTabIndex];
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
        }

        setTabPosition();
        window.addEventListener('resize', setTabPosition);

        return () => window.removeEventListener('resize', setTabPosition);
    }, [activeTabIndex]);

    return (
        <div>
            <div className="relative">
                <div className="flex space-x-3 border-b-[0.375rem] border-gray-200">
                    {tabsData.map((tab, idx) => (
                        <button
                            type="button"
                            key={tab.label}
                            ref={el => (tabsRef.current[idx] = el)}
                            className="pt-2 pb-3 w-full"
                            onClick={() => setActiveTabIndex(idx)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <span
                    className="absolute bottom-0 block h-1.5 bg-primary transition-all duration-300"
                    style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                />
            </div>
            <div className="py-4">
                <div>{tabsData[activeTabIndex].content}</div>
            </div>
        </div>
    );
};

export default Tabs;
