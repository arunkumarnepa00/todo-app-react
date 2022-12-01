import React from 'react'

export default function Footer() {
  return (
   
    <footer className="footer text-center">
        <a href="https://www.linkedin.com/in/arun-kumar-nepa-8753a9187">
            <img src={require('../assets/linkedin-logo-svgrepo-com.svg')} className="me-2" width="15px" alt="linkedin"/>
        </a>   
        <a href="https://github.com/arunkumarnepa00">
            <img src={require('../assets/github-svgrepo-com.svg')} width="15px" alt="github"/>
        </a> 
        <p style={{fontSize:'11px'}}>© 2022 Copyright: Arun kumar Nepa</p>
    </footer>
  )
}
