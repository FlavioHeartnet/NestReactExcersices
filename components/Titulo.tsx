const Titulo = (props) => {
    //Lembre-se props é apenas para leitura, 
    //se tentar atribuir um valor nesse arquivo,
    //vai gerar um erro.
    return(
        <>
            <h1>{props.titulo}</h1>
            <h3>{props.subtitulo}</h3>
        </>
    )
}
export default Titulo