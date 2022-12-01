import React, {useEffect, useState} from "react";
import { submitTodo,updateTodo } from "../apihelper/apicalls";
import './styles/Form.css';

export default function Form(props) {
  const updateItem=props.data;
  // console.log(updateItem);
 
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [isImportant, setImportant] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [err,setErr]=useState('');
  const [sucsess,setSuccess]=useState('');
  //console.log(tasks);

  const handleAdd = (e) => {
    e.preventDefault();
    tasks.push(task);
    setTask('');
  };
  const handleRemove=(e)=>{
    e.preventDefault();
    const temp=e.target.value;
    setTasks(tasks.filter(j=> j!==(temp)))
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    setSuccess('');
    const data=await submitTodo({title,tasks,isImportant});
    if(data.err){
      setErr(data.err)
    }
    else{
      setTitle('');
      setTask('');
      setImportant(false);
      setTasks([]);
      setSuccess('Todo is created successfully');
    }
  };

  useEffect(()=>{
    setTitle(updateItem?updateItem.item:'');
    if(updateItem){
      updateItem.tasks.forEach((element)=>{
        tasks.push(element);
      })
    };
    setImportant(updateItem?updateItem.isImportant:false);
  },[updateItem])
  
  //handle update
  const [updateSuccess,setUpdateSuccess]=useState('');
  const [updateErr,setUpdateErr]=useState('');
  const handleUpdate=async(e)=>{
    e.preventDefault();
    setUpdateErr('');
    setUpdateSuccess('');
    const data=await updateTodo(updateItem._id,{title,tasks,isImportant});
    if(data.err){
      setUpdateErr(data.err)
    }
    else{
      setUpdateSuccess('Todo is updated successfully');
    }
  }


  return (
    <div className="todoform">
      { err && (
        <div className="card bg-danger mx-5 mt-2">
          <div className="card-body text-white">
            {err}
          </div>
        </div>)
      }
      { sucsess && (
        <div className="card bg-success mx-5 mt-2">
          <div className="card-body text-white">
            {sucsess}
          </div>
        </div>)
      }
      { updateErr && (
        <div className="card bg-danger mx-5 mt-2">
          <div className="card-body text-white">
            {updateErr}
          </div>
        </div>)
      }
      { updateSuccess && (
        <div className="card bg-success mx-5 mt-2">
          <div className="card-body text-white">
            {updateSuccess}
          </div>
        </div>)
      }
  
      <form className="m-5">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input className="form-control" id="title" 
            value={updateItem?(title?title:updateItem.title):title} 
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="task" className="form-label">Tasks</label>
          <input
            className="form-control" id="task" value={task} onChange={(e) => {
              setTask(e.target.value);
            }}
          ></input>
          <button type="submit" className="btn btn-secondary mt-2" onClick={(e) => {
            handleAdd(e)
            }}
          >
            +
          </button>
          <ul className="list-group list-group-horizontal mt-2">
            {!updateItem && tasks && tasks.length>0 && tasks.map(function(i,index){
                return (
                <li className="list-group-item position-relative mx-2" key={index}>{i}
                <button className="btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                key={index} 
                value={i}
                onClick={(e)=>{
                  handleRemove(e)
                  }}>
                  -
                 </button>
                </li>)
              })
            }
            {updateItem && tasks && tasks.length>0 && tasks.map(function(element,index){
           
                return (
                  <li className="list-group-item position-relative mx-2" key={index}>{element}
                    <button className="btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                    key={index} 
                    value={element}
                    onClick={(e)=>{
                      handleRemove(e)
                    }}>
                      -
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="important" 
            checked={isImportant}
            onChange={(e) => {
              setImportant(e.target.checked);
            }}
          />
          <label className="form-check-label" htmlFor="important">important</label>
        </div>
        {
          !updateItem && (
            <button type="submit" className="btn btn-success" onClick={(e) => {
              handleSubmit(e);
            }}
            >
              Create
            </button>
            )
        }
        {
          updateItem && (
            <button type="submit" className="btn btn-success" onClick={(e) => {
              handleUpdate(e);
            }}
          >
            Update
          </button>
            )
        }
      </form>
    </div>
  );
}
