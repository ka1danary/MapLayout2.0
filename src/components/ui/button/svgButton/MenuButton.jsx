import React, { useState } from 'react';

import moduleSvgButton from './SvgButton.module.sass'

const MenuButton = (props) => {

    const [visible, setVisible] = useState(false)
    return (
        <button {...props} className={moduleSvgButton.btnIcon}>
            <svg className={moduleSvgButton.svgIcon} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path className={moduleSvgButton.pathIcon} d="M0 20V18.3333H20V20H0ZM0 10.8333V9.16667H20V10.8333H0ZM0 1.66667V0H20V1.66667H0Z"/>
                </svg>
        </button>
    );
};

export default MenuButton;