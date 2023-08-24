import React, { useState } from 'react';
import SearchButton from '../button/svgButton/SearchButton';
import SearchDeleteButton from '../button/svgButton/SearchDeleteButton';

import moduleSearch from './Search.module.sass'
import SearchModalMenu from './searchModalMenu.jsx/SearchModalMenu';

const Search = ({ filter }) => {

    const [value, setValue] = useState('')
    const [visible, setVisible] = useState(false)
    const rootClasses = [moduleSearch.dropSearch]

    if(visible) {
        rootClasses.push(moduleSearch.active)
    }
    

    return (
        <div className={moduleSearch.searchBox}>
            <input
                className={moduleSearch.searchInput}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder='Поиск фильтров'
                onClick={ () => setVisible(true)}
            />
            <div className={moduleSearch.searchRightMenu}>
                <SearchButton />
                <SearchDeleteButton
                    onClick={() => setVisible(false)}
                />
            </div>
            <div className={rootClasses.join(' ')}>
                <SearchModalMenu filter={filter} className={moduleSearch.dropSearch}/>
            </div>
                
        </div>
    );
};

export default Search;