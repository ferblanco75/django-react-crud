import { useEffect, useState } from 'react'
import { getAllTasks } from '../api/task.api'
import { TaskCard } from './TaskCard';


export const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
    async function loadAllTasks(){
            const res = await getAllTasks(); 
            setTasks(res.data);   
        }
        loadAllTasks();
    }, []);

    return (
        <div className='grid grid-cols-3 gap-3' >
            {tasks.map(task  => (
               <TaskCard key={task.id} task={task}/>
            ))}
        </div> )
};
