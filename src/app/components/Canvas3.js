import { useEffect, useState, useRef } from 'react';
import { HEIGHT, WIDTH, FONT_MULITPLIER, PREVIEW_BG_OPTIONS } from './constants';
import { fillFittedText } from '../helpers';
import Select from './Select';
import { useGlobalState } from '../context/state';

const myDraw = (ctx, state, update, w, name) => {
    // console.log(state, 'STATE IN MY DRAW')
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    // ctx.fillStyle = state.color.hex || 'black';

    let metrics;
    if (state.placeholder && !state.text) {
        ctx.fillStyle = 'black';
        metrics = fillFittedText(ctx, state.placeholder, 0, 50, w || WIDTH, 'Arial');
    } else {
        ctx.fillStyle = state.color.hex || 'black';
        metrics = fillFittedText(ctx, (state.text || state.placeholder), 0, 50, w || WIDTH, state.selectedFont);
    }

    // const metrics = fillFittedText(ctx, (state.text || state.placeholder), 0, 50, w || WIDTH, state.selectedFont);

    const fontHeight = ((metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent) / FONT_MULITPLIER) * 10;
    const fontWidth = metrics.width;

    if (fontHeight !== state.pixelSizes.pixelHeight || fontWidth !== state.pixelSizes.pixelWidth) {
        const inches = (fontWidth / (fontHeight / state.imageSize.height)) || 0;
        update(name, {
            pixelSizes: {
                pixelHeight: fontHeight,
                pixelWidth: fontWidth,
            },
            imageSize: {
                ...state.imageSize,
                width: inches.toFixed(2),
            },
            ...(name === 'Boat Name' ? ({
                portStarboard: {
                    ...state.portStarboard,
                    width: inches.toFixed(2),
                },
            }) : {}),
        });
    }
};


const Canvas3 = ({ name, data, update, w }) => {
    const canvasRef = useRef(null);
    const [background, setBackground] = useState(PREVIEW_BG_OPTIONS[0].value);
    // const s = useGlobalState();
    // const graphicState = s[name];

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const context = canvas.getContext('2d');
    //     context.clearRect(0, 0, canvas.width, canvas.height);
    //     myDraw(context, graphicState, s.updateState, w, name);
    // }, [graphicState, s.updateState, w, name]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        myDraw(context, data, update, w, name);
    }, [data, update, w, name]);



    return (
        <div>
            <div className="flex justify-between items-center bg-gray-100 py-1 px-2 rounded mb-2">
                <p>{name}</p>
                <div>
                    <p className="text-xs text-center text-gray-600 pl-3 pb-1">Background Color For Preview Only</p>
                    <Select options={PREVIEW_BG_OPTIONS} value={background} onChange={setBackground} placeholder="Select Preview Background" />
                </div>
            </div>
            <div className={`${background} m-ato inline-blok relative flex items-center`}>

                {/* {!graphicState.text && (
                    <div className="h-full w-full bg-red-100 absolute flex items-center justify-center">
                        <p className="text-4xl">Add {name}</p>
                    </div>
                )} */}
                {/* <div style={{ height: data.pixelSizes.pixelHeight, width: data.pixelSizes.pixelWidth }} className="absolute inset-x-px border m-auto border-red-400 w-20" /> */}
                <canvas ref={canvasRef} height={HEIGHT} width={w || WIDTH} />
            </div>
        </div>
    );
};

export default Canvas3;
