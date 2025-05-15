import { useState } from 'react'
import TodoItems from "./TodoItems.jsx";
import AddTaskForm from "./AddTaskForm.jsx";

function App(props) {
    const taskList = props.tasks?.map((task) =>
        <TodoItems id={task.id}
                   name={task.name}
                   completed={task.completed}
                    key={task.id}/>)
    return (
        <main className="m-4"> {/* Tailwind: margin level 4 on all sides */}
            <AddTaskForm/>
            <section>
                <h1 className="text-xl font-bold">To do</h1>
                <ul
                    role="list"
                    aria-labelledby="list-heading">
                    {taskList}
                </ul>
            </section>
        </main>
    );
}

export default App;
