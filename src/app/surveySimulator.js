import { useState } from "react";

export default function SurveySimulator() {
    const [ok,setOk] = useState(0)
    const [no,setNo] = useState(0)
    const [maybe,setMaybe] = useState(0)

    function onClick(e) {
        switch(e.target.name) {
            case "si":
                setOk(ok+1)
                break;
            case "no":
                setNo(no+1)
                break;
            case "maybe":
                setMaybe(maybe+1)
                break
        }
    }

    return(
        <div>
            <label>Si: {ok}</label>
            <br/>
            <label>No: {no}</label>
            <br/>
            <label>Tal vez: {maybe}</label>
            <br/>
            <button onClick={onClick} name="si">Si</button>
            <button onClick={onClick} name="no">No</button>
            <button onClick={onClick} name="maybe">Tal vez</button>
        </div>
    )
}       