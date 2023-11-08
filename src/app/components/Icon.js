/* eslint-disable no-use-before-define */
import React from 'react';
// import PropTypes from 'prop-types';

// to use custom icons, copy the SVG to the svg object below
// https://tabler-icons.io/
// https://heroicons.com

// example usage:
// <Icon name="calendar" className="mr-3" />

// const defaultProps = {
//     className: '',
//     viewBox: '0 0 24 24',
//     useFill: false,
//     name: '',
// }

const Icon = ({ name, className, viewBox, useFill }) => {
// const Icon = () => {
    if (!svgs[name]) {
        return <span className="text-red-400">Cannot Find Icon</span>;
    }

    if (useFill) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className={['h-5', className].join(' ')} viewBox={viewBox} stroke="none" fill="currentColor" strokeLinecap="round" strokeLinejoin="round">
                {svgs[name]}
            </svg>
        );
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={['h-5', className].join(' ')} viewBox={viewBox} strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {svgs[name]}
        </svg>
    );
};

export default Icon;

Icon.defaultProps = {
    className: '',
    viewBox: '0 0 24 24',
    useFill: false,
};

// Icon.propTypes = {
//     name: PropTypes.string.isRequired,
//     className: PropTypes.string,
//     viewBox: PropTypes.string,
//     useFill: PropTypes.bool,
// };


const svgs = {
    'cloud-upload': (
        <>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
            <polyline points="9 15 12 12 15 15" />
            <line x1="12" y1="12" x2="12" y2="21" />
        </>
    ),
    info: (
        <>
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M12 9h.01" />
            <path d="M11 12h1v4h1" />
        </>
    ),
    warning: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    ),
    'chevron-up': (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    ),
    check: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    ),
};
