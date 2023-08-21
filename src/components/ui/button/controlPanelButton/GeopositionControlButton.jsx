import React from 'react';

import moduleControlButton from './controlPanelButton.module.sass'

const GeopositionControlButton = (props) => {
    return (
        <button {...props} className={moduleControlButton.controlBtn}>
            <div className={moduleControlButton.controlBox}>
                <svg className={moduleControlButton.controlSvg} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
                    <path className={moduleControlButton.controlPath} d="M15 0C6.735 0 0 6.735 0 15C0 23.265 6.735 30 15 30C23.265 30 30 23.265 30 15C30 6.735 23.265 0 15 0ZM15 27C8.385 27 3 21.615 3 15C3 8.385 8.385 3 15 3C21.615 3 27 8.385 27 15C27 21.615 21.615 27 15 27ZM19.5 15C19.5 17.49 17.49 19.5 15 19.5C12.51 19.5 10.5 17.49 10.5 15C10.5 12.51 12.51 10.5 15 10.5C17.49 10.5 19.5 12.51 19.5 15Z"/>
                </svg>
            </div>
        </button>
    );
};

export default GeopositionControlButton;