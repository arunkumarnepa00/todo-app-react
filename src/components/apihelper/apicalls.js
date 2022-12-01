
const fetchTodosList=async()=>{
  try {
    const response=await fetch('/todo',{
      method:'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
     });
     return response.json();
  } catch (error) {
    console.log(error)
    return {err:error};
  }
}

const submitTodo=async(details)=>{
  try {
    const response=await fetch('/todo',{
    method:'POST',
    headers:{
      'Accept':'application/json',
      'content-Type':'application/json'
    },
    body:JSON.stringify(details)
   });
   return response.json();
  } catch (error) {
    console.log(error)
    return {err:error};
  }
}

const deleteTodo=async (id)=>{
  try {
    const response=await fetch(`/todo/${id}`,{
    method:'DELETE'
   });
   return response.json();
  } catch (error) {
    console.log(error)
    return {err:error};
  }
}

const updateTodo=async (id,details)=>{
  console.log(details)
  try {
    const response=await fetch(`/todo/${id}`,{
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'content-Type':'application/json'
    },
    body:JSON.stringify(details)
   });
   return response.json();
  } catch (error) {
    console.log(error)
    return {err:error};
  }
}

const getTodo=async(id)=>{
  try {
    const response=await fetch(`/todo/${id}`,{
      method:'GET'
     });
     return response.json();
  } catch (error) {
    console.log(error)
    return {err:error};
  }
}

const searchTodos=async(key)=>{
  try {
    const response=await fetch(`/todo/search/${key}`,{
      method:'GET'
     });
     return response.json();
  } catch (error) {
    console.log(error)
    return {err:error};
  }
}

export {fetchTodosList,submitTodo,updateTodo,deleteTodo,getTodo,searchTodos};