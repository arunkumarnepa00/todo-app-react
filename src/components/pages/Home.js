import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/Navbar";
import {fetchTodosList,searchTodos} from "../apihelper/apicalls";
import Card from "../common/Card";


export default function Home() {
  const [list, setList] = useState("");
  const [err, setErr] = useState("");
  const [temp,setTemp]=useState("");

  //search
  const [searchResults,setSearchResults]=useState([])
  //const [searchSuccess,setSearchSuccess]=useState('');
  const [searchErr,setSearchErr]=useState('');
  const fetchsearch=async(key)=>{
    setSearchErr('');
    setSearchResults([]);
    if(key){
      const data=await searchTodos(key);
      if(data.err){
        setSearchErr(data.err);
      }
      else{
        setSearchResults(data.items);
      }
    }
  }
  const handleDelete=(id)=>{
    setTemp(id);
  }

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await fetchTodosList();
        if (data && data.err) {
          setErr(data.err);
        } else {
          setList(data.items);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTodos();
  }, [temp]);
  
  return (
    <div>
      <Navbar data={fetchsearch} />
      <Link className="btn btn-success m-5" to='/createTodo'>Create One</Link>
      {/* <>
       {searchSuccess &&
        (
          <div className="card px-5 mx-5 bg-secondary" style={{width:'18rem'}}>
            <div className="card-body text-white">{searchSuccess}</div>
          </div>
        )}
     </> */}
     <>
       {searchErr &&
        (
          <div className="card px-5 mx-5 bg-danger" style={{width:'18rem'}}>
            <div className="card-body text-white">{searchErr}</div>
          </div>
        )}
     </>
     <div className="d-flex m-3 flex-wrap">
        {searchResults && searchResults.length>0 && searchResults.map(function(element,index){
            return (
              <div className="mb-5 pb-5" key={index}>
                <Card data={[element,handleDelete]} key={index} /><hr/>
              </div>
            )
          })
        }
     </div>
     <>
      {err &&
        (
          <div className="card px-5 mx-5 bg-danger">
            <div className="card-body text-white">{err}</div>
          </div>
        )}
     </>
     <div className="d-flex m-3 flex-wrap ">
        {list && list.length>0 && list.map(function(element,index){
            return <Card data={[element,handleDelete]} key={index} />
          })
        }
     </div>
    </div>
  );
}
