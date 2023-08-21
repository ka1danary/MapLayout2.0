import React from 'react';
import MenuButton from '../ui/button/svgButton/MenuButton';
import SettingsButton from '../ui/button/svgButton/SettingsButton';
import Search from '../ui/search/Search';

import moduleHeader from './Header.module.sass'

const Header = () => {
    return (
        <div className={moduleHeader.headerBox}>
            <MenuButton style={{marginLeft : '10px'}}/>
            <Search/>
            <SettingsButton style={{marginRight : '10px'}}/>
        </div>
    );
};

export default Header;