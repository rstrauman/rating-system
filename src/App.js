import StarRating from './components/StarRating';

function App() {

	const stars = [1, 2, 3, 4, 5]

	return (
		<div className="container stars-container">
			<StarRating stars={stars}/>
			<button>Open Dialog</button>
		</div>
	);
}

export default App;
