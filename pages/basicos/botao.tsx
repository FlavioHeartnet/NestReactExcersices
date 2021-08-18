const botao = () =>{
const acao1 = () =>{
    alert("Ola")
}
function acao2(){
    alert("Ola2")
}
const acao5 = (e) =>{
    console.log(e)
}

    return (
        <div>
            <button onClick={acao1}>click1</button>
            <button onClick={acao2}>click2</button>
            <button onClick={function (){
                alert("Ola3")
            }}>click3</button>
            <button onClick={
                () => {
                    alert("ola4")
                }
            }>click4</button>
            <button onClick={acao5}>click5</button>
        </div>
    )
}

export default botao