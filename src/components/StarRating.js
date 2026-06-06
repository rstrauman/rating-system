import Star from './Star';
import { useState } from 'react';

function StarRating(props) {
    const [rating, setRating] = useState(0);

    const getText = ()  => {
        switch (rating) {
            case  1:
                return "Boo";
            case  2:
                return "Okay";
            case  3:
                return "Good";
            case  4:
                return "Great";
            case  5:
                return "Perfect";
            default:
                return "How would you rate this project?";
        }
    }

    return (
        <section>
            <div className='star-container'>
            {props.stars.map(star => (
                <Star key={star} isClicked={star <= rating} onClick={() => setRating(star)}/>
            ))}
            </div>
            <h2>{getText()}</h2>
            <button>Open Dialog</button>
        </section>
    );
}

export default StarRating;