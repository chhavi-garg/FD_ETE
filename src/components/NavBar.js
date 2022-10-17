import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = (usern) => {
    // let username = "username";
    const [ide , setIde] = useState('')
    console.log(usern)

    const handlenewUser = ({name}) =>{
        setIde(name);
    }

    // const handleClick = (e)=>
    // {
    //     console.log("hello, ninjas",e);  //e--> events object
    // }
    // const handleClickAgain = (name)=>
    // {
    //     console.log("hello, "+name);
    // }
    return (
        <nav className="navbar">
            <h1>Good Reads</h1>
            <div className="links-left">
                <Link to="/"> Blogs List</Link>
                <Link to="/create"> Add Blog</Link>
                {/* <button onClick={handleClick}>Click Me</button>
                <button onClick={handleClickAgain('Chhavi')}>Click Me Again</button> */}
            </div>
            <h1 className="username">Welcome {ide} ! </h1>
            <div className="links-right">
                
                <Link to="/login" style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' }}>Logout</Link>
            </div>
           
        </nav>
      );
}
 
export default NavBar;