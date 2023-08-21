import React from 'react';

import moduleControlButton from './controlPanelButton.module.sass'

const PlusControlButton = (props) => {
    return (
        <button {...props} className={moduleControlButton.controlBtn}>
            <div className={moduleControlButton.controlBox}>
                <svg className={moduleControlButton.controlSvg} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="currentColor">
                    <path className={moduleControlButton.controlPath} d="M12.5 15.5H0V12.5H12.5V0H15.5V12.5H28V15.5H15.5V28H12.5V15.5Z"/>
                </svg>
            </div>
        </button>
    );
};

export default PlusControlButton;