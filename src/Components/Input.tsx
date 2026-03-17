import type {ChangeEvent} from "react";

type InputType ={
    inputValue: string,
    setInputValue:(inputValue:string)=>void,
}
export const Input = ({setInputValue,inputValue}:InputType) => {

const setInputHundler = (e:ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
}

    return (
        <>
            <input value={inputValue} onChange={setInputHundler}/>
        </>
    )
}