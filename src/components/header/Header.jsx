import React from 'react';
import MenuButton from '../ui/button/svgButton/MenuButton';
import SettingsButton from '../ui/button/svgButton/SettingsButton';
import Search from '../ui/search/Search';

import moduleHeader from './Header.module.sass'
import SplitViewButton from '../ui/button/svgButton/SplitViewButton';
import RightSettingsMenu from '../rightSettingsMenu/RightSettingsMenu';

const Header = () => {
    return (
        <div className={moduleHeader.headerBox}>
            <MenuButton style={{ marginLeft: '10px' }} />
            <Search />
            <div style={{width : "100px"}}>
                <SplitViewButton />
                <SettingsButton style={{ marginRight: '10px' }} />
                <RightSettingsMenu/>
            </div>

        </div>
    );
};

export default Header;