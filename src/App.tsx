import './App.css'
import {useState} from "react";

import {Button} from "./Components/Button.tsx";
import {Input} from "./Components/Input.tsx";

type MessageType = {
    message: string
}


export const App = () => {

    let [message, setMessage] = useState<MessageType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);

    let [inputValue, setInputValue] = useState("");


    const buttonHandler = (inputValue:string) => {
        setMessage([{message:inputValue},...message] );

    }

    const callBackButton = () => {
        buttonHandler(inputValue)
        setInputValue('')
    }
    return (
        <div className={'App'}>
          <Input inputValue={inputValue} setInputValue = {setInputValue} />
            <Button name = '+' callback={callBackButton}/>
            {message.map((item: MessageType, index) => {

                return (
                   <div key={index}>{item.message}</div>
                )
            })}
        </div>
    );
}


