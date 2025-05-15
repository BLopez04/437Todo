import { useState } from 'react'
import TodoItems from "./TodoItems.jsx";
import AddTaskForm from "./AddTaskForm.jsx";
import { nanoid } from "nanoid";

function App(props) {
    const [taskList, setTaskList] = useState(props.tasks);

    function onNewTask(name) {
        const newTask = {id : `todo-${nanoid()}`, name, completed: false};
        setTaskList([...taskList, newTask])
    }

    function toggleTaskCompleted(id) {
        const updatedTasks = taskList.map((task) => {
            if (id === task.id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });

        console.log(updatedTasks)
        setTaskList(updatedTasks);
    }

    function deleteTask(id) {
        const updatedTasks = taskList.filter((task) => task.id !== id)
        console.log(updatedTasks)
        setTaskList(updatedTasks);
    }

    return (
        <main className="m-4"> {/* Tailwind: margin level 4 on all sides */}
            <AddTaskForm onNewTask={onNewTask}/>
            <section>
                <h1 className="text-xl font-bold">To do</h1>
                <ul role="list"
                    aria-labelledby="list-heading">
                    {
                        taskList.map((task) =>
                        <TodoItems id={task.id}
                                   name={task.name}
                                   completed={task.completed}
                                   key={task.id}
                                   toggleTaskCompleted={toggleTaskCompleted}
                                    deleteTask={deleteTask}/>)
                    }
                </ul>
            </section>
        </main>
    );
}

export default App;
