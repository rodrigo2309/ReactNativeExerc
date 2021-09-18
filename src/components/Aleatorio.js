import React from "react"
import { Text } from "react-native"
import Estilo from "./Estilo"

const t = 0

export default ({ min, max }) => {        
        console.warn({ min, max })
        //const {min, max} = props ---destriction
        const delta = max - min + 1
        const aleatorio = parseInt(Math.random() * delta) + min
    return(        
        <Text style={Estilo.txtG}>
            O número aleatório é {aleatorio}
        </Text>
    )
}



