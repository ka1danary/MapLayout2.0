import './App.reset.sass'
import './App.sass'
import { useState } from 'react';
import Header from './components/header/Header';
import FilterBox from './components/ui/filterBox/FilterBox';
import LayerMenu from './components/ui/layerMenu/LayerMenu';
import ToolsMenu from './components/ui/toolsMenu/ToolsMenu';
import CoordinateBox from './components/ui/coordinateBox/CoordinateBox';

function App() {

  const [filter, setFilter] = useState([
    {id : 1, name : 'filter 1'},
    {id : 2, name : 'filter 2'},
    {id : 3, name : 'filter 3'},
    {id : 4, name : 'filter 4'},
  ])

  return (
    <div className="App">
        <Header/>
        <LayerMenu/>
        <ToolsMenu/>
        <FilterBox filter={filter}  title={'Раздел'}/>
        <CoordinateBox/>
    </div>
  );
}

export default App;
