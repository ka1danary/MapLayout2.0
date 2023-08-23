import React from 'react';
import SlideCheckbox from '../../checkbox/slideCheckbox/SlideCheckbox';

import moduleTextButton from './TextButton.module.sass'

const RuleButton = (props) => {
    return (
        <button {...props} className={moduleTextButton.textBtnBox}>
            <div className={moduleTextButton.textBtnLeftSide}>
                <svg className={moduleTextButton.textBtnSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="currentColor">
                    <path className={moduleTextButton.textBtnPath} d="M1.92192 14C1.39339 14 0.940941 13.8375 0.564565 13.5124C0.188188 13.1874 0 12.7966 0 12.3402V1.1573C0 0.645534 0.276276 0.292826 0.828829 0.0991831C1.38138 -0.0944601 1.87387 -0.00455434 2.30631 0.3689L3.38739 1.30254L2.37838 2.17393L3.02703 2.73411L4.03604 1.86272L6.84685 4.29018L5.83784 5.16157L6.48649 5.72175L7.4955 4.85036L10.3303 7.29856L9.32132 8.16996L9.96997 8.73014L10.979 7.85874L13.7898 10.2862L12.7808 11.1576L13.4294 11.7178L14.4384 10.8464L15.5195 11.78C16 12.195 16.1201 12.6687 15.8799 13.2012C15.6396 13.7337 15.1992 14 14.5586 14H1.92192ZM1.92192 12.3402H13.045L1.92192 2.73411V12.3402Z" />
                </svg>
                <div className={moduleTextButton.textBtnText}>Линейка</div>
            </div>
            <div className={moduleTextButton.textBtnCheckbox}>
                
            </div>
        </button>
    );
};

export default RuleButton;