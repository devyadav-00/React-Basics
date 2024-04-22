import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import Card from './components/Card';

function App() {
  const itemTwonName = "neerma";
  return (
    
    
    <div>
      <Card>
        <Item name="surfexcel">
          most beautiful items
        </Item>
        <Item name={itemTwonName}></Item>
        <Item name="555"></Item>
        <div className="App">hello dev</div>
      </Card>
    </div>
    
  );
}

export default App;
