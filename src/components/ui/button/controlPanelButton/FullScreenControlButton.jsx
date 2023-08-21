import React from 'react';

import moduleControlButton from './controlPanelButton.module.sass'

const FullScreenControlButton = (props) => {
    return (
        <button {...props} className={moduleControlButton.controlBtn}>
            <div className={moduleControlButton.controlBox}>
                <svg className={moduleControlButton.controlSvg} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                    <path className={moduleControlButton.controlPath} d="M0 28V18.35H3V25H9.65V28H0ZM0 9.65V0H9.65V3H3V9.65H0ZM18.35 28V25H25V18.35H28V28H18.35ZM25 9.65V3H18.35V0H28V9.65H25Z" />
                </svg>
            </div>
        </button>
    );
};

export default FullScreenControlButton;