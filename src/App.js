import './body.css';
import NavBar from './components/nav/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCard from './components/ItemCard/ItemCard';

const App = () => {
  return (
    <div className="body">
     <NavBar/>
     <ItemListContainer titulo="Nike shop"/>
     </div>
  );
}

export default App;
