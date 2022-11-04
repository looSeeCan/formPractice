import React, {useRef, useState} from "react";
// import ReactDom from "react-dom";
import "./CSS/app.css";
import {DatePicker} from "./components/dateRangePicker" 
import {LogIn} from "./components/logIn"
import NameForm from "./components/logIn2";
import LogIn3 from "./components/logIn3";
import LogIn4 from "./components/logIn4";
import LogIn5 from "./components/logIn5";
import FormInput from "./components/formInput"


document.title = "Empty Template";

const App = () => {
	// const [userName, setUserName] = useState(""); /// since we use useState hook here, its going to rerender our component each time the state is changed. Its not a 
	/// problem. but there is a solution. instead of using useState, we can use useRef hook
	const userNameRef = useRef()

	// const handleSubmit = (e) => { /// idk why this arrow function gives me issues
	// 	e.preventDefualt()
	// 	console.log(e);
	// 	console.log(userNameRef);
	// }

	// function handleSubmit(e) { /// just grabs the userName
	// 	console.log(e);
	// 	e.preventDefault();
	// 	console.log(userNameRef);
	// 	console.log(userNameRef.current);
	// 	console.log(userNameRef.current.value);
	// };


	function handleSubmit(e) {
		console.log(e);
		e.preventDefault();
		const data = new FormData(e.target);
		console.log(data);
		console.log(Object.fromEntries(data.entries()));
	};


	return(
		<div className="app">
			<form onSubmit={handleSubmit}>
				<FormInput name="userName" placeholder="userName" />
				{/* <FormInput refer={userNameRef} placeholder="UserName"/>  */} {/*this was just for the userName */}
				{/* <FormInput placeholder="UserName" setUserName={setUserName} />   */} {/*this was for useState */}
				<FormInput placeholder="Email" />
				<FormInput placeholder="Full Name" />
				<FormInput placeholder="Something Else" />
				<button>Submit</button>
			</form>
		</div>
	);	
}
export default App;