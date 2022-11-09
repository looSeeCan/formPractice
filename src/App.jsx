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

// const App = () => { /// using useRef()
	
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

	const [values, setValues] = useState({
		/// since we use useState hook here, its going to rerender our component each time the state is changed. Its not a 
		/// problem. but there is a solution. instead of using useState, we can use useRef hook
		username:"",
		email:"",
		birthDay:"",
		password:"",
		confirmPassword:"",
	}); 

	const inputs = [ /// these inputs are for the props
		{
			id:1,
			name:"username",
			type:"text",
			placeholder:"Username",
			errorMessage:"Username should be 3-16 characters and should not include any special characters!",
			label:"Username",
			pattern:"^[A-Za-z0-9]{3,16}$", /// remember the invalid in css
			required: true,
		},
		{
			id:2,
			name:"email",
			type:"email",
			placeholder:"Email",
			errorMessage:"Please input a valid email address!",
			label:"Email",
			required: true,
		},
		{
			id:3,
			name:"birthDay",
			type:"date",
			placeholder:"Birthday",
			label:"Birthday"
		},
		{
			id:4,
			name:"password",
			type:"password",
			placeholder:"Password",
			errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
			label:"Password",
			pattern:'^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
			required: true,
		},
		{
			id:5,
			name:"confirmPassword",
			type:"password",
			placeholder:"Confirm Password",
			errorMessage:"Passwords do not match",
			label:"Confirm Password",
			pattern:values.password, /// we want the same password which is now stored in the values use state
			required: true,
		},
		
	];

	// console.log(...inputs);
	// console.log([...inputs]);
	// console.log({...inputs});

	function handleSubmit(e) {
		e.preventDefault();
	};

	const onChange = (e) => {
		console.log(e);
		setValues({...values, [e.target.name]: e.target.value});
	};
	console.log(values);

	return(
		<div className="app">
			<form onSubmit={handleSubmit}>
				<h1>Register</h1>
				{/* <FormInput name="username" type="text" placeholder="Username" label="Username" /> */}
				{inputs.map(input => 
					<FormInput 
						key={input.id} {...input} 
						value={values[input.name]}
						onChange={onChange}
					/>
				)}
				<button>Submit</button>
			</form>
		</div>
	);	
}


export default App;