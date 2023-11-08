import { DEFAULT_FONT_SIZE, CANVAS_PADDING, WIDTH, HEIGHT } from './components/constants';


export function fillFittedText(ctx, text = '', x = 0, y = 0, target_width = WIDTH, font_family = 'Arial') {
    let font_size = DEFAULT_FONT_SIZE;

    const paddedTargetWidth = target_width - CANVAS_PADDING;

    function getBBOxWidth(text2) {
        const measure = ctx.measureText(text2);
        return measure.actualBoundingBoxLeft + measure.actualBoundingBoxRight;
    }

    const updateFont = () => {
        ctx.font = `${font_size}px ${font_family}`;
    };
    updateFont();
    let width = getBBOxWidth(text);
    // first pass width increment = 1
    // while (width && width <= paddedTargetWidth) {
    //     font_size += 0.1;
    //     updateFont();
    //     width = getBBOxWidth(text);
    // }
    // second pass, the other way around, with increment = -0.1
    while (width && width > paddedTargetWidth) {
        font_size -= 0.1;
        updateFont();
        width = getBBOxWidth(text);
    }
    // revert to last valid step
    font_size += 0.1;
    updateFont();

    // we need to measure where our bounding box actually starts
    const { actualBoundingBoxAscent, actualBoundingBoxDescent, actualBoundingBoxLeft } = ctx.measureText(text);
    const offset_left = actualBoundingBoxLeft || 0;
    const centerText = font_size <= DEFAULT_FONT_SIZE ? (x + offset_left) + (CANVAS_PADDING / 2) : target_width / 2;

    ctx.fillText(text, centerText, HEIGHT / 2 + (actualBoundingBoxAscent - actualBoundingBoxDescent) / 2);
    return ctx.measureText(text);
}

export const currency = (cents, format = 'USD') => {
    const dollars = cents / 100;
    // return dollars.toLocaleString('en-US', { style: 'currency', currency: format });
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: format }).format(dollars || 0);
};
