import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
import NavBar from "./NavBar";

const Home = ({usern}) => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="container">
      <NavBar usern={usern}/>
      <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
      </div>
    </div>
  );
}
 
export default Home;