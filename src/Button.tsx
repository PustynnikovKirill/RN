





export const CustomButton = () => {

/*    const myFirstSubscriber = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Hello Vasia')
    }
    const myNextSubscriber = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Hello Vania')
    }*/

    const onClickHundler = (name:string): void => {
        console.log('Hello ', name)
    }

    return (<>
            <button onClick={(e: React.MouseEvent<HTMLButtonElement>)=>onClickHundler("Kirill")}>+</button>
            <button onClick={(e: React.MouseEvent<HTMLButtonElement>)=>{}}>+</button>

    </>
    )
}