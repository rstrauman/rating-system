import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import { useState } from 'react'; 

function App() {
	const [isOpen, setOpen] = useState(false);

	const stars = [1, 2, 3, 4, 5]

	const openDialog = () => {
		setOpen(true);
	}

	const closeDialog = () => {
		setOpen(false);
	}

	return (
		<div className="container stars-container">
			<StarRating stars={stars}/>
			<button className="open-btn" onClick={openDialog}>Open Dialog</button>
			<Dialog closeDialog={closeDialog} isOpen={isOpen}/>
		</div>
	);
}

export default App;
