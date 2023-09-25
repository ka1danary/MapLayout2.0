import './App.reset.sass'
import './App.sass'
import { useState } from 'react';
import Header from './components/header/Header';
import FilterBox from './components/ui/filterBox/FilterBox';
import LayerMenu from './components/ui/layerMenu/LayerMenu';
import ToolsMenu from './components/ui/toolsMenu/ToolsMenu';
import CoordinateBox from './components/ui/coordinateBox/CoordinateBox';
import LeftSlideMenu from './components/leftSlideMenu/LeftSlideMenu';
import DarckDropButton from './components/ui/darkDropButton/DarckDropButton';
import RuleButton from './components/ui/button/textButton/RuleButton';
import TimeLineButton from './components/ui/button/textButton/TimeLineButton';
import data from './MOCK_DATA.json'

function App() {
  
  
  const [filter, setFilter] = useState(
    data
  )

  return (
    <div className="App">
        <Header filter={filter} setFilter={setFilter}/>
    </div>
  );
}

export default App;
