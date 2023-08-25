import React from 'react';
import moduleLeftSideMenu from './LeftSlideMenu.module.sass'
import LayerMenu from '../ui/layerMenu/LayerMenu';
import ToolsMenu from '../ui/toolsMenu/ToolsMenu';
import FilterBox from '../ui/filterBox/FilterBox';

const LeftSlideMenu = ({filter, title}) => {
    return (
        <div className={moduleLeftSideMenu.ledftDropMenuBox}>
            <LayerMenu/>
            <ToolsMenu/>
            <FilterBox filter={filter} title={title}/>
        </div>
    );
};

export default LeftSlideMenu;