import React, { useState } from "react";


export default function Navbar(props) {

  const [search,setSearch]=useState('');
  const handleChange=(e)=>{
    setSearch(e.target.value);
  }
  const handleClick=(e)=>{
    e.preventDefault();
    props.data(e.target.value);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
          TODO App
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
            <li className="nav-item ">
              <a className="nav-link text-white" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-white" href="/">
                Link
              </a>
            </li> */}
          </ul> 
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
              value={search}
              onChange={(e)=>{
                handleChange(e);
              }}
            />
            <button className="btn btn-success" type="submit" value={search} 
            onClick={(e)=>{
              handleClick(e)
              }}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
