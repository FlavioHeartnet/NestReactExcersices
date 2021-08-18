import { Table } from 'semantic-ui-react'
import ProductList from '../../data/listaProdutos'
const repeticao2 = () => {
    
    const renderBodyRow = ({id,nome,preco}, i) =>({
       key: i,
       cells: [
            id,nome,'R$ '+preco
       ]
    })

    const headerRow = ['Id', 'Nome', 'Preço']

    return (
        <Table celled tableData={ProductList} headerRow={headerRow} renderBodyRow={renderBodyRow}/>   
    )
}

export default repeticao2