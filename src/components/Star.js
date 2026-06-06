import { FaStar } from 'react-icons/fa'; 

function Star(props) {
    return (
        <div className={props.isClicked ? 'clicked' : 'un-clicked'} onClick={props.onClick}>
            <FaStar/>
        </div>
    );
}

export default Star;