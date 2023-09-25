import React from 'react';
import moduleLeftSideMenu from './LeftSlideMenu.module.sass'
import LayerMenu from '../ui/layerMenu/LayerMenu';
import ToolsMenu from '../ui/toolsMenu/ToolsMenu';
import FilterBox from '../ui/filterBox/FilterBox';
import CoordinateBox from '../ui/coordinateBox/CoordinateBox';

const LeftSlideMenu = ({filter, title, vision}) => {

    const rootClasses = [moduleLeftSideMenu.ledftDropMenuBox]
    if(vision) {
        rootClasses.push(moduleLeftSideMenu.active)
    }
    return (
        <div className={rootClasses.join(' ')}>
            <LayerMenu/>
            <ToolsMenu/>
            <FilterBox filter={filter} title={title}/>
            <CoordinateBox/>
        </div>
    );
};

export default LeftSlideMenu;