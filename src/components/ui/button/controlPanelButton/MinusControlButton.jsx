import React from 'react';

import moduleControlButton from './controlPanelButton.module.sass'

const MinusControlButton = (props) => {
    return (
        <button {...props} className={moduleControlButton.controlBtn}>
            <div className={moduleControlButton.controlBox}>
                <svg className={moduleControlButton.controlSvg} xmlns="http://www.w3.org/2000/svg" width="28" height="3" viewBox="0 0 28 3" fill="currentColor">
                    <path className={moduleControlButton.controlPath} d="M0 3V0H28V3H0Z"/>
                </svg>
            </div>
        </button>
    );
};

export default MinusControlButton;