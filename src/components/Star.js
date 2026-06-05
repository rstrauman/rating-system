import { FaStar } from 'react-icons/fa'; 

function Star(props) {
    return (
        <div className='star' onClick={props.onClick}>
            <FaStar/>
        </div>
    );
}

export default Star;