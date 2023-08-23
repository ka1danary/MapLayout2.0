import React from 'react';
import MenuButton from '../ui/button/svgButton/MenuButton';
import SettingsButton from '../ui/button/svgButton/SettingsButton';
import Search from '../ui/search/Search';

import moduleHeader from './Header.module.sass'
import SplitViewButton from '../ui/button/svgButton/SplitViewButton';
import RightSettingsMenu from '../rightSettingsMenu/RightSettingsMenu';

const Header = ({filter}) => {
    return (
        <div className={moduleHeader.headerBox}>
            <MenuButton style={{ marginLeft: '10px' }} />
            <Search filter={filter}/>
            <div style={{width : "107px", display : 'flex', justifyContent : 'space-between'}}>
                <SplitViewButton />
                <SettingsButton style={{ marginRight: '10px' }} />
            </div>
            <RightSettingsMenu/>
        </div>
    );
};

export default Header;