import Star from './Star';
import { useState } from 'react';

function StarRating(props) {
    const [rating, setRating] = useState(0);
    
    const starClick = () => {
        // if (isClicked ) {
        //     if (stars[star]) {
        //         return "unclicked"
        //     }
        // }
        
        // if (star <= stars[star]) {
        //     return "clicked";
        // } 

        // setClicked(true);
    };

    return (
        <section>
        {props.stars.map(star => (
            <Star onClick={() => setRating(star)}/>
        ))}
        </section>
    );
}

export default StarRating;