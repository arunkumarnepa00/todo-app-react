import React from "react";
import { Link } from "react-router-dom";
import {deleteTodo} from '../apihelper/apicalls';

export default function Card(props) {
  const details = props.data[0];

  const HandleDelete=async(id)=>{
    const data=await deleteTodo(id);
    if(data.err){
      console.log(data.err);
    }else{
      props.data[1](id);
    }
  }


  return (
    <div>
      {details &&
       (
          <div className="card m-2 rounded" style={{ width: "18rem" }}>
            <h4 className="card-title bg-dark text-white py-2 rounded px-2">
            {
              details.isImportant===true && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                className="bi bi-pin-fill mx-2 text-start" viewBox="0 0 16 16">
                <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z"/>
              </svg>
              )
            }
            
              {<span className="ms-2">{details.title}</span>}</h4>
            <div className="card-body p-1">
              <ul className="list-group list-group-flush">
                  {details.tasks && details.tasks.map(function(task, i) {
                      return (
                        <li className="list-group-item" key={i}>
                          {task}
                        </li>
                      );
                  })}
              </ul>
              <div className="mt-2">
                <button className="btn btn-sm btn-primary me-2"><Link className="text-white text-decoration-none" to={`/updateTodo/${details._id}`}>
                    Edit</Link></button>
                <button className="btn btn-sm btn-danger" onClick={(e)=>{
                    e.preventDefault();
                    HandleDelete(details._id);
                  }}>
                    Delete</button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}
