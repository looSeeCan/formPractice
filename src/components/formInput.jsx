import React from "react";
import "../CSS/formInput.css";

const FormInput = (props) => {

    console.log(props);

    return(
        <div className="formInput">
            <input name={props.name} placeholder={props.placeholder}/>
            {/* <input ref={props.refer} placeholder={props.placeholder}/> */} {/*just for the userName */}
            {/* <input placeholder={props.placeholder} onChange={e=>props.setUserName(e.target.value)} /> */} {/*for the useState */}
        </div>
    );
}

export default FormInput;