import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Navbar from '../common/Navbar';
import Form from '../common/Form';
import {getTodo} from "../apihelper/apicalls";
import Footer from '../common/Footer';

export default function UpdateTodo() {
  const {id}=useParams();
  const [list, setList] = useState("");
  const [err, setErr] = useState("");

  // console.log(list)

  useEffect(()=>{
    const getTodos = async () => {
        try {
          const data = await getTodo(id);
          if (data.err) {
            setErr(data.err);
          } else {
            setList(data.item);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getTodos();
  },[])
   
  return(
    <>
      <Navbar/>
      {err && (
        <div className="card bg-danger mx-5 mt-2">
            <div className="card-body text-white">
              {err}
            </div>
        </div>)
      }
      {!list && (
        <div class="d-flex justify-content-center mt-2">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <Form data={list}/>
      <Footer/>
    </>
  );
}


  
