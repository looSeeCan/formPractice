import React, {useRef, useState} from "react";
// import ReactDom from "react-dom";
// import "./CSS/app.css";
import {DatePicker} from "./components/dateRangePicker"; 
import {LogIn} from "./components/logIn"
import NameForm from "./components/logIn2";
import LogIn3 from "./components/logIn3";
import LogIn4 from "./components/logIn4";
import ForFormInput from "./components/forFormInput";
import UserLogInAuth from "./components/userLogInAuth";
import UserLogOutAuth from "./components/userLogOutAuth";
import Profile from "./components/profile";

document.title = "Forms";

// const App = () => { /// FormInput: using useRef()
	
// 	const userNameRef = useRef()

// 	// const handleSubmit = (e) => { /// idk why this arrow function gives me issues
// 	// 	e.preventDefualt()
// 	// 	console.log(e);
// 	// 	console.log(userNameRef);
// 	// }

// 	// function handleSubmit(e) { /// just grabs the userName
// 	// 	console.log(e);
// 	// 	e.preventDefault();
// 	// 	console.log(userNameRef);
// 	// 	console.log(userNameRef.current);
// 	// 	console.log(userNameRef.current.value);
// 	// };


// 	function handleSubmit(e) {
// 		e.preventDefault();
// 		console.log(e);
// 		const data = new FormData(e.target);
// 		console.log(data);
// 		const entries = Object.fromEntries(data.entries());
// 		console.log(entries);
// 	};


// 	return(
// 		<div className="app">
// 			<form onSubmit={handleSubmit}>
// 				<FormInput name="userName" placeholder="username" />
// 				{/* <FormInput refer={userNameRef} placeholder="UserName"/>  */} {/*this was just for the userName */}
// 				{/* <FormInput placeholder="UserName" setUserName={setUserName} />   */} {/*this was for useState */}
// 				<FormInput name="email" placeholder="Email" />
// 				<FormInput name="fullName" placeholder="Full Name" />
// 				<FormInput name="employeeId" placeholder="Ge Employee Id" />
// 				<button>Submit</button>
// 			</form>
// 		</div>
// 	);	
// }

// export default App;


const App = () => {

	return(
		<div>
			<UserLogInAuth />
			<UserLogOutAuth />
			<Profile />
			<ForFormInput />
			{/* <LogIn /> */}
			{/* <LogIn3 /> */}
			{/* <LogIn4 /> */}
			{/* <NameForm /> */}
		</div>
	) 
	
}


export default App;