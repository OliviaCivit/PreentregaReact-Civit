import './output.css';
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
	return (
		<div className="App">
			<Navbar />
			<ItemListContainer/>
			<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada",quantity)} />
			<ItemDetailContainer />
		</div>
	);
}

	


export default App;

