import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div>
        <div>
            <label htmlFor="">
                Userame <br />
                <input type="text" />
            </label>
        </div>
        <div>
            <label htmlFor="">
                Password <br />
                <input type="text" />
            </label>
        </div>
        <button>Login</button>
    </div>
  )
}

export default Login