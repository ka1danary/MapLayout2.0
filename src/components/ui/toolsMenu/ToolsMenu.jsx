import React from 'react';

import moduletoolsMenu from './ToolsMenu.module.sass'
import RuleButton from '../button/textButton/RuleButton';
import TimeLineButton from '../button/textButton/TimeLineButton';

const ToolsMenu = () => {
    return (
        <div>
            <button className={moduletoolsMenu.toolsBox}>
                <div className={moduletoolsMenu.toolsText}>Инструменты</div>
                <svg className={moduletoolsMenu.toolsSvg} xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="currentColor">
                    <path className={moduletoolsMenu.toolsPath} d="M7.5 10L0 1.51943L1.34375 0L7.5 6.99647L13.6562 0.0353357L15 1.55477L7.5 10Z" />
                </svg>
            </button>
            <div className={moduletoolsMenu.toolsDropMenuBox}>
                <RuleButton style={{marginBottom : '10px'}}/>
                <TimeLineButton/>
            </div>
        </div>
    );
};

export default ToolsMenu;