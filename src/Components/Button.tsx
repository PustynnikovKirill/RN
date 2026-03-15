
type ButtonType = {
    name: string,
    callback: ()=>void,
}



export const Button = ({name,callback}:ButtonType)=>{
    const onClickHundler = () => {
        callback();
    }


    return (
        <button onClick={onClickHundler}>{name}</button>
    )
}