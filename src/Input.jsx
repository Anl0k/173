import {useState} from "react";

const Input = () => {

    const [text, setText] = useState("")

    const textChange = (event) => {setText(event.target.value)}

    return <div>
        <h2>Кто вы из покемонов?</h2>
        <input type={"text"} value={text} onChange={textChange}/>
        {text ?
            <span>Точно {text}?</span>:
            <span>Надо что-то придумать, а то как это так</span>
        }
    </div>
}

export default Input