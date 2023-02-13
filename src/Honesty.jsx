import {useState} from "react";

const Honesty = () => {
    const [checked, setChecked] = useState(true)

    return <div>
        <h2>Обманываешь?</h2>
        <div> Да <input type={"checkbox"} value={checked} onChange={() => setChecked(!checked)}/></div>
        <div>{checked ? <h4>Все ещё красовчик</h4> : <h4>Не, ну это как-то нехорошо</h4>}</div>
    </div>
}

export default Honesty