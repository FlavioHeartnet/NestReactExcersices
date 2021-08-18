
const jsx1 = () => {
    const conteudo = (
        <div><p>A noticia é embaçada</p></div>
    )
    return (
    <div style={{margin:10}}>
        <h1>Meninão</h1>
        <span>chegou</span>
        {conteudo} {seuNome("Flavio")} 
        {lista}       
    </div>
    )
}

function seuNome(nome:string):string{
    return nome
}

function lista(){
    const array: number[] = [1,2,3,4,5,6]
    let list:string = ""
    array.map(x => {
        list += <p>{x}</p>        
    })
    return(
        <>
           {list}
        </>
    )
}
export default jsx1