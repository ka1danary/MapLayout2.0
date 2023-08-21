import React from 'react';

import moduleSvgButton from './SvgButton.module.sass'

const SplitViewButton = (props) => {
    return (
        <button {...props} className={moduleSvgButton.btnIcon}>
            <svg className={moduleSvgButton.svgIcon} xmlns="http://www.w3.org/2000/svg" width="29" height="25" viewBox="0 0 29 25" fill="currentColor">
                <path className={moduleSvgButton.pathIcon} d="M11.2375 22.6562L11.2375 2.34375H2.175L2.175 22.6562H11.2375ZM13.4125 22.6562C13.4125 23.2812 13.195 23.8281 12.76 24.2969C12.325 24.7656 11.8175 25 11.2375 25H2.175C1.595 25 1.0875 24.7656 0.6525 24.2969C0.2175 23.8281 0 23.2812 0 22.6562L0 2.34375C0 1.71875 0.2175 1.17188 0.6525 0.703125C1.0875 0.234375 1.595 0 2.175 0H11.2375C11.8175 0 12.325 0.234375 12.76 0.703125C13.195 1.17188 13.4125 1.71875 13.4125 2.34375L13.4125 22.6562ZM26.825 22.6562V2.34375H17.7625V22.6562H26.825ZM29 22.6562C29 23.2812 28.7825 23.8281 28.3475 24.2969C27.9125 24.7656 27.405 25 26.825 25H17.7625C17.1825 25 16.675 24.7656 16.24 24.2969C15.805 23.8281 15.5875 23.2812 15.5875 22.6562L15.5875 2.34375C15.5875 1.71875 15.805 1.17188 16.24 0.703125C16.675 0.234375 17.1825 0 17.7625 0H26.825C27.405 0 27.9125 0.234375 28.3475 0.703125C28.7825 1.17188 29 1.71875 29 2.34375V22.6562Z" fill="#8E8E8E" />
            </svg>
        </button>
    );
};

export default SplitViewButton;