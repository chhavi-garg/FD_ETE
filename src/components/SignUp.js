import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {username,email,password};
    
        fetch('http://localhost:8080/users', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
        }).then(() => {
          history.push('/login');
        })
      }
    return (  
        <div className="signup">
            <h2>Sign Up ! </h2>
            <form onSubmit={handleSubmit}>
                <label>Username :</label>
            <input 
            type="text" 
            required 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            /> 
            <label>Email:</label>
            <input
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        <button>Sign Up</button>
        <p>
        <br />
        <b>Already a user ? 
              <Link to="/login">Login</Link></b>
              
        </p>
      </form>
    </div>
    );
}
 
export default SignUp;