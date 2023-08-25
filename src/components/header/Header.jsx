import React, { useState } from 'react';
import MenuButton from '../ui/button/svgButton/MenuButton';
import SettingsButton from '../ui/button/svgButton/SettingsButton';
import Search from '../ui/search/Search';

import moduleHeader from './Header.module.sass'
import SplitViewButton from '../ui/button/svgButton/SplitViewButton';
import RightSettingsMenu from '../rightSettingsMenu/RightSettingsMenu';
import LeftSlideMenu from '../leftSlideMenu/LeftSlideMenu';


const Header = ({filter}) => {

    const [visionSet, setVisionSet] = useState(false)
    const [visionMenu, setVisionMenu] = useState(false)
    

    return (
        <div className={moduleHeader.headerBox}>
            <MenuButton style={{ marginLeft: '10px' }} onClick={() => setVisionMenu(!visionMenu)}/>
            <Search filter={filter}/>
            <div style={{width : "107px", display : 'flex', justifyContent : 'space-between'}}>
                <SplitViewButton />
                <SettingsButton style={{ marginRight: '10px' }} onClick={ () => setVisionSet(!visionSet)}/>
            </div>
            <RightSettingsMenu vision={visionSet}/>
            <LeftSlideMenu vision={visionMenu} filter={filter} title='Раздел'/>
        </div>
    );
};

export default Header;