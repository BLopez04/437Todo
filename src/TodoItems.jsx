import { useState } from 'react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function TodoItems(props) {
    return (
        <li>
            <label>
                <input type="checkbox" defaultChecked={props.completed}/> {props.name}
            </label>
            <button className="ml-8 text-gray-600"><FontAwesomeIcon icon={faTrashCan}/>
            </button>
        </li>
    )
}

export default TodoItems;
