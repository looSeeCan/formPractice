import React, {useState} from "react";
import DateTimePicker from "react-datetime-picker"

function DatePicker() {
    const [value, onChange] = useState(new Date());
    console.log(value);
    return (
        <div>
            <DateTimePicker onChange={onChange} value={value} />
        </div>
    );
};

export {DatePicker}