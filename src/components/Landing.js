import React from 'react'

const Landing = () => {
    const btn =document.getElementById("btn");
    const light =document.getElementById("light");

    const toggleBtn = () =>{
        btn.classList.toggle("active")
        light.classList.toggle("on")};
  return (
    <div className="lamp-container">
    <img src="https://i.postimg.cc/4NJvKgzc/lamp.png" alt="..." className="lamp"/>
    <img src="https://i.postimg.cc/W1y0fqxm/light.png" alt="..." className="light" id="light"/>

    <button type="button" onClick={toggleBtn} id="btn"><span></span></button>
</div>
  )
}

export default Landing