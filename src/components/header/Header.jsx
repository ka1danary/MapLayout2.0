import React, { useState } from 'react';
import MenuButton from '../ui/button/svgButton/MenuButton';
import SettingsButton from '../ui/button/svgButton/SettingsButton';
import Search from '../ui/search/Search';

import moduleHeader from './Header.module.sass'
import SplitViewButton from '../ui/button/svgButton/SplitViewButton';
import RightSettingsMenu from '../rightSettingsMenu/RightSettingsMenu';


const Header = ({filter}) => {

    const [vision, setVision] = useState({menu : false, settings : false})
    

    return (
        <div className={moduleHeader.headerBox}>
            <MenuButton style={{ marginLeft: '10px' }}/>
            <Search filter={filter}/>
            <div style={{width : "107px", display : 'flex', justifyContent : 'space-between'}}>
                <SplitViewButton />
                <SettingsButton style={{ marginRight: '10px' }} onClick={ () => setVision({...vision, settings : !vision.settings})}/>
            </div>
            <RightSettingsMenu vision={vision}/>
        </div>
    );
};

export default Header;