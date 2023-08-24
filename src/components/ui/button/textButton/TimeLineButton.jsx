import React from 'react';

import moduleTextButton from './TextButton.module.sass'
import ExpandDotsButton from '../svgButton/ExpandDotsButton';

const TimeLineButton = ({visible, setVisible,...props}) => {

    const rootClasses = [moduleTextButton.textBtnBox]

    if(visible) {
        rootClasses.push(moduleTextButton.activeRule)
    }
    return (
        <button {...props} className={rootClasses.join(' ')}>
            <div className={moduleTextButton.textBtnLeftSide} style={{width : '84px'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M10.94 11.86L11.84 10.96L8.66 7.76V3.74H7.46V8.24L10.94 11.86ZM8 16C6.90667 16 5.87333 15.79 4.9 15.37C3.92667 14.95 3.07667 14.3767 2.35 13.65C1.62333 12.9233 1.05 12.0733 0.63 11.1C0.21 10.1267 0 9.09333 0 8C0 6.90667 0.21 5.87333 0.63 4.9C1.05 3.92667 1.62333 3.07667 2.35 2.35C3.07667 1.62333 3.92667 1.05 4.9 0.63C5.87333 0.21 6.90667 0 8 0C9.09333 0 10.1267 0.21 11.1 0.63C12.0733 1.05 12.9233 1.62333 13.65 2.35C14.3767 3.07667 14.95 3.92667 15.37 4.9C15.79 5.87333 16 6.90667 16 8C16 9.09333 15.79 10.1267 15.37 11.1C14.95 12.0733 14.3767 12.9233 13.65 13.65C12.9233 14.3767 12.0733 14.95 11.1 15.37C10.1267 15.79 9.09333 16 8 16ZM8 14.8C9.86667 14.8 11.4667 14.1333 12.8 12.8C14.1333 11.4667 14.8 9.86667 14.8 8C14.8 6.13333 14.1333 4.53333 12.8 3.2C11.4667 1.86667 9.86667 1.2 8 1.2C6.13333 1.2 4.53333 1.86667 3.2 3.2C1.86667 4.53333 1.2 6.13333 1.2 8C1.2 9.86667 1.86667 11.4667 3.2 12.8C4.53333 14.1333 6.13333 14.8 8 14.8Z"/>
                </svg>
                <div className={moduleTextButton.textBtnText}>Время</div>
            </div>
            <div className={moduleTextButton.textBtnCheckbox}>
                <ExpandDotsButton/>
            </div>
        </button>
    );
};

export default TimeLineButton;