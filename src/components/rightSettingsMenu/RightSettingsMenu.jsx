import React from 'react';

import moduleSetting from './RightSettingsMenu.module.sass'
import LightTheme from '../ui/button/svgButton/LightTheme';

const RightSettingsMenu = ({vision}) => {

    const rootClasses = [moduleSetting.rightMenuBox]
    if(vision) {
        rootClasses.push(moduleSetting.active)
        console.log(123)
    }
    return (
        <div className={rootClasses.join(' ')}>
            <LightTheme/>
        </div>
    );
};

export default RightSettingsMenu;