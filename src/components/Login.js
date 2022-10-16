import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect } from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const { error, isPending, data: users } = useFetch('http://localhost:8080/users');

    // const { error, isPending, data: users } = useFetch('http://localhost:8080/users');

    // useEffect(() => {
    //     const { error, isPending, data: users } = useFetch('http://localhost:8080/users');
    // },[]);
    

    const handleSubmit = (e) => {
        // console.log(users)
        
    }
    return (  
        <div className="login">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { 

        // <div>{Object.entries(users)}</div>
        users.map(user => <div>{user.name}</div>)

        
//         <div className="login">

//             {/* {users} */}

//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>Username :</label>
//             <input 
//             type="text" 
//             required 
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             /> 
//             {/* <label>Email:</label>
//             <input
//             type="email" 
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             /> */}
//             <label>Password:</label>
//             <input 
//             type="password" 
//             required 
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             />
//             <button>Login</button>
//             </form>

// </div>

}
    </div> 
        
    
    );
}
 
export default Login;