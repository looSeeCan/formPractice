import React, {useState} from "react";
import "../CSS/formInput.css";

// const FormInput = (props) => { /// for useRef

//     console.log(props)
//     return(
//         <div className="formInput">
//             <input name={props.name} placeholder={props.placeholder}/>
//             {/* <input ref={props.refer} placeholder={props.placeholder}/> */} {/*just for the userName */}
//             {/* <input placeholder={props.placeholder} onChange={e=>props.setUserName(e.target.value)} /> */} {/*for the useState */}
//         </div>
//     );
// }

// export default FormInput;

const FormInput = (props) => {
    
    // console.log(props);
    const {label, errorMessage, onChange, id, ...inputProps} = props;
    // console.log(label);
    // console.log(onChange);
    // console.log(id);
    // console.log(inputProps);
    
    const [focused, setFocused] = useState(false); /// for onBlur
    console.log(useState());
    console.log(focused);
    
    const handleFocus = (e) => {
        console.log(e);
        setFocused(true);
    };

    return(
        <div className="formInput">
            <label>{label}</label>
            {/* the onBlur event occurs when an event looses focus */}
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} />
            <span>{errorMessage}</span>
        </div>
    );
}

export default FormInput;