import Estilo from '../../components/estilo'
import Titulo from '../../components/Titulo'
const fragment = ()=>{
    return(
        <>
            <h1>Bem vindo</h1>
            <Titulo
                titulo="Flavio Chegou"
                subtitulo="O bicho vai pegar"
            />
            <Estilo numero={-1} color="#2D2"/>
            <Estilo numero={2} color="#D22"/>
            
        </>
    )
}

export default fragment