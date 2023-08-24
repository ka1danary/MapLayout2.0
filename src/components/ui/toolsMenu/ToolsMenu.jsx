import React, { useState } from 'react';

import moduletoolsMenu from './ToolsMenu.module.sass'
import RuleButton from '../button/textButton/RuleButton';
import TimeLineButton from '../button/textButton/TimeLineButton';

const ToolsMenu = () => {
const [visible, setVisible] = useState(false)

const rootClasses = [moduletoolsMenu.toolsDropMenuBox]

if (visible) {
    rootClasses.push(moduletoolsMenu.active)
}

    return (
        <div>
            <button className={moduletoolsMenu.toolsBox} onClick={() => setVisible(!visible)}>
                <div className={moduletoolsMenu.toolsText}>Инструменты</div>
                <svg className={moduletoolsMenu.toolsSvg} xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="currentColor">
                    <path className={moduletoolsMenu.toolsPath} d="M7.5 10L0 1.51943L1.34375 0L7.5 6.99647L13.6562 0.0353357L15 1.55477L7.5 10Z" />
                </svg>
            </button>
            <div className={rootClasses.join(' ')}>
                <RuleButton style={{marginBottom : '10px'}} visible={visible}/>
                <TimeLineButton visible={visible}/>
            </div>
        </div>
    );
};

export default ToolsMenu;