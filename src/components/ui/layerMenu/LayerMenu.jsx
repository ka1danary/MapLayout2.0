import React from 'react';

import moduleLayerMenu from './LayerMenu.module.sass';

import SlideCheckbox from '../checkbox/slideCheckbox/SlideCheckbox';
import Checkboox from '../checkbox/baseCheckbox/Checkboox';
import ExpandDotsButton from '../button/svgButton/ExpandDotsButton';

const LayerMenu = () => {
    return (
        <div className={moduleLayerMenu.layerBox}>
            <button className={moduleLayerMenu.layerLeftButton}>
                <div className={moduleLayerMenu.layerText}>Слои</div>
            </button>
            <svg style={{marginRight : '28px'}} xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="currentColor">
                    <path className={moduleLayerMenu.layerPath} d="M7.5 10L0 1.51943L1.34375 0L7.5 6.99647L13.6562 0.0353357L15 1.55477L7.5 10Z" />
            </svg>
        </div>
    );
};

export default LayerMenu;