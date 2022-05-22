import './body.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/nav/NavBar'

function App() {
  return (
    <div className="body">
     <NavBar/>
     <ItemListContainer name="Nike Air Max"/>
     </div>
  );
}

export default App;
