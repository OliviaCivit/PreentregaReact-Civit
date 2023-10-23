import './output.css';
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
	return (
		<div className="App">
			<Navbar />
			<ItemListContainer/>
			<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
		</div>
	);
}

	


export default App;

