import {useState} from "react";

const Check = () => {
    const [value, setValue] = useState(1)

    const changeValue = (event) => {
        setValue(event.target.value)
    }

    return <div>
        <h2>Ответил на прошлый вопрос?</h2>
        <div> Да <input type={"checkbox"} value={"1"} checked={value == "1"? true: false}
        onChange={changeValue}/></div>
        <div> Нет <input type={"checkbox"} value={"2"} checked={value == "2"? true: false}
               onChange={changeValue}/></div>
        <div>{value == "1" ? <h4>Красовчик</h4> : <h3>Это просто необходимо!</h3>}</div>
    </div>
}

export default Check