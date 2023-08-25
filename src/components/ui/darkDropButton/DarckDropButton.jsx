import React, { useState } from 'react';
import moduleDarkDropButton from './DarkDropButton.module.sass'

const DarckDropButton = ({ children, ...props }) => {

    const [visible, setVisible] = useState(false)
    const rootClasses = [moduleDarkDropButton.dropContent]

    if(visible) {
        rootClasses.push(moduleDarkDropButton.active)
    }

    return (
        <div className={moduleDarkDropButton.darkButtonBox}>
            <button className={moduleDarkDropButton.darkButton} onClick={() => setVisible(!visible)}>
                <div className={moduleDarkDropButton.darckButtonText}>
                    {props.title}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="currentColor">
                    <path d="M7.5 10L0 1.51943L1.34375 0L7.5 6.99647L13.6562 0.0353357L15 1.55477L7.5 10Z" />
                </svg>
            </button>
            <div className={rootClasses.join(' ')}>
                {children}
            </div>
        </div>
    );
};

export default DarckDropButton;