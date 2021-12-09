import './App.css'
import './components/InfoCard/style.css'
import './components/Button/style.css'
import './components/Image/style.css'

import Image from './components/Image';
import Description from './components/InfoCard';
import Button from './components/Button';


function App() {
  return (
  <div className="App">
      <header className="App-header">
        <Image/>
        <Description title="Backpack" price="34$" content="With a concept desgined to be easy to understand, RAINS bridge the gap between geography and lifestyle"
          section1="Colors" section2="Size"
        />
        <Button content="Add to cart"/>
      </header>
      
    </div>
  );
}

export default App;
