import {useNavigate} from "react-router";
import React, {useState} from "react";
import {useTypedSelector} from "./hooks/useTypedSelector.ts";
import {useActions} from "./hooks/useActions.ts";

function App() {

    const [value, setValue] = useState<number>(0)

    const count = useTypedSelector((state) => state.counter.value)
    const {increment, decrement, incrementByAmount} = useActions();

    const navigate = useNavigate();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(+e.target.value);
    }

    return (
        <>
            <button onClick={() => navigate("/asd")}>ASD</button>
            <button onClick={() => decrement()}>Decrement</button>
            <p>{count}</p>
            <button onClick={() => increment()}>Increment</button>

            <br/>

            <div>
                <input value={value} onChange={onChange}/>
                <button onClick={() => incrementByAmount(value)}>Submit</button>
            </div>

        </>
    )
}

export default App;

export function TestElement() {
    const navigate = useNavigate();

    return (
        <>
            <div>Hello world!</div>
            <button onClick={() => navigate("/")}>HOME</button>
        </>
    )
}