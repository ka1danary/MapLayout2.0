import Checkboox from "./components/ui/checkbox/baseCheckbox/Checkboox";
import RadioCheckbox from "./components/ui/checkbox/radioCheckbox/RadioCheckbox";
import SlideCheckbox from "./components/ui/checkbox/slideCheckbox/SlideCheckbox";


function App() {
  return (
    <div className="App">
      <SlideCheckbox/>
      <Checkboox/>
      <RadioCheckbox/>
    </div>
  );
}

export default App;
