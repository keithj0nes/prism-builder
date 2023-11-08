'use client';

import { useRef, useEffect } from 'react';
// import { useGlobalState } from '../context/state';

const HEIGHT = 260;
const WIDTH = 700;
const CANVAS_PADDING = 60;
const DEFAULT_FONT_SIZE = 120;
const TEXT = 'My Hello World';

const FONT_MULITPLIER = 9.6;


// https://stackoverflow.com/questions/60347194/how-to-fit-text-to-a-precise-width-on-html-canvas


// GET FONT SIZE
// https://stackoverflow.com/a/45789011/4401054


const Canvas = ({ state, setState, setSizeState, sizeState }) => {
    const canvasRef = useRef(null);

    // const myState = useGlobalState();
    // console.log(myState, '------- - - - - - --- ')

    function fillFittedText(ctx, text = '', x = 0, y = 0, target_width = ctx.canvas.width, font_family = 'Arial') {
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
        //     font_size++;
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
        const offset_left = ctx.measureText(text).actualBoundingBoxLeft || 0;
        // ctx.fillText(text, x + offset_left, y);

        const { actualBoundingBoxAscent, actualBoundingBoxDescent } = ctx.measureText(state.text);

        // console.log(x + offset_left, paddedTargetWidth, WIDTH / 2)

        const centerText = font_size <= DEFAULT_FONT_SIZE ? (x + offset_left) + (CANVAS_PADDING / 2) : WIDTH / 2;

        ctx.fillText(text, centerText, HEIGHT / 2 + (actualBoundingBoxAscent - actualBoundingBoxDescent) / 2);
        // ctx.setTransform(1, 0, 0, 0.5, 0, 0);
        // ctx.setTransform(1, 0, 0, 1, 0, 0);


        // skeew example
        // ctx.font = '20px arial,sans-serif';
        // ctx.fillStyle = 'black';
        // ctx.setTransform(1, -0.2, 0, 1, 0, 0);
        // ctx.fillText('your text', 100, 110);
        // ctx.setTransform(1, 0, 0, 1, 0, 0);
    }


    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        context.clearRect(0, 0, canvas.width, canvas.height);


        context.font = `70px ${state.selectedFont}`;

        context.textBaseline = 'middle';
        context.textAlign = 'center';

        context.fillStyle = state.color.hex || 'red';


        fillFittedText(context, state.text, 0, 50, WIDTH, state.selectedFont);


        // console.log(state);

        // console.log(context.measureText(state.text));

        const metrics = context.measureText(state.text);
        // console.log(metrics, 'metcis')

        const fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
        const actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
        const fontWidth = metrics.width;

        // console.log({
        //     fontHeight,
        //     actualHeight,
        //     fontWidth,
        //     // _hInch: actualHeight / 10,
        //     // _wInch: fontWidth / 10,
        //     // scaledhInch: actualHeight / 9.6,
        //     // scaledwInch: fontWidth / 9.6,
        //     // MscaledhInch: (actualHeight / 9.6) * 10,
        //     // MscaledwInch: (fontWidth / 9.6) * 10,
        // });
        setSizeState({ ...sizeState, inchesHeight: (actualHeight / FONT_MULITPLIER) * 10, inchesWidth: (fontWidth) })


        if (!state.imageSize.width && !!state.selectedFont && !!state.text) {
            const myInch = (fontWidth / (((actualHeight / FONT_MULITPLIER) * 10) / state.imageSize.height)) || 0;
            // console.log(myInch, 'HELLLOOOOO')

            setState({ ...state, imageSize: { ...state.imageSize, width: myInch.toFixed(2) } })
        }
    }, [state]);

    // console.log(state, 'state')

    return (
        <div className="pb-4 ">

            <div className="flex justify-between">
                <div className="canvas-bg m-auto inline-blok relative flex items-center">

                    <div style={{ height: sizeState.inchesHeight, width: sizeState.inchesWidth }} className="absolute inset-x-px border m-auto border-red-400 w-20" />
                    <canvas ref={canvasRef} height={HEIGHT} width={WIDTH} />
                </div>
            </div>
        </div>
    );
};

export default Canvas;
