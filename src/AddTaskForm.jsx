import { useState } from 'react'
import './App.css'

function AddTaskForm(props) {
    return (
        <div> {/* Unfortunately comments in JSX have to be done like this */}
            <input
                className="border-1 rounded-md p-2"
                placeholder="New task name"/>
            <button
                className="bg-blue-600 m-2 p-2 text-white rounded-md
                    hover:bg-blue-700 active:bg-blue-900">Add task
            </button>
        </div>
    )
}

export default AddTaskForm;
