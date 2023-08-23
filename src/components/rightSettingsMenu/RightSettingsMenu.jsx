import React from 'react';

import moduleSetting from './RightSettingsMenu.module.sass'
import LightTheme from '../ui/button/svgButton/LightTheme';

const RightSettingsMenu = () => {
    return (
        <div className={moduleSetting.rightMenuBox}>
            <LightTheme/>
        </div>
    );
};

export default RightSettingsMenu;