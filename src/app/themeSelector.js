import { useState } from "react"

export default function ThemeSelector() {
    const [color,setColor] = useState("black")
    function handleChange(e) {
        setColor(e.target.value)
    }
    return (
        <div style={{backgroundColor:color}}>
            <label>
                Selecciona un tema: 
                <select onChange={handleChange}>
                    <option value={"white"}>Claro</option>
                    <option value={"black"}>Oscuro</option>
                    <option value={"orange"}>Colorido</option>
                </select>
            </label>
            
        </div>
    )
}