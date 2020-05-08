import React, { useState, useEffect } from 'react';
import { Link, useHistory} from "react-router-dom";
import { Redirect } from 'react-router';
import queryString from 'query-string';
import http from "../http-common";

import "../Signin/Signin.css"

const SignIn = ({ location }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const { email } = queryString.parse(location.search);
        setEmail(email)
    })

    const registerAccount = () => {
const data = {
    email: email,
    password: password,
    name: name,
    role: 'admin'
}
 http.post("/user/register-new", data).then(response => {
     console.log(response.data)
     setSubmitted(true)
}
 
 )
    }

    if (submitted)
    {
       return <Redirect to='/' />
    }
    else return(
<div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Register</h1>
        <div>
          <input placeholder="E-mail" className="joinInput" type="text" defaultValue={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <input placeholder="Password" className="joinInput mt-20" type="password" onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div>
          <input placeholder="Name" className="joinInput mt-20" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <Link>
          <button onClick={registerAccount} className={'button mt-20'} type="submit">Register</button>
        </Link>
        <p className="normal">Already have an account ? <Link to={`/`}>SIGN IN</Link> now!</p>
      </div>
    </div>
    )
}

export default SignIn;