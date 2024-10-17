import React, { useState } from 'react'
import "./Login.css"
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Login = () => {

    const[activeClass,setActiveClass]=useState(false);

    const classFunction=(e)=>{
        e.preventDefault();
        setActiveClass(!activeClass); // falanca fonksiyon
    }

  return (
    <div className={`container ${activeClass?"active":""}`}>
      <div className='formContainer'>
        <form className='signInForm'>
            <h1>Giriş Yap</h1>
            <div className='loginWithSocial'>
                <button><IoLogoGoogleplus size={18} alt="Google" /></button>
                <button><FaFacebookF size={18} alt="Facebook" /></button>
                <button><FaGithub size={18} alt="Github" /></button>
                <button><FaLinkedinIn size={18} alt="Linkedin" /></button>
            </div>
            <p className='useAccount'>ya da hesap bilgilerinizi kullanın</p>
            <div className='loginInputs'>
                <input type='text' placeholder='Email'/>
                <input type='password' placeholder='Şifre'/>
            </div>
            <a className='forgotPasswordLink' src="#">Şifrenizi mi unuttunuz ?</a>
            <button className='SignInButton' onClick={classFunction}>Giriş Yap</button>
        </form>
        <form className='signUpForm'>
            <h1>Kayıt Ol</h1>
            <div className='loginWithSocial'>
                <button><IoLogoGoogleplus size={18} alt="Google" /></button>
                <button><FaFacebookF size={18} alt="Facebook" /></button>
                <button><FaGithub size={18} alt="Github" /></button>
                <button><FaLinkedinIn size={18} alt="Linkedin" /></button>
            </div>
            <div className='SignUpInputs'>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Email'/>
                <input type='password' placeholder='Şifre'/>
            </div>
            <button className='SignInUpButton' onClick={classFunction}>Kayıt Ol</button>
        </form>
      </div>
      <div className='formContainer'>
            <div className='SignUpText'>
                <h1>Merhaba, Hoşgeldin !</h1>
                <p>Hesabın yoksa, aşağıdan kayıt olabilirsin :)</p>
                <button onClick={classFunction}>Kayıt Ol</button>
            </div>
            <div className='SignInText'>
                <h1>Merhaba, Hoşgeldin !</h1>
                <p>Zaten bir hesabın var mı ?</p>
                <button onClick={classFunction}>Giriş Yap</button>
            </div>
      </div>
    </div>
  )
}

export default Login
