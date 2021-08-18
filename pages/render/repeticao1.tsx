import { List } from 'semantic-ui-react'
export default function repeticao() {
    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Daniel'
    ]
    let array = []
    listaAprovados.map((element, i) => {
        array.push(<List.Item as='li' key={i}>{element}</List.Item>)
    });
    return (
        <List as='ul'>
            {array}
        </List>
    )
}

