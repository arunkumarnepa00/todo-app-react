import React from 'react'

export default function Footer() {
  return (
   
    <footer className="w-100 text-center mt-3 position-absolute b-0">
        <a href="https://www.linkedin.com/in/arun-kumar-nepa-8753a9187">
            <img src={require('../assets/linkedin-logo-svgrepo-com.svg')} className="me-2" width="30px" alt="linkedin"/>
        </a>   
        <a href="https://github.com/arunkumarnepa00">
            <img src={require('../assets/github-svgrepo-com.svg')} width="30px" alt="github"/>
        </a> 
        <p>© 2022 Copyright: Arun kumar Nepa</p>
    </footer>
  )
}
