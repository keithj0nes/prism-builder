export const HEIGHT = 260;
export const WIDTH = 700;
export const CANVAS_PADDING = 60;
export const DEFAULT_FONT_SIZE = 120;
export const FONT_MULITPLIER = 9.6;

export const FONTS = {
    // delete these fonts
    Inter: 'font-inter',
    'Broken Knight': 'font-broken-knight',
    'Luckiest Guy': 'font-luckiest-guy',

    // keep these fonts
    'EpoqueSeria-Bold': 'font-epoque-seria-bold',
    'Austein-Script': 'font-austein',

    // NEED TO CONFIRM NAMES
    'Belgates-Script': 'font-belgates-script',
    'Birds of Paradise': 'font-birds-of-paradise',
    Hughs: 'font-hughs',
    'American Classic': 'font-american-classic-extra-bold-regular',

    'Copperplate Gothic': 'font-copperplate-gothic-heavy-regular',
    monotype: 'font-monotype',
    times: 'font-times',
};

export const COLORS = [
    { name: 'Black', hex: '#000', color: '#fff' },
    { name: 'White', hex: '#FFF', color: '#000' },
    { name: 'Dark Blue', hex: '#1C2D46' },
    { name: 'Saphire Blue', hex: '#133577' },
    { name: 'Pewter', hex: '#9898A0' },
    { name: 'Dark Grey', hex: '#3C3839' },
    { name: 'Fire Red', hex: '#DD1306' },
    { name: 'Spectra Red', hex: '#6D0A1F' },
    { name: 'Bronze Metallic', hex: '#906649' },
    { name: 'Bright Blue Metallic', hex: '#06599B' },
    { name: 'Grand Blue Metallic', hex: '#18335E' },
    { name: 'Pewter Metallic', hex: '#B4B6C2' },
    { name: 'Dark Charcoal Metallic', hex: '#4E525B' },
    { name: 'Gold Metallic', hex: '#B5925D' },
    { name: 'Chrome', className: 'bg-gradient-to-t from-[#56555A] from-10% via-white via-50% to-[#56555A] to-90%"' },
    { name: 'Gold Chrome', className: 'bg-gradient-to-t from-[#997D5F] from-10% via-white via-50% to-[#997D5F] to-90%' },
];


export const DEFAULT_STATE_BOAT_NAME = {
    selectedFont: Object.keys(FONTS)[1],
    text: '',
    placeholder: 'Add Boat Name',
    color: COLORS[3],
    border: {
        color: '',
        size: '', // small | medium | large
        offset: '', // none | top-left | top-right | bottom-left | bottom-right | center
    },
    arc: {
        direction: '', // up | down
        size: '', // small | medium | large
    },
    portStarboard: {
        active: false,
        height: (2).toFixed(2),
        width: '',
        maintainProportions: true,
    },
    imageSize: {
        height: (2).toFixed(2),
        width: '',
        maintainProportions: true,
    },
    pixelSizes: {
        pixelHeight: 0,
        pixelWidth: 0,
    },
};

export const DEFAULT_STATE_HAILING_PORT = {
    selectedFont: Object.keys(FONTS)[1],
    text: '',
    city: '',
    state: '',
    placeholder: 'Add Hailing Port',
    color: COLORS[3],
    border: {
        color: '',
        size: '', // small | medium | large
        offset: '', // none | top-left | top-right | bottom-left | bottom-right | center
    },
    arc: {
        direction: '', // up | down
        size: '', // small | medium | large
    },
    imageSize: {
        height: (2).toFixed(2),
        width: '',
        maintainProportions: true,
    },
    pixelSizes: {
        pixelHeight: 0,
        pixelWidth: 0,
    },
};

export const DEFAULT_STATE_WN_NUMBERS = {
    selectedFont: Object.keys(FONTS)[1],
    text: '',
    placeholder: 'Add WN Numbers',
    color: COLORS[3],
    imageSize: {
        height: (4).toFixed(2),
        width: '',
        maintainProportions: true,
    },
    pixelSizes: {
        pixelHeight: 0,
        pixelWidth: 0,
    },
};

export const DEFAULT_SIZE_STATE = {
    inchesHeight: 0,
    inchesWidth: 0,
};

export const PREVIEW_BG_OPTIONS = [
    { value: 'canvas-bg-light-gray', label: 'White' },
    { value: 'canvas-bg-dark-gray', label: 'Dark Gray' },
    { value: 'canvas-bg-red', label: 'Red' },
];
