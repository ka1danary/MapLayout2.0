import React from 'react';
import MenuButton from '../ui/button/svgButton/MenuButton';
import SettingsButton from '../ui/button/svgButton/SettingsButton';
import Search from '../ui/search/Search';

const Header = () => {
    return (
        <div>
            <MenuButton/>
            <Search/>
            <SettingsButton/>
        </div>
    );
};

export default Header;