///React js - Upload File Data using FormData Object

import React from "react";
import Axios from 'axios';

const LogIn4 = () => {
    
    /// create a form data object and add the file data below to it
    let formData = new FormData();
    console.log(formData);
    

    const onFileChange = (e) => { /// declare a file change function which we will expect in event
        console.log(e);
        console.log(e.target.files[0]);
        if(e.target && e.target.files[0]) {
            console.log(true);
            formData.append("file", e.target.files[0]);
        }
    }

    const submitFileData = (e) => { /// install axios
        e.preventDefault();
        Axios.post(
            "https://v2.convertapi.com/upload",
            {formData}
        )
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
    }


    return(
        <div className="logIn">
            <div>
                <input type="file" name="file_upload" onChange={onFileChange} />
            </div>
            <div>
                <button onClick={submitFileData}>Submit</button>
            </div>
        </div>
    );
}

export default LogIn4;

