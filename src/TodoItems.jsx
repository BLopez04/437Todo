import { useState } from 'react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function TodoItems(props) {

    return (
        <li>
            <label>
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}/> {props.name}
            </label>
            <button className="ml-8 text-gray-600"
                    onClick={() =>props.deleteTask(props.id)}>
                <FontAwesomeIcon icon={faTrashCan}/>
            </button>
        </li>
    )
}

export default TodoItems;
