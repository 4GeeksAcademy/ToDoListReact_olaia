import React, { useState } from "react";
import Card from "./Card"


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [toDoList, setToDoList] = useState([])
	return (
		<>
		<div className="container">
<input type="text" placeholder="Agrega una tarea" value={inputValue} onChange={(e) => {console.log("nuevo valor:", e.target.value)
	 setInputValue(e.target.value)}} ></input>
	
	onkeydown 

		</div>
		</>
	);
};

export default Home;
