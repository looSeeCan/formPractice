import React from "react";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});  
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        // console.log(event);
        // console.log(event.target);
        event.preventDefault();
        // const fd = new FormData(event.target);
        // console.log(fd);

        // for(let item of fd) {
        //     console.log(item);
        // }

        // const obj = Object.fromEntries(fd);
        // console.log(obj);
    }

    render() {
        return (

            // <form>
            //     <div className="imgcontainer">
            //         <img src="assets/ge.png" alt="Avatar" className="avatar" style={{width: "100px"}}/>
            //     </div>
                    
            //     <div className="container">
            //         <label style={{fontWeight: "bold"}}>Full Name</label>
            //         <input id="full-name" className="inputName" type={"text"} placeholder="Enter full name" name="fullName" required />

            //         <label><b>Employee Id</b></label>
            //         <input id="employeeId" className="inputName" type={"text"} placeholder="Enter Employee Id" name="employeeId" required />

            //         <label><b>PassWord</b></label>
            //         <input id="psw" className="inputName" type={"password"} placeholder="Enter Password" required />

            //         <button type="submit" className="login">Login</button>
            //     </div>
            // </form>

            <form onSubmit={this.handleSubmit}>        
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />        
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


export default NameForm;