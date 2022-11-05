import React from "react";

function LogIn() {

    function handleSubmit(event) {
        console.log("test");
        console.log(event.target);
        // const fd = new FormData(event)
    }

    return(
        <div>
            <form onSubmit={() => handleSubmit()}>
                <div className="imgcontainer">
                    <img src="assets/ge.png" alt="Avatar" className="avatar" style={{width: "100px"}}/>
                </div>
                    
                <div className="container">
                    <label style={{fontWeight: "bold"}}>Full Name</label>
                    <input id="full-name" className="inputName" type={"text"} placeholder="Enter full name" name="fullName" required />

                    <label><b>Employee Id</b></label>
                    <input id="employeeId" className="inputName" type={"text"} placeholder="Enter Employee Id" name="employeeId" required />

                    <label><b>PassWord</b></label>
                    <input id="psw" className="inputName" type={"password"} placeholder="Enter Password" required />

                    <button type="submit" className="login">Login</button>
                </div>
            </form>
            {/* <label>
                <input type="checkbox" checked="checked" name="remember" /> Remember me 
            </label> */}
        
        </div>


        
    )
};

export {LogIn};