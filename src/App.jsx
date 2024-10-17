import { useState } from 'react'
import './App.css'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function App() {

  const [active,setActive]=useState(true);

  return (
  <div className={`container ${active?"active":""}`} id="container">
      <div className="form-container sign-up">
          <form>
              <button>Sign Up</button>
          </form>
      </div>
      <div className="form-container sign-in">
          <form>
              <button>Sign In</button>
          </form>
      </div>
       <div className="toggle-container">
          <div className="toggle">
              <div className="toggle-panel toggle-left">
                  <button onClick={()=>setActive(false)} className="hidden" id="login">Sign In</button>
              </div>
              <div className="toggle-panel toggle-right">
                  <button onClick={()=>setActive(true)} className="hidden" id="register">Sign Up</button>
              </div>
          </div>
      </div> 
  </div>

  )
}

export default App
