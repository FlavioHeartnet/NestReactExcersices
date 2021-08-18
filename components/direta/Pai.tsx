import Filho from './Filho'
const Pai = (props) =>{
    return (
        <div>
            <h1>Familia {props.familia}</h1>
            <h2>Pai: {props.pai} {props.familia}</h2>
            <Filho {...props} nome="Gabriela"/>
            <Filho {...props} nome="Joaquin"/>
            <Filho {...props} nome="Marcos"/>
        </div>
    )
}

export default Pai