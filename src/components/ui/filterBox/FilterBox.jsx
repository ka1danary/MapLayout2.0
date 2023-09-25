import React from 'react';
import { useState } from 'react';

import moduleFilterBox from './FilterBox.module.sass'
import FilterList from './filterList/FilterList';

const FilterBox = ({filter, title}) => {

    const [visible, setVisible] = useState(true)

    const rootClasses = [moduleFilterBox.filterDropMenu]

    if(visible) {
        rootClasses.push(moduleFilterBox.active)
        console.log(`Filter Box ${visible}`)
    }

    return (
        <div>
            <button className={moduleFilterBox.filterBox} onClick={() => setVisible(!visible)}>
                <div className={moduleFilterBox.filterText}>Фильтры</div>
                <svg className={moduleFilterBox.filterSvg} xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="currentColor">
                    <path className={moduleFilterBox.filterPath} d="M7.5 10L0 1.51943L1.34375 0L7.5 6.99647L13.6562 0.0353357L15 1.55477L7.5 10Z" />
                </svg>
            </button>
            <div className={rootClasses.join(' ')}>
                <FilterList filter={filter} title={title} visible={visible} />
                <FilterList filter={filter} title={title} visible={visible}/>
                <FilterList filter={filter} title={title}  visible={visible}/>
            </div>
        </div>
    );
};

export default FilterBox;