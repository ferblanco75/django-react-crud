import {useEffect, React} from 'react'
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask} from '../api/task.api'
import { useNavigate, useParams } from "react-router-dom"
import { toast } from 'react-hot-toast'




export const TaskFormPage = () => {

    const {register, setValue, handleSubmit, formState : {errors}} = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSumbit = handleSubmit(async data => {
        if(params.id){
          await updateTask(params.id, data);
          toast.success('task updated');
        } else {
         await createTask(data);
          toast.success('new task created',{
            position: "bottom-right",
            style: {
              background: "#101010",
              color: "#fff"
            }
          });
        }
        navigate("/tasks");
    });

    useEffect(()=>{
      async function loadTask() {
        if(params.id){
          const res = await getTask(params.id);
          setValue('title', res.data.title);
          setValue('description',res.data.description);
        }
      }
      loadTask(); 
    },[])

    return (
    <div className='max-w-xl mx-auto'>
        {/* al ejecutar el handle submit me da info que necesito*/}
      <form onSubmit={onSumbit}>
        <input type="text" placeholder="title"
         {...register("title", {required: true})}
         className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' />
            {errors.title && <span>This field is required</span>}
            <br />
        <textarea  rows="18" cols="50" placeholder="Description"
        {...register("description", {required: true})} 
        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        >  
        </textarea>
            {errors.description && <span>This field is required</span>}
        <button
          className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'
        >
            Save
        </button>
      </form> 
        {params.id && (
          <div className='flex justify-end'>
          <button
          className='bg-red-500 p-3 rounded-lg w-48 mt-3'
          onClick={async ()=>{
            const accepted   = window.confirm('are you sure you want to delete?');
            if (accepted){
              await deleteTask(params.id);
              toast.success('task deleted',{
                position: "bottom-right",
                style: {
                  background: "#101010",
                  color: "#fff"
                }
              });
              navigate("/tasks");
            }
          }}
          >
          
          Delete
          </button>
          </div>)}
    </div>
  )
}
