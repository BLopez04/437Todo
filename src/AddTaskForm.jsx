import { useState } from 'react'
import './App.css'

function AddTaskForm(props) {
    const [textFieldContents, setTextContents] = useState("");

    function handleTyping(e) {
        setTextContents(e.target.value)
    }

    function handleButtonClicked(e) {
        e.preventDefault();
        props.onNewTask(textFieldContents);
        setTextContents("")
    }



    return (
        <div> {/* Unfortunately comments in JSX have to be done like this */}
            <input
                type="text"
                id="new-todo-input"
                value={textFieldContents}
                className="border-1 rounded-md p-2"
                placeholder="New task name"
                onChange={handleTyping}/>
            <button
                className="bg-blue-600 m-2 p-2 text-white rounded-md
                    hover:bg-blue-700 active:bg-blue-900"
                onClick={handleButtonClicked}
            >Add task
            </button>
        </div>
    )
}

export default AddTaskForm;
