import {type ChangeEvent, useState} from "react";

type FullInput = {
    setMessageFunction:(title:string)=>void;
}
export const FullInput = ({setMessageFunction}:FullInput) => {

    let [title, setTitle] = useState('');


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }

    const setTitleHandler = () => {
        setMessageFunction(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={setTitleHandler}>+</button>
        </div>
    )
}