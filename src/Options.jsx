import {useState} from "react";

const Options = () => {
    const allOptions = ["Блум", "Стелла", "Флора", "Муза", "Текна", "Лейла"]
    const [value, setValue] =useState('')

    const options = allOptions.map((text,index) => {
        return <option key={index}>{text}</option>
    })

    return <div>
        <h2>А кто ты из феечек Винкс?</h2>
        <select value={value} onChange={(event)=> setValue(event.target.value)}>
            {options}
        </select>
        <div>{value == "Блум" ? "Хехе, предсказуемо" : "Not hehe"}</div>
    </div>
}

export default Options