
import { gerarNumerosLotofacil } from "./script";

function testGerarNumerosLotoFacil(){
    const response = gerarNumerosLotofacil()
    if(!Array.isArray(response))
        throw new Error("A função gerarNumerosLotofacil não retornou um Array.")
    if(response.length !== 15)
        throw new Error("A função gerarNumerosLotofacil não retornou um Array com 15 elementos.")
    response.forEach((value, index) => {
        for(let i = index + 1; i < response.length; i++){
            if(value === response[i]){
                throw new Error("A função gerarNumerosLotofacil não retornou um Array com 15 elementos diferentes.")
            }
        }
    })
}