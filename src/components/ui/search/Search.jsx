import React, { useEffect, useState } from 'react';
import SearchButton from '../button/svgButton/SearchButton';
import SearchDeleteButton from '../button/svgButton/SearchDeleteButton';

import moduleSearch from './Search.module.sass'
import SearchModalMenu from './searchModalMenu.jsx/SearchModalMenu';

import data from '../../../MOCK_DATA.json'

const Search = ({ filter, setFilter }) => {

    const [value, setValue] = useState('')
    const [visible, setVisible] = useState(false)
    const rootClasses = [moduleSearch.dropSearch]

    if(visible) {
        rootClasses.push(moduleSearch.active)
    }
    
    // const sortFilters = (searchText, listOfData) => {
    //     if (!searchText) {
    //         return listOfData
    //     }
    //     return listOfData.filter(({name}) => 
    //     name.toLowerCase().includes(searchText.toLowerCase())
    //     )
    // }

    // useEffect( () => {
    //     const Debounce = setTimeout( () => {
    //         const filteredName = sortFilters(value, data)
    //         setValue(filteredName)
    //     }, 300)

    //     return () => clearTimeout(Debounce)
    // }, [value])

    
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