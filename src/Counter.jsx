import {useState} from "react";

const Counter = () => {

    const [count, setCount] = useState(0)

    const up = () => {
        setCount(count + 1)
    }
    const down = () => {
        setCount(count - 1)
    }

    return <div>
        <h1>Сколько нужно золота?</h1>
        <h2>{count}</h2>
        <div>
            <button onClick={up}>Нужно больше золота!</button>
            <button onClick={down}>Нужно меньше золота...</button>
        </div>
    </div>
}

export default Counter;