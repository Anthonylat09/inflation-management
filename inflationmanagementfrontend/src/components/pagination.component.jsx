import '../styles/pagination.component.css';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import {useEffect, useState} from "react";
import {getTransactions} from "../services/transaction.service";

export default function PaginationComponent(){
    const [currentDate, setCurrentDate] = useState(new Date())
    const [monthYear, setMonthYear] = useState(currentDate.toLocaleString('default', { month: 'long', year: 'numeric' }));

    const [startOfMonth, setStartOfMonth] = useState(new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ))
    const [endOfMonth, setEndOfMonth] = useState(new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ))

    function handleLeftButtonClick(e) {
        e.preventDefault();

        // Create a new Date object based on the current month
        const currentMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

        // Subtract one month from the current month
        currentMonthDate.setMonth(currentMonthDate.getMonth() - 1);

        // Update the currentDate state with the new date
        setCurrentDate(currentMonthDate);

        setStartOfMonth(new Date(
            currentMonthDate.getFullYear(),
            currentMonthDate.getMonth(),
            0
        ))

        setEndOfMonth(new Date(
            currentMonthDate.getFullYear(),
            currentMonthDate.getMonth() + 1,
            0
        ))

        // Update the monthYear state with the new month and year
        setMonthYear(currentMonthDate.toLocaleString('default', { month: 'long', year: 'numeric' }));

    }

    function handleRightButtonClick(e) {
        e.preventDefault();

        // Create a new Date object based on the current month
        const currentMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

        // Subtract one month from the current month
        currentMonthDate.setMonth(currentMonthDate.getMonth() + 1);

        // Update the currentDate state with the new date
        setCurrentDate(currentMonthDate);

        setStartOfMonth(new Date(
            currentMonthDate.getFullYear(),
            currentMonthDate.getMonth(),
            0
        ))

        setEndOfMonth(new Date(
            currentMonthDate.getFullYear(),
            currentMonthDate.getMonth() + 1,
            0
        ))

        // Update the monthYear state with the new month and year
        setMonthYear(currentMonthDate.toLocaleString('default', { month: 'long', year: 'numeric' }));
    }
    return(
        <div id="pagination">
            <button id="left_button" onClick={handleLeftButtonClick}>
                <AiOutlineArrowLeft/>
            </button>
            <span>{monthYear}</span>
            <button id="right_button" onClick={handleRightButtonClick}>
                <AiOutlineArrowRight/>
            </button>
        </div>
    );
}