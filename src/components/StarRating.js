import Star from './Star';

function StarRating(props) {
    return (
        <section>
        {props.stars.map(star => (
            <Star/>
        ))}
        </section>
    );
}

export default StarRating;