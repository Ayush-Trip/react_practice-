import React from 'react';
import ReactDOM from 'react-dom';
 import './index.css'; 
const name = "Ayush";
const img1="https://picsum.photos/200/300"
const img2="https://picsum.photos/250/300"
const img3="https://picsum.photos/300/300"
const linkedin= "https://www.linkedin.com/in/ayush-tripathi-762a57239/"
ReactDOM.render(
    <>
    <h1 className= "heading"  >My name is {name} </h1>
    <div className='img_div'>
    <img src={img1} alt = "Random Images"/>
    <img src={img2} alt = "Random Images"/>
    <a href = {linkedin} target = "_blank">
    <img src={img3} alt = "Random Images"/>
    </a>
    </div>
    </>,
    document.getElementById("root")
);
