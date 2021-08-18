import { useState } from 'react'
import { Segment, Button, Grid, GridColumn } from 'semantic-ui-react'
const Contador = () => {
    let [total, updateValue] = useState(0)

    const AddValue = () => updateValue(total+1)
    
    const SubtValue = () => updateValue(total-1)

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#222",
            height: "100vh"
        }}>
            <Segment><h1>{total}</h1></Segment>
            <Grid columns={2}>
                <GridColumn>
                    <Button onClick={AddValue} basic color={"green"}>+</Button>
                </GridColumn>
                <GridColumn>
                <Button onClick={SubtValue} basic color={"red"}>-</Button>
                </GridColumn>
            </Grid>
            
           
        </div>
    )
}

export default Contador