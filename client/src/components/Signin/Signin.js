import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "./Signin.css"

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
<div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Sign In</h1>
        <div>
          <input placeholder="E-mail" className="joinInput" type="text" onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <input placeholder="Password" className="joinInput mt-20" type="password" onChange={(event) => setPassword(event.target.value)} />
        </div>
        <Link to={`/lobby`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
        <p className="normal">No account yet? Slap <Link to={`/register?email=${email}`}>REGISTER</Link> now!</p>
      </div>
    </div>
    )
}

export default SignIn;