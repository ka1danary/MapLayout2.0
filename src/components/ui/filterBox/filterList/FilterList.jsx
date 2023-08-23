import React from 'react';
import moduleFilterList from './FilterList.module.sass'
import Checkboox from '../../checkbox/baseCheckbox/Checkboox';

const FilterList = ({ title, filter }) => {
    return (
        <div className={moduleFilterList.listBox}>
            <div className={moduleFilterList.listTitleBox}>
                <div className={moduleFilterList.listTitle}>{title}</div>
                <svg className={moduleFilterList.filterListSvg} xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="currentColor">
                    <path className={moduleFilterList.filterListPath} d="M7.5 10L0 1.51943L1.34375 0L7.5 6.99647L13.6562 0.0353357L15 1.55477L7.5 10Z" />
                </svg>
            </div>

            <div className={moduleFilterList.filterListMap}>
                {filter.map(el =>
                    <div className={moduleFilterList.filterLictMapCheckbox}>
                        <Checkboox />
                        {el.name}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterList;