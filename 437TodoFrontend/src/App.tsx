import { useState } from 'react'
import TodoItems from "./TodoItems.js";
import Modal from "./Modal.js"
import AddTaskForm from "./AddTaskForm.tsx";
import { nanoid } from "nanoid";

interface ITask {
    id: string;
    name: string;
    completed: boolean;
}

interface IAppProps {
    tasks: ITask[]
}

function App(props: IAppProps) {
    const [taskList, setTaskList] = useState(props.tasks);
    const [isOpen, setIsOpen] = useState(false);

    function onNewTask(name: string) {
        const newTask = {id : `todo-${nanoid()}`, name, completed: false};
        setTaskList([...taskList, newTask])
        setIsOpen(false)
    }

    function toggleTaskCompleted(id: string) {
        const updatedTasks = taskList.map((task) => {
            if (id === task.id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });

        console.log(updatedTasks)
        setTaskList(updatedTasks);
    }

    function deleteTask(id: string) {
        const updatedTasks = taskList.filter((task) => task.id !== id)
        console.log(updatedTasks)
        setTaskList(updatedTasks);
    }

    function onCloseRequested() {
        setIsOpen(false);
    }

    return (
        <main className="m-4"> {/* Tailwind: margin level 4 on all sides */}
            <Modal isOpen={isOpen}
                   onCloseRequested={onCloseRequested}
                   headerLabel="New Task">
                <AddTaskForm onNewTask={onNewTask}/>
            </Modal>
            <button
                className="bg-blue-600 mb-2 p-2 text-white rounded-md
                    hover:bg-blue-700 active:bg-blue-900"
                onClick={() => setIsOpen(true)}>
                New task
            </button>
            <section>
                <h1 className="text-xl font-bold pb-1">To do</h1>
                <ul role="list"
                    aria-labelledby="list-heading">
                    {
                        taskList.map((task) =>
                            <TodoItems id={task.id}
                                       name={task.name}
                                       completed={task.completed}
                                       toggleTaskCompleted={toggleTaskCompleted}
                                       deleteTask={deleteTask}/>)
                    }
                </ul>
            </section>
        </main>
    );
}

export default App;
