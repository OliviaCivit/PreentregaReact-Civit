import './output.css';
import Navbar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'


function App() {
	return (
		<div className="App">
			<Navbar />
			<ItemListContainer/>
			
		</div>
	);
}

export default App;

