import React, { useState } from 'react';
import SearchButton from '../button/svgButton/SearchButton';
import SearchDeleteButton from '../button/svgButton/SearchDeleteButton';

import moduleSearch from './Search.module.sass'
import SearchModalMenu from './searchModalMenu.jsx/SearchModalMenu';

const Search = ({filter}) => {

    const [value, setValue] = useState('')

    return (
        <div className={moduleSearch.searchBox}> 
            <input 
                className={moduleSearch.searchInput}
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder='Поиск фильтров'
                />
            <div className={moduleSearch.searchRightMenu}>
                <SearchButton/>
                <SearchDeleteButton 
                    onClick={() => setValue('')}
                />
            </div>
            <SearchModalMenu filter={filter}/>
        </div>
    );
};

export default Search;