
type ButtonType = {
    name: string,
    callback: ()=>void,
}



export const Button = ({name,callback}:ButtonType)=>{
    const onClickHandler = () => {
        callback();
    }


    return (
        <button style={{width: "70px", height: "35px", backgroundColor: "lightblue"}} onClick={onClickHandler}>{name}</button>
    )
}