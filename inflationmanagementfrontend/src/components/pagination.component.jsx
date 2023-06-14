import '../styles/pagination.component.css';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

export default function PaginationComponent(props){
    return(
        <div id="pagination">
            <button id="left_button">
                <AiOutlineArrowLeft/>
            </button>
            <span>{props.date}</span>
            <button id="right_button">
                <AiOutlineArrowRight/>
            </button>
        </div>
    );
}