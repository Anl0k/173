import style from './app.module.css'
import Counter from "./Counter";
import Input from "./Input";
import Check from "./Check";
import Honesty from "./Honesty";
import Options from "./Options";

function App() {
    return (
        <div className={style.main}>
            <Counter/>
            <Input />
            <Check />
            <Honesty />
            <Options />
        </div>
    );
}

export default App;