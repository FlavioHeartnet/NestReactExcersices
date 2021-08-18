import { useState } from "react"

const Mouse = () => {
   const arrayX =  useState(0)
   let x = arrayX[0]
   const AlterarX = arrayX[1]
   const arrayY =  useState(0)
   let y = arrayY[0]
   const AlterarY = arrayY[1]

    const quandoMover = (ev) =>{
        
         AlterarX(ev.clientX)
         AlterarY(ev.clientY)
         
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#222",
            color: "#fff",
            height: "100vh"
        }} onMouseMove={quandoMover}>
            <span>Eixo X:{x}</span>
            <span>Eixo Y:{y}</span>
        </div>
    )
}

export default Mouse