import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect } from "react";
import { useRef } from "react";
import Home from './Home';
import Button from "./Button";
import { Link } from "react-router-dom";
import NewNavbar from "./NewNavbar";
import NavBar from "./NavBar";
import App from "../App";

// import { useParams } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user , setUser] = useState([]);
    const history = useHistory();
    const [userfound,SetUserfound] = useState(false);
    const dataFetchedRef=useRef(false);
    
    // const {id} = useParams();
    // const { error, isPending, data: users } = useFetch('http://localhost:8080/users');

    // const { error, isPending, data: users } = useFetch('http://localhost:8080/users');

    // useEffect(() => {
    //     const { error, isPending, data: users } = useFetch('http://localhost:8080/users');
    // },[]);

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
        // SetUserfound(false)
        fetch("http://localhost:8080/users")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setUser(data);
                //console.log(blog);
            });
    },[{setUser}]);

    console.log(user);
    console.log(username);
    console.log(password);

    // for (let i = 0; i < user.length; i++) {
    //     const obj = user[i];
    //     const usern = obj.username;
    //     const userp = obj.password;
    //     if(username===usern && password===userp){
    //         console.log("user found")
    //         SetUserfound(true);
    //         // console.log("user found")
    //         break;
    //     }
    // }

    const handleSubmit = (e) => {
    //     // console.log(users)
    //     fetch("http://localhost:8080/users")
    //     .then(res => res.json())
    //     .then(result => 
    //         setUser(result)
    //     )
    //     // .catch(console.log);
    for (let i = 0; i < user.length; i++) {
        const obj = user[i];
        const usern = obj.username;
        const userp = obj.password;
        if(username===usern && password===userp){
            console.log("user found")
            {<App username={username}/>}
            history.push('/')
            
            // SetUserfound(true);
            // console.log("user found")
            // break;
        }
    }
        
    // {userfound && history.push('/')}

        
    }


    


    return (  

        <div className="login">
            {/* <p>{user}</p> */}
            <h2>Login</h2>
               <form onSubmit={handleSubmit}>
                <label>Username :</label>
             <input 
            type="text" 
            required 
            value={username}
            onChange={(e) => {
                setUsername(e.target.value)
            }}
            /> 
            <label>Password:</label>
            <input 
            type="password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <p>
                Not a user ? 
                <Link to="/signup">SignUp</Link>
            </p>
            </form>

            </div>
    );

}
 
export default Login;