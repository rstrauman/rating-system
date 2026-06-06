import Star from './Star';
import { useState } from 'react';

function StarRating(props) {
    const [rating, setRating] = useState(0);

    return (
        <section>
        {props.stars.map(star => (
            <Star key={star} isClicked={star <= rating} onClick={() => setRating(star)}/>
        ))}
        </section>
    );
}

export default StarRating;