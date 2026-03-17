import {Button} from "./Button.tsx";
import type {Filter, Money} from "../App.tsx";

type NewComponentType = {
    onClickFilterHandler:(nameButton:Filter)=>void,
    currentMoney:Money[]
}

export const NewComponent = ({onClickFilterHandler,currentMoney}:NewComponentType) => {
    return (
        <>
            <ul>
                {currentMoney.map((t, index) => {
                    return (
                        <li key={index}>
                            <span>{t.banknots}</span>
                            <span>{t.number}</span>
                            <span>{t.value}</span>

                        </li>
                    )
                })}
            </ul>
            <div>
                <Button name={'all'} callback={() => (onClickFilterHandler('all'))}/>
                <Button name={'rubles'} callback={() => (onClickFilterHandler('rubles'))}/>
                <Button name={'dollars'} callback={() => (onClickFilterHandler('dollars'))}/>
            </div>

        </>
    )
}