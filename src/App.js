import './body.css';
import NavBar from './components/nav/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <div className="body">
     <NavBar/>
     <ItemListContainer titulo=""/>
     <ItemDetailContainer/>
     </div>
  );
}

export default App;
